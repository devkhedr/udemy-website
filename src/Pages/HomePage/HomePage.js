import React from 'react'
import HeaderPhoto from "../../components/HeaderPhoto/HeaderPhoto";
import NavBar from "../../components/NavBar/NavBar";
import Tabs from "../../components/tabs/Tabs";
import CoursesSection from "../../components/CoursesSection/CoursesSections";
import TopCategories from "../../components/TopCategories/TopCategories";
import Footer from "../../components/Footer/Footer";
function HomePage() {
  return (
    
    <>
      <NavBar/>
      <HeaderPhoto/>
      <Tabs/>
      <CoursesSection/>
      <TopCategories/>
      <Footer/>
    </>
  )
}

export default HomePage