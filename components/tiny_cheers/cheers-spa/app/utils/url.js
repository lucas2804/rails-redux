export const getRootUrl = url => {
  let hostname;
  let protocol;

  if (url.indexOf('://') !== -1) {
    [protocol, hostname] = url.split('://');
  }

  [hostname] = hostname.split('/');
  [hostname] = hostname.split('?');

  return `${protocol}://${hostname}`;
};
