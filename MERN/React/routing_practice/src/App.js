import Home from './components/Home';
import Style from './components/Style';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/:word" element={<Style />} />
          <Route path="/:word/:color/:background" element={<Style />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;