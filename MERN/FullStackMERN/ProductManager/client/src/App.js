import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./views/Main"
// import ProductManager from './components/ProductManager';

const App = () => {
    
    return(
	<div>
    	<BrowserRouter>
            <Routes>
	    <Route element={<Main />} path="/home" default/> 
            </Routes>
    	</BrowserRouter>
        </div>
    ) 
}
export default App;

