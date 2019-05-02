import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function manageCourseReducer(
  state = initialState.course,
  action
) {
  switch (action.type) {
    case actionTypes.CREATE_COURSE_SUCCESS:
    default:
      return state;
  }
}
