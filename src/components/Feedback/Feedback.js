import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import React, { useContext, useState } from 'react'
import { singlePageContext } from '../../App'
import Review from '../Review/Review';
import Stars from '../Stars/Stars';
import styles from './Feedback.module.css'

function Feedback() {
    const data = useContext(singlePageContext);
    let tot_reviews = 0;
    for(let i = 0; i < data.rating_distribution.length; i++)
        tot_reviews += data.rating_distribution[i].count;
    
    const [showmore, setShowmore] = useState(true);

    return (
        <section className={styles.section} id='ratings'>
            <h3 className={styles.heading}>Student feedback</h3>
            <div className={styles.head}>
                <div className={styles.course_rating}>
                    <span className={styles.rate}>{data.rating.toFixed(1)}</span>
                    <Stars rate={data.rating}/>
                    <span>Course Rating</span>
                </div>
                <div className={styles.rating}>
                    {data.rating_distribution.map((item, idx) =>
                    <div key={idx} className={styles.bars}>
                        <div className={styles.outer}>
                            <div className={styles.inner} style ={{width: Math.round(item.count / tot_reviews * 100) + '%'}}></div>
                        </div>
                        <Stars rate={item['rating']}/>
                        <span className={styles.percent}>{Math.round(item.count / tot_reviews * 100)}%</span>
                    </div>
                    )}
                </div>
            </div>
            <h4 className={styles.heading2}>Reviews</h4>
            {data.users_reviews.filter((item, idx) => showmore ? idx < 4 : true).map(review => <Review key={review.id} review={review}/>)}
            <button className={styles.showmore} onClick={() => setShowmore(!showmore)}>Show {showmore ? 'more' : 'less'} reviews {showmore ? <ExpandMore/> : <ExpandLess/>} </button>
        </section>
    )
}

export default Feedback