import $ from 'jquery';
import { getCsrfToken } from './csrf';

const setTokenInRequestHeader = (jqXHR, document, csrfToken) => {
  const token = csrfToken || getCsrfToken();

  jqXHR.setRequestHeader('X-CSRF-Token', token);
};

export const initialize = () => {
  $(document).ajaxSend((event, jqXHR, ajaxOptions) => {
    if (['PUT', 'POST', 'DELETE'].indexOf(ajaxOptions.type) >= 0) {
      setTokenInRequestHeader(jqXHR, document);
    }
  });

  $(document).ajaxError((event, response) => {
    const { status } = response;

    if (status === 401) {
      window.location = '/sign_in';
    }
  });
};
