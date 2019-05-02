import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./statics/HomePage";
import AboutPage from "./statics/AboutPage";
import CoursesPage from "./courses/CoursesPage";
import ManageCoursePage from "./courses/ManageCoursePage";
import Header from "./common/Header";
import NotFoundPage from "./common/NotFoundPage";

function App() {
  console.log("render  App");
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        {/*put path `/course/:slug` before `/courses` to make sure we check edit_path before new_path'*/}
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;