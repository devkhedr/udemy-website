import React, { useContext } from 'react'
import Card from '../Card/Card';
import styles from './cards.module.css'
import { searchValueContext } from '../../../App'

function Cards({courses}) {
  const searchValue = useContext(searchValueContext);
  const cards = courses.filter(course => course.title.toLowerCase().includes(searchValue)).map( course => <Card key={course.id} course={course}/>);

  return (
    <section className={styles.cards}>
      {cards.length ? cards : <h5>There is no results to show</h5>}
    </section>
  )
}

export default Cards
