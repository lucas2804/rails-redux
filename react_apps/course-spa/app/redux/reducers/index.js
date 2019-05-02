import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import authorReducer from "./authorReducer";
import manageCourseReducer from "./manageCourseReducer";

const rootReducer = combineReducers({
  courses: courseReducer,
  authors: authorReducer,
  course: manageCourseReducer
});

export default rootReducer;
