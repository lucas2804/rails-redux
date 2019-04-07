import * as api from 'app-api';
import * as types from './types';

export const fetchNotifications = () => (dispatch) => {
  api.fetchNotifications().then(response => dispatch({
    type: types.FETCH_NOTIFICATION_SUCCESS,
    notifications: response.data,
  }));
};
