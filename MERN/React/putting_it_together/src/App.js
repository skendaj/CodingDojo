import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
      lastName={"Doe"}
      firstName={"Jane"}
      hairColor={"Black"}
      initialAge={45}
      />
      <PersonCard
      lastName={"Smith"}
      firstName={"John"}
      hairColor={"Brown"}
      initialAge={88}
      />
    </div>
  );
}

export default App;
