import React from "react";
import data from "../db.json";
import CardsContainer from "./CardsContainer/CardsContainer";
import "./CoursesSection.css";
function CoursesSection() {
  return (
    <div className="courses">
      <div className="courseIntro">
        <h1>{data["header"]}</h1>
        <p>{data["description"]}</p>
        <button className="exploreButton">Explore Python</button>
      </div>
      <CardsContainer></CardsContainer>
    </div>
  );
}

export default CoursesSection;
