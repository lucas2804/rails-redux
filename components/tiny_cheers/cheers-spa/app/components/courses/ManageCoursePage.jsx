import React from 'react'
import { connect } from 'react-redux'
import { loadCourses } from './../../actions/courseAction'
import { loadAuthors } from './../../actions/authorAction'
import { changeFormInputs } from './../../actions/manageCourseAction'
import PropTypes from 'prop-types'
import CourseForm from './CourseForm'

class ManageCoursePage extends React.Component {
  componentDidMount () {
    let { courses, authors, loadAuthors, loadCourses } = this.props
    
    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert('Loading authors failed' + error)
      })
    }
    
    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert('Loading courses failed' + error)
      })
    }
  }
  
  
  render () {
    const { course, authors } = this.props
    let errors = { title: 'Error', onSave: 'onSave', category: 'category'}
    let saving = false
    return (
      <div>
        <CourseForm />
      </div>
    )
  }
}

ManageCoursePage.propTypes = {
  // state
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  course: PropTypes.object,
  
  // actions
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  changeFormInputs: PropTypes.func.isRequired,
}

// This func determines what state is passed to our component via props
function mapStateToProps (state) {
  return {
    courses: state.courses,
    authors: state.authors,
    course: state.course,
  }
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  changeFormInputs,
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
