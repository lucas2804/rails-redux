import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function manageCourseReducer (state = initialState.course, action) {
  switch (action.type) {
    case actionTypes.CHANGE_FORM_INPUTS:
      return Object.assign({}, state, action.course)
    default:
      return state
  }
}
