import { camelizeKeys } from 'humps';
import { fromError } from 'app-utils/errorMessage';
import * as api from 'app-api';
import * as types from './types';

export const fetchRecentCheers = params => dispatch => {
  dispatch({
    type: types.FETCH_RECENT_CHEERS,
  });

  return api.fetchRecentCheers(params).then(
    response => {
      dispatch({
        type: types.FETCH_RECENT_CHEERS_SUCCESS,
        cheers: camelizeKeys(response.items),
      });
    },
    error => {
      dispatch({
        type: types.FETCH_RECENT_CHEERS_FAIL,
        message: fromError(error),
      });
    },
  );
};
