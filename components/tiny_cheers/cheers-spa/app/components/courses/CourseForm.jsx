import React from 'react'
import PropTypes from 'prop-types'
import TextInput from '../common/TextInput'
import SelectInput from '../common/SelectInput'
import { loadAuthors } from '../../actions/authorAction'
import { connect } from 'react-redux'
import { changeFormInputs } from '../../actions/manageCourseAction'

class CourseForm extends React.Component {
  handleSaveCourse = (event) => {
    event.preventDefault()
    alert('async save course')
  }
  
  handleChangeInputs = (event) => {
    const { name, value } = event.target
    let { course, changeFormInputs } = this.props
    
    course[name] = value
    changeFormInputs(course)
  }
  
  render () {
    const { course, authors } = this.props
    let saving = false
    let errors = { title: 'Error', onSave: 'onSave', category: 'category'}
    return (
      <form onSubmit={this.handleSaveCourse}>
        <h2>{course.id ? 'Edit' : 'Add'} Course</h2>
        {errors.onSave && (
          <div className="alert alert-danger" role="alert">
            {errors.onSave}
          </div>
        )}
        <TextInput name="title" label="Title"
          value={course.title} error={errors.title}
          onChange={this.handleChangeInputs}
        />
        
        <SelectInput name="authorId" label="Author"
          value={course.authorId || ''} error={errors.author} defaultOption="Select Author"
          options={authors.map(author => ({ value: author.id, text: author.name }))}
          onChange={this.handleChangeInputs}
        />
        
        <TextInput name="category" label="Category"
          value={course.category} error={errors.category}
          onChange={this.handleChangeInputs}
        />
        
        <button type="submit" disabled={saving} className="btn btn-primary">
          {saving ? 'Saving...' : 'Save'}
        </button>
      </form>
    )
  };
}

CourseForm.propTypes = {
  // state
  authors: PropTypes.array.isRequired,
  course: PropTypes.object,
  
  // actions
  changeFormInputs: PropTypes.func.isRequired,
}

// This func determines what state is passed to our component via props
function mapStateToProps (state) {
  return {
    authors: state.authors,
    course: state.course,
  }
}

const mapDispatchToProps = {
  loadAuthors,
  changeFormInputs,
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseForm)


