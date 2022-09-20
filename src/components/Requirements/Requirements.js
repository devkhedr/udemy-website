import React, { useContext } from "react";
import { singlePageContext } from "../../App";
import styles from "./Requirements.module.css";

function Requirements() {
  const data = useContext(singlePageContext);

  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Requirements</h3>
      <ul>
        {data.requirements_data.items.map((item, idx) => (
          <li key={idx} className={styles.items}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Requirements;
