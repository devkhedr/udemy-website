import React from "react";
import Stars from "../Stars/Stars";
import styles from "./SingleCourseHeader.module.css";
import { Link } from "react-router-dom";

function SingleCourseHeader({ course }) {
  return (
    <header className={styles.header}>
      <div className={styles.card}>
        <h6>
          <Link to="/" className={styles.links}>
            Home
          </Link>{" "}
          <i className="fa-solid fa-chevron-right"></i>{" "}
          <Link to="" className={styles.links}>
            Python
          </Link>
        </h6>
        <img src={course.image} alt="course thumb" className={styles.image} />
        <h2 className={styles.title}>{course.title}</h2>
        <p className={styles.headline}>{course.headline}</p>
        <div className={styles.stars}>
          <span className={styles.rating}>{course.rating.toPrecision(2)}</span>
          <Stars rate={course.rating} />
          <a href="#ratings" className={styles.links}>
            {" "}
            (3,279 ratings){" "}
          </a>
          <span>19,830 students</span>
        </div>
        <span className={styles.create}>
          Created by{" "}
          <a href="#Avinash" className={styles.links}>
            Avinash Jain
          </a>
          ,{" "}
          <a href="#The" className={styles.links}>
            The Codex
          </a>
        </span>
        <div className={styles.icons}>
          <span className={styles.icon}>
            <i className="fa-solid fa-circle-exclamation"></i> Last updated
            9/2015
          </span>
          <span className={styles.icon}>
            <i className="fa-solid fa-globe"></i> English
          </span>
          <span className={styles.icon}>
            <i className="fa-solid fa-closed-captioning"></i> English
          </span>
        </div>
        <div className={styles.data}>
          <h1>E£{course.price}</h1>
          <button className={styles.button}>Add to Cart</button>
          <div className={styles.additional}>
            <p>30-Day Money-Back Guarantee</p>
            <p>Full Lifetime Access</p>
          </div>
          <div className={styles.additionalLinks}>
            <a href="#">Share</a>
            <a href="#">Gift this course</a>
            <a href="#">Apply Coupon</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default SingleCourseHeader;
