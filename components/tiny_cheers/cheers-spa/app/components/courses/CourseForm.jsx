import React from 'react'
import PropTypes from 'prop-types'
import TextInput from '../common/TextInput'
import SelectInput from '../common/SelectInput'
import { loadAuthors } from '../../redux/actions/authorAction'
import { createCourse } from '../../redux/actions/courseAction'
import { connect } from 'react-redux'
import { changeFormInputs } from '../../redux/actions/manageCourseAction'

class CourseForm extends React.Component {
  constructor (props) {
    super(props)
    const { course } = props
    this.state = { course: course } // <=> because this.state = 'undefined'
  }
  
  handleSaveCourse = (event) => {
    event.preventDefault()
    this.props.createCourse(this.state.course)
  }
  
  handleChangeInputs = (event) => {
    const { name, value } = event.target
    const { course } = this.state
    this.setState({ course: { ...course, [name]: value } })
  }
  
  render () {
    const { authors } = this.props
    const { course } = this.state
    let saving = false
    let errors = { title: 'Error', onSave: 'onSave', category: 'category' }
    console.log('render Course Form')
    return (
      (authors.length > 0) &&
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
  course: PropTypes.object.isRequired,
  
  // actions
  changeFormInputs: PropTypes.func.isRequired,
  createCourse: PropTypes.func.isRequired,
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
  createCourse,
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseForm)


