import React from 'react'
import HeaderPhoto from '../components/HeaderPhoto/HeaderPhoto';
import CoursesSection from '../components/CoursesSection/CoursesSection';
import TopCategories from "../components/TopCategories/TopCategories"

function Home() {
    return (
        <>
            <HeaderPhoto/>
            <CoursesSection/>
            <TopCategories/>
        </>
    )
}

export default Home