import "./App.css";
import ItemList from "./Components/ItemList";
import CreateItem from "./Components/CreateItem";
import EditItem from "./Components/EditItem";
import DeleteItem from "./Components/DeleteItem";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div id="navbarNav" className="ml-2'">
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
        <Route exact path="/" element={<ItemList />} />
        <Route path="/create" element={<CreateItem />} />
        <Route path="/edit/:id" element={<EditItem />} />
        <Route path="/delete/:id" element={<DeleteItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
