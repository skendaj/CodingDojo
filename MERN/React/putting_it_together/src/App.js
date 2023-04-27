import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  
  const kafshet= [{
    firstName : "Lesi" ,
    lastName : "Qen"
  },
  {
    firstName : "Kitty" ,
    lastName : "Mace"
  }
] 
const kafshet1 = [{
  firstName : "Lesi" ,
  lastName : "Qen"
},
{
  firstName : "Kitty" ,
  lastName : "Mace"
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