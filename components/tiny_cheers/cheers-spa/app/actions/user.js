import { camelizeKeys } from 'humps';
import { fromError } from 'app-utils/errorMessage';
import * as api from 'app-api';
import * as types from './types';

export const fetchCurrentUser = () => dispatch => {
  dispatch({
    type: types.FETCH_CURRENT_USER,
  });

  return api.fetchCurrentUser().then(
    response => {
      const user = camelizeKeys(response);
      dispatch({
        type: types.FETCH_CURRENT_USER_SUCCESS,
        user,
      });
    },
    error => {
      dispatch({
        type: types.FETCH_CURRENT_USER_FAIL,
        message: fromError(error),
      });
    },
  );
};
