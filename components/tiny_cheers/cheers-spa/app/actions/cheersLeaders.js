import { camelizeKeys } from 'humps';
import { fromError } from 'app-utils/errorMessage';
import * as api from 'app-api';
import * as types from './types';

export const fetchCheersLeaders = params => dispatch => {
  dispatch({
    type: types.FETCH_CHEERS_LEADERS,
  });

  return api.fetchCheersLeaders(params).then(
    response => {
      dispatch({
        type: types.FETCH_CHEERS_LEADERS_SUCCESS,
        leaders: camelizeKeys(response),
      });
    },
    error => {
      dispatch({
        type: types.FETCH_CHEERS_LEADERS_FAIL,
        message: fromError(error),
      });
    },
  );
};
