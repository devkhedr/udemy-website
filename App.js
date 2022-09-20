import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/NavBar/Navbar";
import SingleCoursePage from "./pages/CoursePage";
import Loader from "./components/LoadingSpinner/LoadingSpinner";
import NoMatch from "./components/NoMatch/NoMatch";
import Footer from "./components/Footer/Footer";

export const DataContext = createContext();
export const singlePageContext = createContext();
export const isFetchedContext = createContext();
export const searchValueContext = createContext();
export const setSearchValueContext = createContext();

function App() {
  const [coursesData, setCoursesData] = useState({});
  const [isFetched, setIsFetched] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [singlePageData, setSinglePageData] = useState({});
  const [isFetchedSingle, setIsFetchedSingle] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.npoint.io/11a44514a6312c494d92")
      .then((res) => {
        setCoursesData(res.data.record);
        setIsFetched(true);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://api.npoint.io/220ce20a897fa6b7fd25")
      .then((res) => {
        setSinglePageData(res.data);
        setIsFetchedSingle(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <DataContext.Provider value={coursesData}>
        <singlePageContext.Provider value={singlePageData}>
          <isFetchedContext.Provider value={isFetched}>
            <searchValueContext.Provider value={searchValue}>
              <setSearchValueContext.Provider value={setSearchValue}>
                <Navbar />
                <Routes>
                  <Route path="*" element={<Navigate to="/" />} />
                  <Route path="/" exact element={<Home />}></Route>
                  <Route
                    path="/course-info/:id"
                    exact
                    element={
                      isFetched && isFetchedSingle ? (
                        <SingleCoursePage />
                      ) : (
                        <Loader />
                      )
                    }
                  />
                  <Route path="/*" exact element={<NoMatch />} />
                </Routes>
                <Footer />
              </setSearchValueContext.Provider>
            </searchValueContext.Provider>
          </isFetchedContext.Provider>
        </singlePageContext.Provider>
      </DataContext.Provider>
    </div>
  );
}

export default App;
