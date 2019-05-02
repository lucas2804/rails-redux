import { handleResponse, handleError } from "./apiUtils";
const baseUrl = '/api/authors.json';

export function getAuthors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
