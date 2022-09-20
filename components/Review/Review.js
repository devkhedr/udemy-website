import React from "react";
import Stars from "../Stars/Stars";
import styles from "./Review.module.css";

function Review({ review }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.initials}>{review.user.initials}</div>
        <div className={styles.data}>
          <h6 className={styles.heading}>{review.user.public_display_name}</h6>
          <span className={styles.rate}>
            <Stars rate={review.rating} />{" "}
            <span className={styles.time}>
              {review.created_formatted_with_time_since}
            </span>
          </span>
          <div dangerouslySetInnerHTML={{ __html: review.content_html }}></div>
          <p className={styles.helpful}>Was this review helpful?</p>
          <div className={styles.bottom}>
            <button className={styles.button}>
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
            <button className={styles.button}>
              <i className="fa-solid fa-thumbs-down"></i>
            </button>
            <a href="#" className={styles.report}>
              Report
            </a>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Review;
