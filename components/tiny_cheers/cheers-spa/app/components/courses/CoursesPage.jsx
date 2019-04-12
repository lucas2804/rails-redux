import React from 'react'
import { connect } from 'react-redux'
import {loadCourses} from './../../actions/courseAction'
import {loadAuthors} from './../../actions/authorAction'
import CourseList from './CoursesList'
import PropTypes from 'prop-types'

class CoursesPage extends React.Component {
  componentDidMount () {
    const { courses, authors, loadAuthors, loadCourses } = this.props
    
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
    const coursesWithAuthorNames = addAuthorNamesToCourses(this.props)
    return (
      <div>
        <CourseList courses={coursesWithAuthorNames}/>
      </div>
    )
  }
}

function addAuthorNamesToCourses(state) {
  return state.courses.map(course => {
    let authorName = ''
    if (state.authors) {
      let matchedAuthor = state.authors.find(author => author.id === course.author_id)
      if(matchedAuthor !== 'undefined'){
        authorName = matchedAuthor.name
      }
    }
    
    return { ...course, authorName: authorName }
  })
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)
