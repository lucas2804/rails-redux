export const getUserName = user => (
  `${user.firstName || ''} ${user.lastName || ''}`.trim()
);

export const getUserNameOrEmail = user => (
  getUserName(user) || user.email
);
