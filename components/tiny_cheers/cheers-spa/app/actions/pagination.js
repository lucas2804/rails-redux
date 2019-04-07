import { LOAD_MORE } from './types';

export const loadPage = ({ page, totalPages }) => dispatch => {
  if (page <= totalPages) {
    dispatch({
      type: LOAD_MORE,
      payload: {
        page,
        totalPages,
      },
    });
  }
};
