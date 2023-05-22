import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Details from './components/Details';
import EditThing from './components/EditThing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<Details />} path="/things/:id"/>
          <Route element={<EditThing />} path="/things/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
