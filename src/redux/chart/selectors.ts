import { RootReducerInterface } from 'redux/rootReducer'

export const getStats = (state: RootReducerInterface) => state.chart.stats
export const getEndpointStats = (state: RootReducerInterface, endpoint: string) => state.chart.stats[endpoint]

