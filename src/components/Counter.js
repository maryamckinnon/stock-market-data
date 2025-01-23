import { useState, useEffect } from 'react';

export default function Counter() {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const url = 'https://randomuser.me/api';
      try {
        const response = await fetch(`${url}?page=${pageNumber}`);
        const result = await response.json();
        console.log(result);
        setData(result.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [pageNumber])

  return (
    <>
      <ul>
        {data?.map((user) => (
          <div key={user.login.username}>
            <h2>{user.name.title + ' ' + user.name.first + ' ' + user.name.last}</h2>
          </div>
        ))}
      </ul>
      <button onClick={() => setPageNumber(pageNumber - 1)}>Prev Person</button>
      <button onClick={() => setPageNumber(pageNumber + 1)}>Next Person</button>
    </>
  );
}




























// import { useState, useEffect } from 'react';

// export default function Counter() {
//   const [data, setData] = useState([]);
//   const [pageNumber, setPageNumber] = useState(1);

//   useEffect(() => {
//     async function fetchData() {
//       const url = 'https://randomuser.me/api';
//       try {
//         const response = await fetch(`${url}?page=${pageNumber}`);
//         const result = await response.json(); // parses the json string into a json object
//         setData(result.results);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchData();
//   }, [pageNumber])

//   return (
//     <>
//     <ul>
//       {data.map((user) => (
//         <li key={user.login.uuid}>
//           <h1>{user.name.title + ' ' + user.name.first + ' ' + user.name.last}</h1>
//             <p>{user.cell}</p>
//         </li>
//       ))}
//       <button onClick={() => setPageNumber(pageNumber + 1)}>Next User</button>
//     </ul>
//     </>
//   );
// }