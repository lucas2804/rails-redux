import { FILTER_KEYWORD } from './types';

export const filterByKeyword = payload => ({
  type: FILTER_KEYWORD,
  payload,
});
