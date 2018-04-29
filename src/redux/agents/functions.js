import { round } from 'utils/numbers'

export const isOrg = agent => agent && agent.type === 'org'

export const assigneesCompareFunction = (orgId, agentId) => (a, b) => {
  // null guards
  if (!b) {
    return -1
  }
  if (!a) {
    return 1
  }

  // push org (unassigned) to first place
  if (a.id == orgId) {
    return -1
  }
  if (b.id == orgId) {
    return 1
  }

  // push current Agent to second place
  if (a.id == agentId) {
    return -1
  }
  if (b.id == agentId) {
    return 1
  }

  // then we sort the rest
  if (a.name === b.name) {
    return 0
  }

  // push empty names to bottom
  if (a.name === '') {
    return 1
  }

  if (b.name === '') {
    return -1
  }

  return a.name > b.name ? 1 : -1
}

export const sortAssignees = (agents, orgId, currentAgentId) =>
  Object.values(agents)
    .sort(assigneesCompareFunction(orgId, currentAgentId))

export const filterAgentsByOrgId = (agents, id) => agents.filter(agent => agent.org_agent_id === id)

export const isReviewFinished = ({ id, comment, rating }) => id && id.length > 0 && (comment || rating > 0)

export const formatRating = rating => round(rating, 3, true)

export const renameOrg = org => ({
  ...org,
  name: 'Unassigned',
})

export const roundAgentRating = agent => ({
  ...agent,
  rating: formatRating(agent.rating),
})
