import './App.css';
import First from './components/First'
// import Second from './components/Second';
// // import Second from './components/Second';
// import Third from './components/Third';   

function App() {
  const data = [
    { name: 'USA', population: 328, continent: 'North America' },
    { name: 'China', population: 1393, continent: 'Asia' },
    { name: 'Australia', population: 25, continent: 'Australia' },
    { name: 'India', population: 1366, continent: 'Asia' },
    { name: 'Russia', population: 144, continent: 'Europe/Asia' },
    { name: 'Canada', population: 38, continent: 'North America' },
    { name: 'Brazil', population: 212, continent: 'South America' },
    { name: 'Mexico', population: 128, continent: 'North America' },
    { name: 'Indonesia', population: 270, continent: 'Asia' },
    { name: 'Nigeria', population: 200, continent: 'Africa' },
    { name: 'Argentina', population: 45, continent: 'South America' },
    { name: 'South Africa', population: 58, continent: 'Africa' },
    { name: 'Pakistan', population: 220, continent: 'Asia' },
    { name: 'Bangladesh', population: 165, continent: 'Asia' },
    { name: 'Philippines', population: 109, continent: 'Asia' },
    { name: 'Egypt', population: 101, continent: 'Africa' },
    { name: 'Vietnam', population: 97, continent: 'Asia' },
    { name: 'Ethiopia', population: 114, continent: 'Africa' },
    { name: 'Germany', population: 83, continent: 'Europe' },
    { name: 'Iran', population: 84, continent: 'Asia' }
  ];

  return (
    <div className="App">
      <First data={data}/>
      {/* <Second data={data} />
      <Third data={data} /> */}
    </div>
  );
}

export default App;
