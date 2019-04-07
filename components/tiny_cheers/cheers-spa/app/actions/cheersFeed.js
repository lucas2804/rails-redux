import { camelizeKeys } from 'humps';
import { toastr } from 'react-redux-toastr';
import { fromError } from 'app-utils/errorMessage';
import * as api from 'app-api';
import * as types from './types';
import { createFetchLeaderboard } from './leaderboard';

export { loadPage as loadMore } from './pagination';
export { filterBySegmentsInUrl } from './segmentsFilter';
export { filterByReceiversInUrl } from './receiversFilter';
export { filterByDateInUrl } from './dateFilter';
export * from './search';

const fetchLeaderboard = createFetchLeaderboard({
  TYPE: types.CHEERS_FEED_FETCH_LEADERBOARD,
  TYPE_SUCCESS: types.CHEERS_FEED_FETCH_LEADERBOARD_SUCCESS,
  TYPE_ERROR: types.CHEERS_FEED_FETCH_LEADERBOARD_FAIL,
});

export const resetCheersFeed = () => ({
  type: types.RESET_CHEERS_FEED,
});

export const fetchCheersFeed = params => dispatch => {
  dispatch({
    type: types.FETCH_CHEERS_FEED,
    params,
  });

  return api.fetchCheersFeed(params).then(
    response => {
      dispatch({
        type: types.FETCH_CHEERS_FEED_SUCCESS,
        cheers: camelizeKeys(response.items),
        totalPages: response.total_pages,
        params,
      });
    },
    error => {
      dispatch({
        type: types.FETCH_CHEERS_FEED_FAIL,
        message: fromError(error),
      });
    },
  );
};

export const fetchLeaderboardAndCheersFeed = ({
  page,
  search,
  from,
  to,
  segmentsFilter,
  receiverFilter,
}) => dispatch => {
  dispatch(
    fetchLeaderboard({
      search: '',
      sortBy: 'total_received',
      sortType: 'desc',
      page: 1,
      perPage: 10,
      from,
      to,
      segmentsFilter,
    }),
  );

  dispatch(
    fetchCheersFeed({
      page,
      search,
      from,
      to,
      receiverFilter,
      segmentsFilter,
    }),
  );
};

export const addTag = (cheerId, tagName) => ({
  type: types.ADD_TAG,
  promise: api.addTag(cheerId, tagName),
  meta: {
    cheerId,
    onFailure: error => toastr.error('Failed', fromError(error)),
  },
});

export const removeTag = taggingId => ({
  type: types.REMOVE_TAG,
  promise: api.removeTag(taggingId),
  meta: {
    taggingId,
    onFailure: error => toastr.error('Failed', fromError(error)),
  },
});

export const toggleHideFromFeed = (cheerId, hide, startToggling, finishToggling) => ({
  type: types.TOGGLE_HIDE_FROM_FEED,
  promise: api.toggleHideFromFeed(cheerId, hide),
  meta: {
    cheerId,
    onStart: startToggling,
    onSuccess: finishToggling,
    onFailure: error => toastr.error('Failed', fromError(error)),
  },
});

