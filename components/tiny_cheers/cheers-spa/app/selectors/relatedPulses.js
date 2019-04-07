const ADMIN_ROLES = ['admin', 'super_admin', 'company_admin'];
const SEGMENTS_ADMIN_OR_VIEWER_ROLES = ['viewer', 'manager'];

export const getRelatedPulses = state => state.relatedPulses.pulses;
export const getIsFetchingRelatedPulses = state =>
  state.relatedPulses.isFetching;
export const getFetchRelatedPulsesError = state =>
  state.relatedPulses.errorMessage;
export const getLinks = ({
  auth: {
    user: { activePermissions },
  },
}) => {
  const [adminRole] = activePermissions.filter(({ roleName }) =>
    ADMIN_ROLES.includes(roleName),
  );
  if (adminRole) {
    return {
      topLink: '/engage#manage-pulses/next-pulse',
      bottomLink: '/engage#insights/categories?questionId=6',
    };
  }

  const [viewerOrManager] = activePermissions.filter(({ roleName }) =>
    SEGMENTS_ADMIN_OR_VIEWER_ROLES.includes(roleName),
  );
  if (viewerOrManager) {
    return {
      topLink: null,
      bottomLink: '/engage#insights/categories?questionId=6',
    };
  }
  return {
    topLink: null,
    bottomLink: null,
  };
};
