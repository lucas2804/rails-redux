import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';
import * as schema from '../actions/schema';

export const getSegments = createSelector(
  [
    state => state.segments.all,
    state => state.segments.byId,
    state => state.segments.search,
  ],
  (segmens, byId, search) =>
    denormalize(segmens, [schema.segment], { segments: byId }).filter(segment =>
      segment.name.toLowerCase().includes(search.toLowerCase()),
    ),
);

export const getSegmentsSearch = state => state.segments.search;
