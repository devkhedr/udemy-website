import React from 'react'
import styles from "./TopCategories.module.css"
function TopCategories() {
  return (
    <div className={styles.topCategories}>
        <h3>Top categories</h3>
        <div className={styles.row}>
          <div className={styles.card}>
            <img
              src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
              alt="Design"
            />
            <b className={styles.cardText}>Design</b>
          </div>
          <div className={styles.card}>
            <img
              src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"
              alt="Development"
            />
            <b className={styles.cardText}>Development</b>
          </div>
          <div className={styles.card}>
            <img
              src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg"
              alt="Marketing"
            />
            <b className={styles.cardText}>Marketing</b>
          </div>
          <div className={styles.card}>
            <img
              src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg"
              alt="IT and Software"
            />
            <b className={styles.cardText}>IT and Software</b>
          </div>
          <div className={styles.card}>
            <img
              src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg"
              alt="Personal Development"
            />
            <b className={styles.cardText}>Personal Development</b>
          </div>
          <div className={styles.card}>
            <img
              src="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg"
              alt="Business"
            />
            <b className={styles.cardText}>Business</b>
          </div>
          <div className={styles.card}>
            <img
              src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg"
              alt="Photography"
            />
            <b className={styles.cardText}>Photography</b>
          </div>
          <div className={styles.card}>
            <img
              src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg"
              alt="Music"
            />
            <b className={styles.cardText}>Music</b>
          </div>
        </div>
      </div>
  )
}

export default TopCategories