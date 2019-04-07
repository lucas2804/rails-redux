import * as types from 'app-actions/types';

export const filterBySegments = ids => ({
  type: types.FILTER_SEGMENTS,
  payload: ids,
});

export const filterBySegmentsInUrl = (router, payload) => dispatch => {
  dispatch(filterBySegments(payload));
  const { location } = router;
  router.push({
    ...location,
    query: {
      ...location.query,
      segment: payload.join(','),
    },
  });
};
