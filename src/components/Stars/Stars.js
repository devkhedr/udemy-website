import React from 'react'
import styles from './Stars.module.css'

function Stars({rate}) {
  const rating = (rate / 5) * 100;
  const s = rating.toFixed(2) + '%';
  return (
    <div className={styles.starsouter}>
      <div className={styles.starsinner} style={{width : s}}></div>
    </div>
  )
}

export default Stars
