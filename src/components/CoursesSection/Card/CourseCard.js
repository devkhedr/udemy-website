import React from "react";
import "./CourseCard.css";

function Card(props) {
  return (
    <div className="recommend">
      <a href={`${props.course["link"]}`}>
        <img
          src={`${props.course["image"]}`}
          alt={`course ${props.course["id"]}`}
        />{" "}
        <h5 className="title"> {props.course["title"]} </h5>{" "}
        <h4 className="authorName">
          {" "}
          {props.course["instructors"][0]["name"]}{" "}
        </h4>{" "}
        <div class="rate">
          {" "}
          {props.course["rating"].toFixed(1)}{" "}
          <i className="fa-solid fa-star"> </i>{" "}
          <i className="fa-solid fa-star"> </i>{" "}
          <i className="fa-solid fa-star"> </i>{" "}
          <i className="fa-solid fa-star"> </i>{" "}
          <i className="fa-solid fa-star-half-stroke"> </i>{" "}
        </div>{" "}
        <h3 className="price"> E&pound;{props.course["price"]} </h3>{" "}
      </a>{" "}
    </div>
  );
}

export default Card;