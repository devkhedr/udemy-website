import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import React, { useState } from 'react'
import styles from'./Instructor.module.css'

function Instructor({instructor}) {
    const [open, setOpen] = useState(true)

    return (
        <div id={instructor.name} className={styles.card}>
            <h5 className={styles.heading}>{instructor.title}</h5>
            <h6 className={styles.job}>{instructor.job_title}</h6>
            <div className={styles.instructor}>
                <img src={instructor.image_100x100} alt={instructor.name} className={styles.image}/>
                <div className={styles.skills}>
                    <div className={styles.icons}>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-certificate"></i></span>
                        <span><i className="fa-solid fa-person"></i></span>
                        <span><i className="fa-solid fa-circle-play"></i></span>
                    </div>
                    <div className={styles.data}>
                        <span className={styles.words}>{instructor.rating} Instructor Rating</span>
                        <span className={styles.words}>{instructor.reviews.toLocaleString()} Reviews</span>
                        <span className={styles.words}>{instructor.students.toLocaleString()} Students</span>
                        <span className={styles.words}>{instructor.courses} Courses</span>
                    </div>
                </div>
            </div>
            { open ? <div className={styles.hide} dangerouslySetInnerHTML={{ __html: instructor.description }}/> : <div dangerouslySetInnerHTML={{ __html: instructor.description }}/>}
            <button className={styles.button} onClick={() => setOpen(!open)}>Show {open ? 'more' : 'less'} {open ? <ExpandMore/> : <ExpandLess/>}</button>
        </div>
    )
}

export default Instructor