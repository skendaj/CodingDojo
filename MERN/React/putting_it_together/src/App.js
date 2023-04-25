import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  
  const kafshet= [{
    firstName : "Lesi" ,
    lastName : "qen"
  },
  {
    firstName : "Kitty" ,
    lastName : "mace"
  }
] 
const kafshet1 = [{
  firstName : "lesi" ,
  lastName : "qen"
},
{
  firstName : "kitty" ,
  lastName : "mace"
}
] 

  return (
    <div className="App">
    <PersonCard
    firstName = {"Joe"}
    lastName = {"Jahnee"}
    personAge = {45}
    hairColor = {"Black"}
    kafshet={kafshet}
    />
    <PersonCard
    firstName = {"John"}
    lastName = {"Smith"}
    personAge = {30}
    hairColor = {"Black"}
    kafshet= {kafshet1}
    />
    </div>
  );
}

export default App;