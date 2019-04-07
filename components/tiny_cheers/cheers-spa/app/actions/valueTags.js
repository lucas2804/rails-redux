import { camelizeKeys } from 'humps';
import { fromError } from 'app-utils/errorMessage';
import * as api from 'app-api';
import * as types from './types';

export const fetchValueTags = params => dispatch => {
  dispatch({
    type: types.FETCH_VALUE_TAGS,
  });

  return api.fetchValueTags(params).then(
    response => {
      dispatch({
        type: types.FETCH_VALUE_TAGS_SUCCESS,
        valueTags: camelizeKeys(response.value_tags),
        enableEmoji: response.enable_emoji,
      });
    },
    error => {
      dispatch({
        type: types.FETCH_VALUE_TAGS_FAIL,
        message: fromError(error),
      });
    },
  );
};
