import React, { useContext } from 'react'
import { singlePageContext } from '../../App'
import Instructor from '../Instructor/Instructor';
import styles from './Instructors.module.css'

function Instructors() {
    const data = useContext(singlePageContext);
    return (
        <section className={styles.section}>
            <h3 className={styles.heading}>Instructors</h3>
            {data.visible_instructors.map((instructor, idx) => <Instructor key={idx} instructor={instructor}/>)}
        </section>
    )
}

export default Instructors