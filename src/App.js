import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar.js'
import Home from './Pages/Home.js';
// import Categories from './Pages/Categories.js';
import FetchApi from './components/FetchApi.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path = "/" element= {<Home/>} />
          <Route exact path = "/general" element= {<FetchApi cat="general"/>} />
          <Route exact path = "/business" element= {<FetchApi cat="business"/>} />
          <Route exact path = "/business" element= {<FetchApi cat="business"/>} />
          <Route exact path = "/entertainment" element= {<FetchApi cat="entertainment"/>} />
          <Route exact path = "/health" element= {<FetchApi cat="health"/>} />
          <Route exact path = "/science" element= {<FetchApi cat="science"/>} />
          <Route exact path = "/sports" element= {<FetchApi cat="sports"/>} />
          <Route exact path = "/technology" element= {<FetchApi cat="technology"/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App