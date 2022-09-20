import React, { useEffect, useState } from 'react'
import styles from './SingleCourseNav.module.css'

function SingleCourseNav({course}) {
    const [showScroll, setShowScroll] = useState(false);
    const [showWidth, setShowWidth] = useState(false);

    useEffect(() => {
        const width = window.innerWidth
        const height = window.pageYOffset
        if(width > 1080) setShowWidth(false);
        else setShowWidth(true);
        
        if(height < 70) setShowScroll(false);
        else setShowScroll(true);
    },[])

    let prev = window.pageYOffset;
    window.onscroll = () => {
        const cur = window.pageYOffset;
        if(cur > prev && cur >= 70){
            setShowScroll(true);
        }else if(cur < prev && cur < 70){
            setShowScroll(false);
        }
        prev = cur;
    }

    window.onresize = () => {
        const cur = window.innerWidth;
        if(cur <= 1080) setShowWidth(true)
        else setShowWidth(false);

        const height = window.pageYOffset;
        if(height >= 70) setShowScroll(true);
        else setShowScroll(false);
    }   
    
    return (
        <> 
            {showScroll === false && showWidth === false? null : 
                <nav className={styles.nav}>
                    <div className={styles.data}>
                        <h6>{course.title}</h6>
                        <span className={styles.gold}>{course.rating.toPrecision(2)} </span>
                        <span className={styles.gold}><i className="fa-solid fa-star"></i> </span>
                        <a href='#' className={styles.link}>(3,274 ratings)</a>
                        <span> 19,736 students</span>
                    </div>
                    <div className={styles.buttonContanier}>
                        <span className={styles.price}>E£{course.price}</span>
                        <button className={styles.button}>Buy now</button>
                    </div>
                </nav>
            }
        </>
    )
}

export default SingleCourseNav