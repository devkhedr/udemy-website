import React, { useContext } from "react";
import { singlePageContext } from "../../App";
import styles from "./WhatYouWillLearn.module.css";

function WhatYouWillLearn() {
  const data = useContext(singlePageContext);
  const objectives = data.objectives;

  return (
    <section className={styles.section}>
      <h4 className={styles.heading}>What you'll learn</h4>
      <div className={styles.objectives}>
        {objectives.map((item, idx) => (
          <span key={idx} className={styles.items}>
            <i className="fa-solid fa-check"></i> {item}{" "}
          </span>
        ))}
      </div>
    </section>
  );
}

export default WhatYouWillLearn;
