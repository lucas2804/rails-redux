export const getRecentCheers = state =>
  state.recentCheers.all;
export const getIsFetchingRecentCheers = state =>
  state.recentCheers.isFetching;
export const getFetchRecentCheersError = state =>
  state.recentCheers.errorMessage;
