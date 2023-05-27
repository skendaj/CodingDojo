import './App.css';
import React, {useState} from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';
import PlayerForm from './components/PlayerAdd';
import PlayerList from './components/PlayerList';
import Game from './components/Game';

function App() {

  const [player, setPlayer] = useState([]);
  const [update, setUpdate] = useState(false);

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <div className='styling'>
        <Routes>
          <Route path="/" element={<Navigate to="/players/list" />} />
          <Route path={'/players/list'} element={<PlayerList player={player} setPlayer={setPlayer} update={update} setUpdate={setUpdate}/>}/>
          <Route path={'/players/addPlayer'} element={<PlayerForm update={update} setUpdate={setUpdate}/>}/>
          <Route path={'/status/game/1'} element={<Game player={player} setPlayer={setPlayer}/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
