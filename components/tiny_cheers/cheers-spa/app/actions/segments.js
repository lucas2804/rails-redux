import { fromError } from 'app-utils/errorMessage';
import { normalize } from 'normalizr';
import * as api from 'app-api';
import * as schema from './schema';
import * as types from './types';

export const fetchSegments = () => dispatch => {
  dispatch({
    type: types.FETCH_SEGMENTS,
  });

  return api.fetchSegments().then(
    response => {
      dispatch({
        type: types.FETCH_SEGMENTS_SUCCESS,
        response: normalize(response.items, [schema.segment]),
      });
    },
    error => {
      dispatch({
        type: types.FETCH_SEGMENTS_FAIL,
        message: fromError(error),
      });
    },
  );
};

export const searchSegments = search => ({
  type: types.SEARCH_SEGMENTS,
  search,
});
