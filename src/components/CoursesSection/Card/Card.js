import React from 'react'
import Popover from '@mui/material/Popover';
import Stars from '../../Stars/Stars';
import styles from './Card.module.css'
import { Link } from 'react-router-dom';

function Card({course}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  let instructor = "";

  for(const inst in course.instructors)
    instructor += course.instructors[inst].name + ', ';
  
  instructor = instructor.slice(0, -2);
  
  return (
    <Link className={styles.recommend} to={`/course-info/${course.id}`}>
      <div className={styles.course} aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}>
        
        <img  src={course.image}/>
        <h6>{course.title}</h6>
        <p className={styles.instructor}>{instructor}</p>
        <span className={styles.rate}>{course.rating.toFixed(2)} </span>
        <Stars rate={course.rate}/>
        <div>${course.price}</div>
      </div>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        PaperProps={{
          onMouseEnter: handlePopoverOpen,
          onMouseLeave: handlePopoverClose,
          sx: {
              pointerEvents: 'auto'
          }
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        disableScrollLock
      >
        <div sx={{ p: 1 }} className={styles.popover}>
          <h6>{course.title}</h6>
          <p className={styles.update}>Updated September 2019</p>
          <p className={styles.details}>21 total hours . All Levels . Subtitles</p>
          <p>{course.headline}</p>
          <div className={styles.list}><span className={styles.check}><i className="fa-solid fa-check"></i></span><span>Create fully functional Python programs </span></div>
          <div className={styles.list}><span className={styles.check}><i className="fa-solid fa-check"></i></span><span>To learn the python language</span></div>
          <div className={styles.list}><span className={styles.check}><i className="fa-solid fa-check"></i></span><span>Become an experienced Python Programmer</span></div>
          <button className={styles.add}> Add to cart</button>
          <button className={styles.love}><i class="fa-regular fa-heart fa-2x"></i></button>
        </div>
      </Popover>
    </Link>
  )
}

export default Card
