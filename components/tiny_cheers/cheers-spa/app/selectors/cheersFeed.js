export const getLeaderboard = state => state.cheersFeed.leaders;
export const getIsFetchingLeaderboard = state =>
  state.cheersFeed.isFetchingLeaderboard;
export const getCheersFeed = state => state.cheersFeed.cheers;
export const getCheersFeedCachedUrl = state => state.cheersFeed.cachedUrl;
export const getCheersFeedPage = state => state.cheersFeed.page;
export const getCheersFeedTotalPages = state => state.cheersFeed.totalPages;
export const getCheersFeedSearch = state => state.cheersFeed.search;
export const getCheersFeedDateFilter = state => state.cheersFeed.dateFilter;
export const getSegmentsFilter = state =>
  state.leaderboard.segmentsFilter
    .map(id => parseInt(id, 10))
    .filter(id => id > 0);
export const getReceiverFilter = state => state.cheersFeed.receiverFilter;
export const getIsFetchingCheersFeed = state => state.cheersFeed.isFetching;
export const getFetchCheersFeedError = state => state.cheersFeed.errorMessage;
export const getCheersFeedUrl = state => {
  const { user } = state.auth;
  if (user && user.cheersFeedUrl) {
    return user.cheersFeedUrl;
  }

  return null;
};
