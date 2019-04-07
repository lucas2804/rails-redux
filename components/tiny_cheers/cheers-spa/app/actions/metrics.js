import { camelizeKeys } from 'humps';
import { fromError } from 'app-utils/errorMessage';
import * as api from 'app-api';
import * as types from './types';

export const fetchMetrics = params => dispatch => {
  dispatch({
    type: types.FETCH_METRICS,
  });

  return api.fetchMetrics(params).then(
    response => {
      dispatch({
        type: types.FETCH_METRICS_SUCCESS,
        metrics: camelizeKeys(response),
      });
    },
    error => {
      dispatch({
        type: types.FETCH_METRICS_FAIL,
        message: fromError(error),
      });
    },
  );
};
