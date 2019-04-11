import React from 'react'
import { connect } from 'react-redux'
import * as courseActions from './../actions/courseAction'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

class CoursesPage extends React.Component {
  componentDidMount () {
    const { courses, courseActions } = this.props;
  
    if (courses.length === 0) {
      courseActions.loadCourses().catch(error => {
        alert("Loading courses failed" + error);
      });
    }
  }
  
  render () {
    return (
      <div>
        {
          this.props.courses.map(course => (
            <div key={course.title}>{course.title}</div>
          ))
        }
      </div>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  courseActions: PropTypes.object.isRequired
};

// This func determines what state is passed to our component via props
function mapStateToProps (state) {
  return {
    courses: state.courses
  }
}

function mapDispatchToProps (dispatch) {
  return {
    courseActions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)
