import React from 'react'
import Cards from '../CoursesSection/Cards/Cards'
import styles from './courses.module.css'

function Courses({ header, description, courses}) {
  return (
     <section className={styles.explain}>
         <h3 className={styles.header}>{header}</h3>
         <p className={styles.description}>{description}</p>
         <button className={styles.button}>Explore Python</button>
         <Cards courses={courses}/>
     </section>
  )
}

export default Courses
