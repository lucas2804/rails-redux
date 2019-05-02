export const getTopReceivers = state => state.cheersLeaders.receivers;
export const getTopSenders = state => state.cheersLeaders.senders;
export const getIsFetchingCheersLeaders = state => state.cheersLeaders.isFetching;
export const getFetchCheersLeadersError = state =>
  state.cheersLeaders.errorMessage;
