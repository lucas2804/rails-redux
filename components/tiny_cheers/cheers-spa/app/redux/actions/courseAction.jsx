import * as types from './actionTypes'
import * as courseApi from '../../api/courseApi'

export function createCourseSuccess (course) {
  return { type: types.CREATE_COURSE_SUCCESS, course: course }
}

export function loadCourseSuccess (courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses }
}

export function loadCourses () {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCourseSuccess(courses))
      })
      .catch(error => {
        throw error
      })
  }
}

export function createCourse (course) {
  return function (dispatch) {
    return courseApi
      .saveCourse(course)
      .then(course => {
        dispatch(createCourseSuccess(course))
      })
      .catch(error => {
        throw error
      })
  }
}
