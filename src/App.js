import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Pages/Home/Home.jsx';
import WomenClothing from './Components/Pages/WomenClothing/WomenClothing.jsx';
import Jewelery from './Components/Pages/Jewelery/Jewelery.jsx';
import Bags from './Components/Pages/Bags/Bags.jsx';
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
        <li>
          <Link to="/bags">Bags</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/women" element={<WomenClothing />} />
      <Route path="/jewelery" element={<Jewelery />} />
      <Route path="/bags" element={<Bags />} />
    </Routes>
    </div>
  );
}

export default App;
