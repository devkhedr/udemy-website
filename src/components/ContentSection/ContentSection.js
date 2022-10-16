import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ContentLecture from "../ContentLecture/ContentLecture";
import styles from "./ContentSection.module.css";

function ContentSection({ item, expand }) {
  const [open, setOpen] = useState(expand);

  useEffect(() => {
    setOpen(expand);
  }, [expand]);

  const updateOpen = () => {
    setOpen(!open);
  };

  const minute = Math.ceil(item.content_length / 60);

  return (
    <>
      <ListItemButton
        sx={{
          width: "100%",
          bgcolor: "#f7f9fa",
          border: 1,
          borderColor: "#e8eaec",
          display: "flex",
        }}
        onClick={updateOpen}
      >
        <div className={styles.left}>
          {open ? (
            <ExpandLess className={styles.leftData} />
          ) : (
            <ExpandMore className={styles.leftData} />
          )}
          <ListItemText className={styles.leftData} primary={item.title} />
        </div>
        <div className={styles.right}>
          <span>
            {item.lecture_count} lectures • {minute}min
          </span>
        </div>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" sx={{ bgcolor: "white", padding: 2 }}>
          {item.items.map((lec) => (
            <ContentLecture key={lec.id} lec={lec} />
          ))}
        </List>
      </Collapse>
    </>
  );
}

export default ContentSection;
