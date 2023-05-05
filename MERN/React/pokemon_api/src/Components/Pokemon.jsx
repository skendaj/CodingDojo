import React,{ useEffect, useState } from 'react';

function Pokemon() {
    const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=870&offset=0');
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);
    return(
        <div>
        {data ? (
          <ul>
            {data.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    );
}

export default Pokemon;