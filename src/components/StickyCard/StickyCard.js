import React, { useEffect, useState } from 'react'
import styles from './StickyCard.module.css'
import Sticky from 'react-stickynode'

function StickyCard({course}) {
    const [height, setHeight] = useState(false);

    useEffect(() => {
        const cur = window.pageYOffset;
        if(cur < 400) setHeight(false);
        else setHeight(true);
    }, [])

    let prev = window.pageYOffset;
    window.addEventListener('scroll', (e) =>{
        const cur = window.pageYOffset;
        if(cur > prev && cur >= 400){
            setHeight(true);
        }else if(cur < prev && cur < 400){
            setHeight(false);
        }
        prev = cur;
    })

    return (
        <Sticky innerZ={height ? 3 : 1} top={0} enabled={height} enableTransforms={height}>
            <div className={styles.card}>
                <img src={course.image} alt="course thumb" className={ height ? styles.hide : styles.image}/>
                <h3 className={styles.price}>E£{course.price}</h3>
                <button className={styles.add}>Add to cart</button>
                <button className={styles.buy}>Buy now</button>
                <p className={styles.back}>30-Day Money-Back Guarantee</p>
                <h5 className={styles.head}>This course includes:</h5>
                <span className={styles.data}><i className="fa-solid fa-play"></i> 14 hours on-demand video</span>
                <span className={styles.data}><i className="fa-regular fa-file"></i> 1 article</span>
                <span className={styles.data}><i className="fa-solid fa-file-arrow-down"></i> 3 downloadable resources</span>
                <span className={styles.data}><i className="fa-solid fa-infinity"></i> Full lifetime access</span>
                <span className={styles.data}><i className="fa-solid fa-mobile"></i> Access on mobile and TV</span>
                <span className={styles.data}><i className="fa-solid fa-trophy"></i> Certificate of completion</span>
                <div className={styles.additionalLinks}>
                    <a href='#'>Share</a>
                    <a href='#'>Gift this course</a>
                    <a href='#'>Apply Coupon</a>
                </div>
                <hr/>
                <h5 className={styles.head}>Training 5 or more people?</h5>
                <p className={styles.para}>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
                <button className={styles.try}>Try Udemy Business</button>
                
            </div>
        </Sticky>
  )
}

export default StickyCard