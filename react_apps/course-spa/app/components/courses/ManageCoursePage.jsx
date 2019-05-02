import React from 'react'
import { connect } from 'react-redux'
import { loadCourses } from '../../redux/actions/courseAction'
import { loadAuthors } from '../../redux/actions/authorAction'
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
    console.log('render ManageCoursepage')
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
  
  // actions
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
}

// This func determines what state is passed to our component via props
function mapStateToProps (state) {
  return {
    courses: state.courses,
    authors: state.authors,
  }
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
