import React from "react";
import CourseCard from "../Card/CourseCard";
import data from "../../db.json"
import "./CardsContainer.css";
function CardsContainer() {
  let courses = data["courses"].map((course) => {
    return <CourseCard course={course}></CourseCard>;
  });
  return (
    <>
        <div className="coursesList">{courses}</div>
    </>
  );
}

export default CardsContainer;