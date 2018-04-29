import { createSelector, createStructuredSelector } from 'reselect'
import { getUuid } from 'redux/user/selectors'
import { getFilter } from 'redux/ui/selectors'
import { sortBy } from 'utils/sort'
import { constants } from 'config'
import {
  isOrg,
  sortAssignees,
  isReviewFinished,
  formatRating,
  renameOrg,
  roundAgentRating,
} from './functions'

const emptyArray = []

export const hasAllAgents = state => state.agents.hasAllAgents

export const getAgents = state => state.agents.agents

export const getAgent = (state, id) => {
  const uuid = id || getUuid(state)
  const agent = getAgents(state)[uuid]
  return agent ? roundAgentRating(agent) : agent
}

export const isAgent = (state, id) => !!getAgent(state, id)

export const getOrgId = state => {
  const agent = getAgent(state)
  return (isAgent(state) && isOrg(agent)) ? agent.id : agent.org_agent_id
}

export const getOrg = state => {
  const orgId = getOrgId(state)
  return state.agents.agents[orgId]
}

export const isStore = createSelector([getOrg], org => org.unique_tag === 'cw_store')

export const isOrgOffline = state => isAgent(state) && getOrg(state).availability !== 'online'

const getActiveAgentsId = state => Object.keys(state.agents.statuses.active)
const getInactiveAgentsId = state => Object.keys(state.agents.statuses.inactive)

const getAgentsIdsByStatus = createStructuredSelector({
  active: getActiveAgentsId,
  inactive: getInactiveAgentsId,
})

export const getAgentsIds = createSelector([getAgents], agents => Object.keys(agents))

export const getMaybeActiveAgentsIds = createSelector(
  [getAgentsIdsByStatus, getFilter],
  ({ active, inactive }, filter) => (
    filter.showInactive
      ? [...active, ...inactive]
      : active
  )
)

export const isAgentOrg = (state, id) => {
  const agent = getAgent(state, id)
  return isAgent(state) && isOrg(agent)
}

// TODO find a way to remove getAgents from the selector as it is not performing
export const getAgentsByStatus = status => createSelector(
  [getAgentsIdsByStatus, getAgents], (agentsByStatus, allAgents) => agentsByStatus[status].reduce((prev, current) => {
    prev[current] = roundAgentRating(allAgents[current])
    return prev
  }, {})
)

export const getActiveSimpleAgents = createSelector(
  [getAgentsByStatus('active'), getOrgId], (agents, orgId) => Object.values(agents).filter(({ id }) => id !== orgId)
)

const makeSortByOrgAndUserId = selector => createSelector(
  [selector, getUuid, getOrgId], (agents, userId, orgId) => sortAssignees(agents, orgId, userId))

export const getSortedActiveAgents = makeSortByOrgAndUserId(getAgentsByStatus('active'))

export const getSortedInactiveAgents = makeSortByOrgAndUserId(getAgentsByStatus('inactive'))

export const getAssignees = createSelector(
  getAgents, getOrg, (agents, org) => ({ ...agents, [org.id]: renameOrg(org) })
)

export const getSortedMaybeActiveAssignees = createSelector(
  [getFilter, getAgentsByStatus('active'), getAgentsByStatus('inactive'), getOrg, getUuid],
  ({ showInactive }, activeAgents, inactiveAgents, org, uuid) => (
    sortAssignees({ ...activeAgents, ...(showInactive ? inactiveAgents : {}), [org.id]: renameOrg(org) }, org.id, uuid)
  )
)

export const getSortedActiveSimpleAgents = createSelector(
  [getActiveSimpleAgents, getOrgId, getUuid],
  (agents, orgId, uuid) => sortAssignees(agents, orgId, uuid)
)

const agentReviews = (state, id) => state.agents.reviews[id] || emptyArray

/* Currently (Feb-2016) there are reviews with empty id's.
 * Also the specification doesn't require the id to be there. */
export const getAgentReviews = createSelector(
  agentReviews, reviews =>
    reviews
      .filter(isReviewFinished)
      .sort(sortBy('created'))
)

export const getOrganizations = createSelector(
  [getAgents], agents => Object
    .values(agents)
    .filter(agent => !agent.org_agent_id)
    .reduce((prev, agent) => {
      prev[agent.id] = agent
      return prev
    }, {})
)

export const getRatingsSummary = createSelector(
  [getActiveSimpleAgents], agents => agents
    .filter(agent => agent.rating_count !== 0)
    .reduce((total, elem) => ({
      sum: total.sum + elem.rating,
      sumCount: total.sumCount + 1,
      ratingCount: total.ratingCount + elem.rating_count,
    }), { sum: 0, sumCount: 0, ratingCount: 0 })
)

export const getAgentsRatingsAverage = createSelector(
  [getRatingsSummary], ({ sum, sumCount }) => {
    const averageRating = sumCount > 0 ? sum / sumCount : 0
    return formatRating(averageRating)
  }
)

export const getAgentsRatingsCount = createSelector(
  [getRatingsSummary], ({ ratingCount }) => ratingCount
)

export const getAgentKycAvailability = createSelector([getAgent], agent => agent && agent.kyc_availability)

export const isAgentKyc = state => {
  const { kyc_availability } = getAgent(state)
  return isStore(state) && kyc_availability && kyc_availability !== constants.agents.kyc.unavailable
}
