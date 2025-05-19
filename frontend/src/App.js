import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Playground from './Playground'
import NavBar from './Navbar';



function App() {

  return (

    <BrowserRouter>
      <div className="app-container">
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='/playground' element={<Playground />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;