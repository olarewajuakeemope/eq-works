
import { RootReducerInterface } from 'redux/rootReducer'

export const isLoading = (state: RootReducerInterface) => state.table.isLoading
export const getStats = (state: RootReducerInterface) => state.table.stats
export const getStatsTitle = (state: RootReducerInterface) => state.table.title
