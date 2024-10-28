import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import WomenClothing from './Components/WomensClothing/WomensClothing.jsx';
import Jewelery from './Components/Jewelery/Jewelery.jsx';
function App() {
  return (
    <div>
    <nav >
      <ul className='navBar'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/women">Women's Clothing</Link>
        </li>
        <li>
          <Link to="/jewelery">Jewelery</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/women" element={<WomenClothing />} />
      <Route path="/jewelery" element={<Jewelery />} />
    </Routes>
    </div>
  );
}

export default App;
