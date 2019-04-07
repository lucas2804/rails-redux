import React from 'react';
import { fromError } from 'app-utils/errorMessage';
import find from 'lodash/find';
import { toastr } from 'react-redux-toastr';
import * as api from 'app-api';
import * as types from './types';

export const getRootUrl = url => {
  let hostname;
  let protocol;

  if (url.indexOf('://') !== -1) {
    [protocol, hostname] = url.split('://');
  }

  [hostname] = hostname.split('/');
  [hostname] = hostname.split('?');

  return `${protocol}://${hostname}`;
};

export const exportCheers = params => (dispatch, getState) => {
  dispatch({
    type: types.EXPORT_CHEERS,
    params,
  });

  const {
    dateFilter: { from: fromDate, to: toDate },
  } = params;
  const state = getState();
  const settingsApp = find(
    state.auth.user.accessibleApps,
    app => app.key === 'tp_tps',
  );

  /* eslint react/jsx-filename-extension: 0 */
  return api.exportCheers({ ...params, fromDate, toDate }).then(
    () => {
      const link = `${getRootUrl(settingsApp.url)}/unified-report/exports`;
      dispatch({
        type: types.EXPORT_CHEERS_SUCCESS,
        link,
        params,
      });
      toastr.success('', '', {
        component: () => (
          <div>
            Your export request is now being processed. You can view all your
            exports under <a href={link}>Exports.</a>
          </div>
        ),
      });
    },
    error => {
      const message = fromError(error);

      dispatch({
        type: types.EXPORT_CHEERS_FAIL,
        message,
      });
      toastr.error('Export fail!', message);
    },
  );
};
