import moment from 'moment';

export const getFormattedDate = date => {
  if (!date) {
    return '';
  }

  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);

  return `${year}-${month}-${day}`;
};

export const LAST_7_DAYS = 'LAST_7_DAYS';
export const LAST_14_DAYS = 'LAST_14_DAYS';
export const LAST_30_DAYS = 'LAST_30_DAYS';
export const LAST_60_DAYS = 'LAST_60_DAYS';
export const LAST_YEAR = 'LAST_YEAR';

export const getDateRange = dateFilter => {
  const to = moment();
  const from = moment();

  switch (dateFilter) {
    case LAST_7_DAYS:
      from.subtract(7, 'days');
      break;
    case LAST_14_DAYS:
      from.subtract(14, 'days');
      break;
    case LAST_30_DAYS:
      from.subtract(30, 'days');
      break;
    case LAST_60_DAYS:
      from.subtract(60, 'days');
      break;
    case LAST_YEAR:
      from.subtract(365, 'days');
      break;
    default:
      throw new Error(`${dateFilter} is not supported`);
  }

  return {
    from: from.format('YYYY-MM-DD'),
    to: to.format('YYYY-MM-DD'),
  };
};
