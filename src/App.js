import "./App.css";
import HeaderPhoto from "./components/HeaderPhoto/HeaderPhoto";
import NavBar from "./components/NavBar/NavBar";
import Tabs from "./components/tabs/Tabs";
import CoursesSection from "./components/CoursesSection/CoursesSections";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HeaderPhoto></HeaderPhoto>
      <Tabs></Tabs>
      <CoursesSection></CoursesSection>
    </div>
  );
}

export default App;
