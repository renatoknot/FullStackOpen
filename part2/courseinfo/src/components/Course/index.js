import React from "react";

import styles from "./styles.module.css";

//Components
import Header from "../Header";
import Content from "../Content";

const Course = ({ course }) => {
  return (
    <div className={styles["container-course"]}>
      <Header title={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

export default Course;
