import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage/Homepage';
import Navbar from './Components/MainNavbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Book from './Components/Book';
import About from './Homepage/About';

function App() {
  return (
    <div className="App">
   
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/book' element={<Book/>}></Route>
          <Route path='/aboutus' element={<About/>}></Route>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
