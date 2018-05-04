
import { RootReducerInterface } from 'redux/rootReducer'

export const isLoading = (state: RootReducerInterface) => state.map.isLoading
export const getStats = (state: RootReducerInterface) => state.map.stats
export const getStatsTitle = (state: RootReducerInterface) => state.map.title
