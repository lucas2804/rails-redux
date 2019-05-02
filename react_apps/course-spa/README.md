React boiler plate include 5 sections

```jsx harmony
// Section 1: Imports
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loadCourses } from "../../redux/actions/courseAction";
import { loadAuthors } from "../../redux/actions/authorAction";
import CourseForm from "./CourseForm";

// Section 2: Component
class ManageCoursePage extends React.Component {
  componentDidMount() {
    let { courses, authors, loadAuthors, loadCourses } = this.props;

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }

    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert("Loading courses failed" + error);
      });
    }
  }

  render() {
    console.log("render ManageCoursepage");
    return (
      <div>
        <CourseForm />
      </div>
    );
  }
}

// Section 3: Proptypes
// Section 4: MapStateToProps, MapActionsToProps
// Section 5: Redux Connect
// This func determines what state is passed to our component via props
ManageCoursePage.propTypes = {
  // state
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,

  // actions
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);


```
###
