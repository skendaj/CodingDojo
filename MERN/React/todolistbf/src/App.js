import React, { useState } from "react";
import InputEl from "./components/InputEl";
import ToDo from "./components/ToDo";
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState([]);

  return (
    <div className="App">
      <InputEl toDoList={toDoList} setToDoList={setToDoList} />
      <ToDo toDoList={toDoList} setToDoList={setToDoList}/>
    </div>
  );
}

export default App;
