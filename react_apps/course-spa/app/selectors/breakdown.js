export const getBreakdown = state => state.breakdown.data;
export const getIsFetchingBreakdownOverview = state =>
  state.breakdown.isFetchingOverview;
export const getFetchBreakdownOverviewError = state =>
  state.breakdown.fetchingOverviewErrorMessage;

export const getIsFetchingBreakdownSegments = state =>
  state.breakdown.isFetchingSegments;
export const getFetchBreakdownSegmentsError = state =>
  state.breakdown.fetchingSegmentsErrorMessage;
export const getTotalPage = state => state.breakdown.totalPage;
export const getCurrentPage = state => state.breakdown.currentPage;
export const getSegments = state => state.breakdown.segments;
