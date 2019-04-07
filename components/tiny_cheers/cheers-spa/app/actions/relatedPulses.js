import { camelizeKeys } from 'humps';
import { fromError } from 'app-utils/errorMessage';
import * as api from 'app-api';
import * as types from './types';

export const fetchRelatedPulses = params => dispatch => {
  dispatch({
    type: types.FETCH_RELATED_PULSES,
  });

  return api.fetchRelatedPulses(params).then(
    response => {
      dispatch({
        type: types.FETCH_RELATED_PULSES_SUCCESS,
        pulses: camelizeKeys(response.items),
      });
    },
    error => {
      dispatch({
        type: types.FETCH_RELATED_PULSES_FAIL,
        message: fromError(error),
      });
    },
  );
};
