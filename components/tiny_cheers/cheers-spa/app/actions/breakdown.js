import { camelizeKeys } from 'humps';
import { fromError } from 'app-utils/errorMessage';
import * as api from 'app-api';
import * as types from './types';

export const fetchBreakdown = () => dispatch => {
  dispatch({
    type: types.FETCH_BREAKDOWN,
  });

  return api.fetchBreakdown().then(
    response => {
      dispatch({
        type: types.FETCH_BREAKDOWN_SUCCESS,
        breakdown: camelizeKeys(response),
      });
    },
    error => {
      dispatch({
        type: types.FETCH_BREAKDOWN_FAIL,
        message: fromError(error),
      });
    },
  );
};

export const fetchSegmentsBreakdown = () => dispatch => {
  dispatch({
    type: types.FETCH_SEGMENTS_BREAKDOWN,
  });

  return api.fetchSegmentsBreakdown().then(
    response => {
      dispatch({
        type: types.FETCH_SEGMENTS_BREAKDOWN_SUCCESS,
        segments: camelizeKeys(response.items),
      });
    },
    error => {
      dispatch({
        type: types.FETCH_SEGMENTS_BREAKDOWN_FAIL,
        message: fromError(error),
      });
    },
  );
};

export const loadMoreSegments = () => ({
  type: types.LOAD_MORE_SEGMENTS,
});
