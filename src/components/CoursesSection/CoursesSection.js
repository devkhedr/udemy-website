import React, { useContext } from 'react'
import Courses from '../Courses/Courses'
import styles from './coursesSection.module.css'
import Loader from '../LoadingSpinner/LoadingSpinner';
import { DataContext, isFetchedContext} from '../../App'

function CoursesSection() {
  const isFetched = useContext(isFetchedContext);
  const topic = useContext(DataContext);
  return (
    <section className={styles.courses}>
        <h2 className={styles.heading}>A broad selection of courses</h2>
        <p className={styles.paragraph}>Choose from 185,000 online video courses with new additions published every month</p>
        <form action="" className={styles.coursesTabs}>
            <input type="radio" id="Python" name="topic" checked="checked" />
            <label for="Python">Python</label>
            <input type="radio" id="Excel" name="topic" />
            <label for="Excel">Excel</label>
            <input type="radio" id="Web Development" name="topic" />
            <label for="Web Development">Web Development</label>
            <input type="radio" id="JavaScript" name="topic" />
            <label for="JavaScript">JavaScript</label>
            <input type="radio" id="Data Science" name="topic" />
            <label for="Data Science">Data Science</label>
            <input type="radio" id="AWS" name="topic" />
            <label for="AWS">AWS Certification</label>
            <input type="radio" id="Drawing" name="topic" />
            <label for="Drawing">Drawing</label>
          </form>
        {
          isFetched ? <Courses header={topic.header} description={topic.description} courses={topic.courses}/> : <Loader/>
        } 
    </section>
  );
}
export default CoursesSection;
