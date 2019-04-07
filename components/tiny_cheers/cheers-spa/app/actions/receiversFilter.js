import * as types from 'app-actions/types';

export const filterByReceivers = ids => ({
  type: types.FILTER_RECEIVERS,
  payload: ids,
});

export const filterByReceiversInUrl = (router, payload) => dispatch => {
  dispatch(filterByReceivers(payload));
  const { location } = router;
  router.push({
    ...location,
    query: {
      ...location.query,
      receiver: payload.join(','),
    },
  });
};
