export const parseSearchFromQuery = ({ search }) => search;
export const parseReceiverFromQuery = ({ receiver }) => receiver;

export const parseDateFromQuery = (
  { preset, from: queryFrom, to: queryTo },
  { getDateRange, defaultFilter },
) => {
  if (preset) {
    try {
      const range = getDateRange(preset);
      return { ...range, preset };
    } catch (error) {
      return defaultFilter;
    }
  }

  if (queryFrom && queryTo) {
    return { from: queryFrom, to: queryTo };
  }
  return defaultFilter;
};

export const parseSegmentsFromQuery = ({ segment }) => {
  if (segment) {
    const segmentIds = segment.split(',').map(id => parseInt(id, 10));
    return Array.from(new Set(segmentIds));
  }
  return [];
};
