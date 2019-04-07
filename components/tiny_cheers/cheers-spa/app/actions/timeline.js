import { camelizeKeys } from 'humps';
import { fromError } from 'app-utils/errorMessage';
import * as api from 'app-api';
import * as types from './types';

export const fetchTimeline = params => dispatch => {
  dispatch({
    type: types.FETCH_TIMELINE,
  });

  return api.fetchTimeline(params).then(
    response => {
      dispatch({
        type: types.FETCH_TIMELINE_SUCCESS,
        timeline: camelizeKeys(response),
      });
    },
    error => {
      dispatch({
        type: types.FETCH_TIMELINE_FAIL,
        message: fromError(error),
      });
    },
  );
};
