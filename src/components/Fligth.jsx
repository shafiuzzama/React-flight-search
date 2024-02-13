// import React, { useEffect, useState } from "react";

// const Fligth = () => {
//   const [data, setData] = useState([]);
//   const [searchterm, setSearchterm] = useState("");
//   const [searchdata, setSearchdata] = useState("");
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`
//         );
//         const result = await response.json();
//         console.log("result", result);
//         setData(result);
//       } catch (error) {
//         console.log("error fetching data", error);
//       }
//     };
//     fetchData();
//   }, []);
//   console.log("data", data);

//   const handlechange = (event) => {
//     setSearchterm(event.target.value);
//     console.log(searchterm);
//   };
//   const handleevent = (event) => {
//     setSearchdata(event.target.value);
//     console.log(searchdata);
//   };

//   return (
//     <>
//       <div>
//         <h1>Flight search</h1>
//         <input type="text" placeholder="source" onChange={handlechange} />
//         <input type="text" placeholder="destination" onChange={handleevent} />
//         <button>search</button>
//       </div>

//       <div>
//         {data.map((item) => {
//           return (
//             <>
//               <table border="1">
//                 <tr>
//                   <th>DEPARTURE</th>
//                   <th>DURATION</th>
//                   <th>ARRIVAL</th>
//                   <th>PRICE</th>
//                 </tr>
//                 <tr>
//                   <td>{item.departure}</td>
//                   <td>{item.duration}</td>
//                   <td> {item.arrival}</td>
//                   <td>{item.price}</td>
//                 </tr>
//               </table>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Fligth;


// import React, { useEffect, useState } from "react";

// const Flight = () => {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchData, setSearchData] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`
//         );
//         const result = await response.json();
//         console.log("result", result);
//         setData(result);
//       } catch (error) {
//         console.log("error fetching data", error);
//       }
//     };
//     fetchData();
//   },[]);

//   const handleSourceChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleDestinationChange = (event) => {
//     setSearchData(event.target.value);
//   };

//   const handleSearch = () => {
    
//     const filteredData = data.filter((item) => {
//       return (
//         item.source.toLowerCase() === searchTerm.toLowerCase() &&
//         item.destination.toLowerCase() === searchData.toLowerCase()
//       );
//     });

//     setData(filteredData);
//   };

//   return (
//     <>
//       <div>
//         <h1>Flight search</h1>
//         <input
//           type="text"
//           placeholder="source"
//           value={searchTerm}
//           onChange={handleSourceChange}
//         />
//         <input
//           type="text"
//           placeholder="destination"
//           value={searchData}
//           onChange={handleDestinationChange}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       <div>
//         {data.map((item) => (
//           <table key={item.id} border="1">
//             <thead>
//               <tr>
//                 <th>DEPARTURE</th>
//                 <th>DURATION</th>
//                 <th>ARRIVAL</th>
//                 <th>PRICE</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{item.departure}</td>
//                 <td>{item.duration}</td>
//                 <td>{item.arrival}</td>
//                 <td>{item.price}</td>
//               </tr>
//             </tbody>
//           </table>
//         )) }
        
//       </div>
//     </>
//   );
// };

// export default Flight;

// import React, { useEffect, useState } from "react";

// const Flight = () => {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchData, setSearchData] = useState("");
//   const [noRecordsFound, setNoRecordsFound] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`
//         );
//         const result = await response.json();
//         console.log("result", result);
//         setData(result);
//       } catch (error) {
//         console.log("error fetching data", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleSourceChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleDestinationChange = (event) => {
//     setSearchData(event.target.value);
//   };

//   const handleSearch = () => {
//     // Filter data based on search criteria
//     const filteredData = data.filter((item) => {
//       return (
//         item.source.toLowerCase() === searchTerm.toLowerCase() &&
//         item.destination.toLowerCase() === searchData.toLowerCase()
//       );
//     });

//     setNoRecordsFound(filteredData.length === 0);
//     setData(filteredData);
//   };

//   return (
//     <>
//       <div>
//         <h1>Flight search</h1>
//         <input
//           type="text"
//           placeholder="source"
//           value={searchTerm}
//           onChange={handleSourceChange}
//         />
//         <input
//           type="text"
//           placeholder="destination"
//           value={searchData}
//           onChange={handleDestinationChange}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       <div>
//         {noRecordsFound ? (
//           <p>No records found</p>
//         ) : (
//           data.map((item) => (
//             <table key={item.id} border="1">
//               <thead>
//                 <tr>
//                   <th>DEPARTURE</th>
//                   <th>DURATION</th>
//                   <th>ARRIVAL</th>
//                   <th>PRICE</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>{item.departure}</td>
//                   <td>{item.duration}</td>
//                   <td>{item.arrival}</td>
//                   <td>{item.price}</td>
//                 </tr>
//               </tbody>
//             </table>
//           ))
//         )}
//       </div>
//     </>
//   );
// };

// export default Flight;


import React, { useEffect, useState } from "react";

const Flight = () => {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState("");
  const [noRecordsFound, setNoRecordsFound] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`
        );
        const result = await response.json();
        console.log("result", result);
        setOriginalData(result);
        setData(result);
      } catch (error) {
        console.log("error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const handleSourceChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setSearchData(event.target.value);
  };

  const handleSearch = () => {
    // Filter original data based on search criteria

    const filteredData = originalData.filter((item) => {
        
      return (
        item.source.toLowerCase() === searchTerm.toLowerCase() &&
        item.destination.toLowerCase() === searchData.toLowerCase()
      );
    });

    setData(filteredData);
    setNoRecordsFound(false);
  };

  return (
    <>
      <div>
        <h1>Flight search</h1>
        <input
          type="text"
          placeholder="source"
          value={searchTerm}
          onChange={handleSourceChange}
        />
        <input
          type="text"
          placeholder="destination"
          value={searchData}
          onChange={handleDestinationChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        {noRecordsFound ? (
          <h1>No records found</h1>
        ) : (
          data.map((item) => (
            <table key={item.id} border="1">
              <thead>
                <tr>
                  <th>DEPARTURE</th>
                  <th>DURATION</th>
                  <th>ARRIVAL</th>
                  <th>PRICE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.departure}</td>
                  <td>{item.duration}</td>
                  <td>{item.arrival}</td>
                  <td>{item.price}</td>
                </tr>
              </tbody>
            </table>
          ))
        )}
      </div>
    </>
  );
};

export default Flight;
