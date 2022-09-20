import React, { useContext, useState } from 'react'
import { singlePageContext } from '../../App'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import styles from './Description.module.css'

function Description() {
    const data = useContext(singlePageContext);

    const [open, setOpen] = useState(true)

    return (
        <section className={styles.section}>
            <h3 className={styles.heading}>Description</h3>
            { open ? <div className={styles.hide} dangerouslySetInnerHTML={{ __html: data.description }}/> : <div dangerouslySetInnerHTML={{ __html: data.description }}/>}
            <button className={styles.button} onClick={() => setOpen(!open)}>Show {open ? 'more' : 'less'} {open ? <ExpandMore/> : <ExpandLess/>}</button>
        </section>
    )
}

export default Description