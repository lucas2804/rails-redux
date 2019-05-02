import $ from 'jquery';

export const initialize = () => {
  $(document).ajaxError((event, response) => {
    const { status } = response;

    if (status === 401) {
      window.location = '/sign_in';
    }
  });
};
