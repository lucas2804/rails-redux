import $ from 'jquery';
import queryString from 'query-string';

export const API_ROOT_URL = '/recognition/api/1.0';

// Me

export const fetchCurrentUser = () =>
  $.ajax({
    url: `${API_ROOT_URL}/me.json`,
    type: 'GET',
    contentType: 'application/json',
    headers: {
      Accept: 'application/json',
    },
  });

// Notifications

export const fetchNotifications = () =>
  $.ajax({
    url: `${API_ROOT_URL}/notifications?per_page=10`,
    type: 'GET',
    contentType: 'application/json',
  });

// Cheers Leaders

export const fetchCheersLeaders = () =>
  $.ajax({
    url: `${API_ROOT_URL}/dashboard/cheer_leaders.json`,
    type: 'GET',
    contentType: 'application/json',
  });

// Value Tags

export const fetchValueTags = () =>
  $.ajax({
    url: `${API_ROOT_URL}/dashboard/value_tag_stats.json`,
    type: 'GET',
    contentType: 'application/json',
  });
// Timeline

export const fetchTimeline = () =>
  $.ajax({
    url: `${API_ROOT_URL}/dashboard/timeline.json`,
    type: 'GET',
    contentType: 'application/json',
  });

// Related Pulses

export const fetchRelatedPulses = () =>
  $.ajax({
    url: `${API_ROOT_URL}/dashboard/related_pulses.json`,
    type: 'GET',
    contentType: 'application/json',
  });

// Recent Cheers

export const fetchRecentCheers = () =>
  $.ajax({
    url: `${API_ROOT_URL}/dashboard/recent_cheers.json`,
    type: 'GET',
    contentType: 'application/json',
  });

// Overview

export const fetchMetrics = () =>
  $.ajax({
    url: `${API_ROOT_URL}/dashboard/overview.json`,
    type: 'GET',
    contentType: 'application/json',
  });

// Breakdown

export const fetchBreakdown = () =>
  $.ajax({
    url: `${API_ROOT_URL}/dashboard/breakdown.json`,
    type: 'GET',
    contentType: 'application/json',
  });

export const fetchSegmentsBreakdown = () =>
  $.ajax({
    url: `${API_ROOT_URL}/dashboard/breakdown/segments.json`,
    type: 'GET',
    contentType: 'application/json',
  });

// Segments

export const fetchSegments = () =>
  $.ajax({
    url: `${API_ROOT_URL}/segments.json`,
    type: 'GET',
    contentType: 'application/json',
  });

// Cheers Leaderboard

export const fetchLeaderboard = ({
  search,
  from,
  to,
  segmentsFilter,
  sortBy,
  sortType,
  page,
  perPage = 10,
}) => {
  const params = queryString.stringify({
    search,
    from,
    to,
    segment_ids: segmentsFilter && segmentsFilter.join(','),
    sort_by: sortBy,
    sort_order: sortType,
    page,
    per_page: perPage,
  });

  return $.ajax({
    url: `${API_ROOT_URL}/cheer_leaders.json`,
    type: 'GET',
    data: params,
    contentType: 'application/json',
  });
};

// Cheers Feed

export const fetchCheersFeed = ({
  search,
  from,
  to,
  segmentsFilter,
  receiverFilter,
  page,
  perPage = 10,
}) => {
  const params = queryString.stringify({
    search,
    from,
    to,
    segment_ids: segmentsFilter && segmentsFilter.join(','),
    receiver_id: receiverFilter,
    page,
    include_comments: 1,
    per_page: perPage,
  });

  return $.ajax({
    url: `${API_ROOT_URL}/cheer_feeds.json`,
    type: 'GET',
    data: params,
    contentType: 'application/json',
  });
};

export const addTag = (cheerId, tagName) => {
  const params = JSON.stringify({
    cheer_id: cheerId,
    tag_name: tagName,
  });
  return $.ajax({
    url: `${API_ROOT_URL}/taggings`,
    type: 'POST',
    data: params,
    contentType: 'application/json',
  });
};

export const removeTag = taggingId =>
  $.ajax({
    url: `${API_ROOT_URL}/taggings/${taggingId}`,
    type: 'DELETE',
    contentType: 'application/json',
  });

export const suggestTag = (cheerId, term) => {
  const params = queryString.stringify({
    term,
    type: 'Cheer',
    id: cheerId,
  });
  return $.ajax({
    url: `${API_ROOT_URL}/taggings/autocomplete`,
    type: 'GET',
    data: params,
    contentType: 'application/json',
  });
};

// Export Cheers

export const exportCheers = ({ fromDate, toDate } = {}) =>
  $.ajax({
    url: `${API_ROOT_URL}/cheers/export.json`,
    type: 'POST',
    contentType: 'application/json',
    headers: {
      Accept: 'application/json',
    },
    data: JSON.stringify({
      from_date: fromDate,
      to_date: toDate,
    }),
  });

export const toggleHideFromFeed = (cheerId, hide) =>
  $.ajax({
    url: `${API_ROOT_URL}/cheers/${cheerId}`,
    type: 'PUT',
    contentType: 'application/json',
    headers: {
      Accept: 'application/json',
    },
    data: JSON.stringify({
      hide_from_feed: hide,
      praise_published: !hide,
    }),
  });
