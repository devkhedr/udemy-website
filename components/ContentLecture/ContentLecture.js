import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import { ListItemText } from "@mui/material";
import styles from "./ContentLecture.module.css";

function ContentLecture({ lec }) {
  return (
    <ListItemButton>
      <div className={styles.left}>
        <span>
          {lec.content_summary.includes("page") ? (
            <i className="fa-regular fa-file"></i>
          ) : (
            <i className="fa-solid fa-circle-play"></i>
          )}
        </span>
        {lec.can_be_previewed ? (
          <ListItemText
            primary={lec.title}
            sx={{ color: "#5624d0", textDecoration: "underline" }}
          />
        ) : (
          <ListItemText primary={lec.title} />
        )}
      </div>
      <div className={styles.right}>
        {lec.can_be_previewed ? (
          <span className={styles.can_preview}>Preview</span>
        ) : (
          <span className={styles.cannot_preview}>Preview</span>
        )}
        <span className={styles.time}>{lec.content_summary}</span>
      </div>
    </ListItemButton>
  );
}

export default ContentLecture;
