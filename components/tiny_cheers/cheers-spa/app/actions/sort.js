import { SORT_BY } from './types';

export const sortByField = ({ sortBy, sortType }) => ({
  type: SORT_BY,
  payload: {
    sortBy,
    sortType,
  },
});
