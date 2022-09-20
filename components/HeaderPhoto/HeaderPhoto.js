import React from 'react'
import styles from "./HeaderPhoto.module.css"
function HeaderPhoto() {
  return (
    <div className={styles.pageHeader}>
          <img src={require('../../assets/header/header-photo.jpg')} />
          <div className={styles.text}>
            <h1>Learning that gets you</h1>
            <p>
              Skills for your present (and your future). Get started with us.
            </p>
          </div>
        </div>
  )
}

export default HeaderPhoto