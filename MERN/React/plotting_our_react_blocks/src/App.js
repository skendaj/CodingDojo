import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='NavMain'>
        <Navigation />
        <Main>
          <div className='subDiv'>
            <SubContents />
            <SubContents />
            <SubContents />
            </div>
            <Advertisement />
        </Main>
        </div>
    </div>
  );
}

export default App;
