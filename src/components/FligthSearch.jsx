
import React, { useEffect, useState } from 'react';
import './fligthsearch.css';

const FligthSearch = () => {
  const [data, setData] = useState([]);
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [searchedFlights, setSearchedFlights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1");
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.log("Fetching error ", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredFlights = data.filter(item => 
      item.source.toLowerCase() === source.toLowerCase() && item.destination.toLowerCase() === destination.toLowerCase()
    );
    setSearchedFlights(filteredFlights);
  };

  return (
    <>
      <div className='style'>
        <h1>flight search</h1>
        <input
          type="text"
          placeholder='source'
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <input
          type="text"
          placeholder='destination'
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button onClick={handleSearch}>search</button>

        {searchedFlights.length > 0 ? (
          <table border="1">
            <thead>
              <tr>
                <th>DEPARTURE</th>
                <th>DURATION</th>
                <th>ARRIVAL</th>
                <th>PRICE</th>
              </tr>
            </thead>

            <tbody>
              {searchedFlights.map((item) => (
                <tr key={item.id}>
                  <td>{item.departure}</td>
                  <td>{item.duration}</td>
                  <td>{item.arrival}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No flight found</p>
        )}
      </div>
    </>
  );
};

export default FligthSearch;
