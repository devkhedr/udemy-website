import React, { useState } from "react";
import "./CourseCard.css";

function Card(props) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div
      class="container"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      {!isHovering && (
        <div className="recommend">
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
        </div>
      )}
      {isHovering && (
        <div className="popover">
          <p className="title">{props.course["title"]}</p>
          <p className="update">Updated September 2019</p>
          <p className="details">21 total hours . All Levels . Subtitles</p>
          <p className="headline">{props.course["headline"]}</p>
          <div className="list">
            <span className="check">
              <i class="fa-solid fa-check"></i>
            </span>
            <span>Create fully functional Python programs </span>
          </div>
          <div className="list">
            <span className="check">
              <i class="fa-solid fa-check"></i>
            </span>
            <span>To learn the python language</span>
          </div>
          <div className="list">
            <span className="check">
              <i class="fa-solid fa-check"></i>
            </span>
            <span>Become an experienced Python Programmer</span>
          </div>
          <button className="add"> Add to cart</button>
          <button className="love">
            <i class="fa-regular fa-heart fa-2x"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default Card;
