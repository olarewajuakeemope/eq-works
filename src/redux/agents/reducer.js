import * as t from './actionTypes'

const ACTION_HANDLERS = {
  [t.IMPORT_AGENTS]: (state, action) => {
    const statuses = {
      active: { ...state.statuses.active },
      inactive: { ...state.statuses.inactive },
    }
    const agents = action.agents.reduce((prev, agent) => {
      if (agent.active) {
        delete statuses.inactive[agent.id]
        statuses.active[agent.id] = true
      } else {
        delete statuses.active[agent.id]
        statuses.inactive[agent.id] = true
      }
      prev[agent.id] = agent
      return prev
    }, { ...state.agents })

    return {
      ...state,
      agents,
      statuses,
    }
  },
  [t.GET_REQUEST]: state => ({
    ...state,
    isLoading: true,
    hasError: false,
  }),
  [t.GET_SUCCESS]: state => ({
    ...state,
    isLoading: false,
  }),
  [t.GET_ERROR]: state => ({
    ...state,
    isLoading: false,
    hasError: true,
  }),
  [t.SAVE_REQUEST]: state => ({
    ...state,
    isLoading: true,
    hasError: false,
  }),
  [t.SAVE_SUCCESS]: state => ({
    ...state,
    isLoading: false,
  }),
  [t.SAVE_ERROR]: state => ({
    ...state,
    isLoading: false,
    hasError: true,
  }),
  [t.FETCH_REVIEWS_SUCCESS]: (state, { id, reviews }) => ({
    ...state,
    reviews: {
      ...state.reviews,
      [id]: reviews,
    },
  }),
  [t.ORG_AGENTS_SUCCESS]: state => ({
    ...state,
    hasAllAgents: true,
  }),
  [t.SAVE_KYC_AVAILABILITY_SUCCESS]: (state, { agent }) => ({
    ...state,
    agents: {
      ...state.agents,
      [agent.id]: agent,
    },
  }),
}

const initialState = {
  hasAllAgents: false,
  isLoading: false,
  error: null,
  agents: {},
  statuses: {
    active: {},
    inactive: {},
  },
  reviews: {}, // stored by agent id
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
