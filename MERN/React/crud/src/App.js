import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ItemList from './Components/ItemList';
import CreateItem from './Components/CreateItem';
import React, { useState, useEffect } from 'react';
import EditItem from './Components/EditItem';

function App() {
  return (
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-dark bg-blue">
        <div id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#">Posts</Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link" href="#">Create a new post</Link>
            </li>
          </ul>
        </div>
      </nav>
    <Routes>
      <Route></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

