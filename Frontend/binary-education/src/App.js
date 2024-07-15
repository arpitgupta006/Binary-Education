import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage/Homepage';
import Navbar from './Components/MainNavbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Book from './Components/Book';
import About from './Homepage/About';
import SchoolRegistration from './Registration/SchoolRegistration';
import StudentRegistration from './Registration/StudentRegistration';
import TeacherRegistration from './Registration/TeacherRegistration';
import Dashboard from './Dashboard/Dashboard';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function App() {

  function DynamicRouting() {
    const dispatch = useDispatch();

    const user = useSelector(state => state.userReducer)

    useEffect(() => {
      const userData = JSON.parse(localStorage.getItem("user"))
      if (userData) {
        dispatch({ type: "LOGIN_SUCCESS", payload: userData })
      
      } else {
        localStorage.removeItem("user");
        dispatch({ type: "LOGIN_ERROR" });
      }
    }, [])

    return(
      <Routes>
      <Route exact path='/' element={<Homepage/>}></Route>
          <Route exact path='/book' element={<Book/>}></Route>
          <Route exact path='/aboutus' element={<About/>}></Route>
          <Route exact path='/schoolregistration' element={<SchoolRegistration/>}></Route>
          <Route exact path='/studentregistration' element={<StudentRegistration/>}></Route>
          <Route exact path='/teacherregistration' element={<TeacherRegistration/>}></Route>
          <Route exact path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
    )
  }
  return (
    <div className="App">
   
   <Router>
       <DynamicRouting/>
      </Router>
      
      
    </div>
  );
}

export default App;
