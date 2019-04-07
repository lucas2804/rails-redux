import { FILTER_DATE } from './types';

export const filterByDate = payload => ({
  type: FILTER_DATE,
  payload,
});

export const getQueryFromPayload = ({ preset, from, to }) => {
  if (preset) {
    return {
      preset,
    };
  }
  return {
    from,
    to,
  };
};

export const filterByDateInUrl = (router, payload) => dispatch => {
  dispatch(filterByDate(payload));
  const { location } = router;
  const query = {
    ...location.query,
    ...getQueryFromPayload(payload),
  };
  if (!payload.preset) {
    delete query.preset;
  }

  router.push({
    ...location,
    query,
  });
};
