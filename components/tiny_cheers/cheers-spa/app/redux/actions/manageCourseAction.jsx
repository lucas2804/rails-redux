import * as types from './actionTypes'

export function changeFormInputs (course) {
  return { type: types.CHANGE_FORM_INPUTS, course }
}
