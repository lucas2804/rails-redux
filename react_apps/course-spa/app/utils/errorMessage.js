export const fromError = error =>
  (error.responseJSON && error.responseJSON.message) ||
  'Oops! Something went wrong.';
