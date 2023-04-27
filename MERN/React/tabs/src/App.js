import "./App.css";
import React,{useState} from "react";
import Tabs from "./Components/Tabs";
import TabDisplay from "./Components/TabDisplay";

function App() {
  const [description, setDescription]=useState("")

  return (
    <div className="App">
      <Tabs description={setDescription} />
      <TabDisplay text={description}/>
    </div>
  );
}

export default App;
