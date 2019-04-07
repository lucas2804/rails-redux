export const getCsrfToken = () => {
  const tokenTag = document.querySelector('meta[name="csrf-token"]');

  return (tokenTag && tokenTag.content) || '';
};
