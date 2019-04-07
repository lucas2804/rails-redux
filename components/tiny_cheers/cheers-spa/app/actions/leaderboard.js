import { camelizeKeys } from 'humps';
import { fromError } from 'app-utils/errorMessage';
import * as api from 'app-api';
import * as types from './types';

export { loadPage as loadMore } from './pagination';
export { filterBySegmentsInUrl } from './segmentsFilter';
export { filterByDateInUrl } from './dateFilter';
export * from './sort';
export * from './search';

export const resetLeaderboard = () => ({
  type: types.RESET_CHEERS_FEED,
});

export const createFetchLeaderboard = ({
  TYPE,
  TYPE_SUCCESS,
  TYPE_ERROR,
}) => params => dispatch => {
  dispatch({
    type: TYPE,
    params,
  });

  return api.fetchLeaderboard(params).then(
    response => {
      dispatch({
        type: TYPE_SUCCESS,
        leaders: camelizeKeys(response.items),
        totalPages: response.total_pages,
        params,
      });
    },
    error => {
      dispatch({
        type: TYPE_ERROR,
        message: fromError(error),
      });
    },
  );
};

export const fetchLeaderboard = createFetchLeaderboard({
  TYPE: types.FETCH_LEADERBOARD,
  TYPE_SUCCESS: types.FETCH_LEADERBOARD_SUCCESS,
  TYPE_ERROR: types.FETCH_LEADERBOARD_FAIL,
});

export const goToCheersFeed = (
  router,
  { receiverId, dateFilter, segmentsFilter },
) => {
  const { location } = router;
  router.push({
    ...location,
    pathname: '/recognition/cheers-feed',
    query: {
      ...location.query,
      receiver: receiverId,
      ...dateFilter,
      segment: segmentsFilter.join(','),
    },
  });
};
