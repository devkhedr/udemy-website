import { List } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { singlePageContext } from "../../App";
import ContentSection from "../ContentSection/ContentSection";
import styles from "./CourseContent.module.css";

function CourseContent() {
  const data = useContext(singlePageContext);
  const content = data.curriculum_context.data;

  const totTime = content.estimated_content_length_in_seconds;
  const hours = parseInt(totTime / (60 * 60));
  const minutes = Math.round(totTime / 60 - hours * 60);

  const [expand, setExpand] = useState(false);
  const [showmore, setShowmore] = useState(false);

  useEffect(() => {
    if (content.sections.length <= 10) setShowmore(true);
  }, [content.sections.length]);

  const handleExpand = () => {
    setExpand(!expand);
    setShowmore(true);
  };

  const handleButton = () => {
    setShowmore(true);
  };

  return (
    <section className={styles.section}>
      <h4 className={styles.heading}>Course content</h4>
      <div className={styles.aboveContent}>
        <span className={styles.info}>
          {content.sections.length} sections •{" "}
          {content.num_of_published_lectures} lectures • {hours}h {minutes}m
          total length
        </span>
        <button className={styles.button} onClick={handleExpand}>
          {" "}
          {!expand ? "Expand" : "Collapse"} all sections
        </button>
      </div>
      <List
        sx={{
          width: "100%",
          bgcolor: "#f7f9fa",
          border: 1,
          borderColor: "#e8eaec",
        }}
        disablePadding
        component="nav"
      >
        {content.sections
          .filter((item) => (!showmore ? item.index <= 10 : true))
          .map((item) => (
            <ContentSection key={item.index} item={item} expand={expand} />
          ))}
      </List>
      {!showmore ? (
        <button onClick={handleButton} className={styles.showmore}>
          {content.sections.length - 10} more sections
        </button>
      ) : (
        ""
      )}
    </section>
  );
}

export default CourseContent;
