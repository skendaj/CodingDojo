import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Details from './components/Detail';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route element={<Main/>} path="/" />
        <Route element={<Details/>} path="/product/:id" />
        <Route element={<Update/>} path="/product/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
