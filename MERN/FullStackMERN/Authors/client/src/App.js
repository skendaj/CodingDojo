import './App.css';
import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthorsList from './components/AuthorsList'
import AuthorsEdit from './components/AuthorsEdit'
import AuthorsAdd from './components/AuthorsAdd'

function App() {

  const [update, setUpdate]=useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AuthorsList update={update} setUpdate={setUpdate}  />} path="/" />
          <Route element={<AuthorsAdd />} path="/authors/new"/>
          <Route element={<AuthorsEdit />} path="/authors/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
