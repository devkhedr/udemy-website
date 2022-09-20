import React, { useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../App';
import CourseContent from '../components/CourseContent/CourseContent';
import Description from '../components/Description/Description';
import Feedback from '../components/Feedback/Feedback';
import Instructors from '../components/Instructors/Instructors';
import NoMatch from '../components/NoMatch/NoMatch';
import Requirements from '../components/Requirements/Requirements';
import SingleCourseHeader from '../components/SingleCourseHeader/SingleCourseHeader';
import SingleCourseNav from '../components/SingleCourseNav/SingleCourseNav';
import StickyCard from '../components/StickyCard/StickyCard';
import WhatYouWillLearn from '../components/WhatYouWillLearn/WhatYouWillLearn';

function SingleCoursePage() {
    let {id} = useParams();
    const [curCourse, setCurCourse] = useState({});
    const courses = useContext(DataContext);
    const [worngId, setWrongId] = useState(true);

    useEffect(() => {
        const x = courses.courses.find(item => item.id == id);
        if(x !== undefined){
            setCurCourse(x);
            setWrongId(false);
        }else 
            setWrongId(true);
    }, [id, courses])

    return (
        <> 
            {worngId ? <NoMatch/> : 
                <>
                    <StickyCard course={curCourse}/>
                    <SingleCourseNav course={curCourse}/>
                    <SingleCourseHeader course={curCourse}/>
                    <WhatYouWillLearn/>
                    <CourseContent/>
                    <Requirements/>
                    <Description/>
                    <Instructors/>
                    <Feedback/>
                </>
            }
        </>
    )
}

export default SingleCoursePage