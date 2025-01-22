export default function StockTable({ data }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Adjusted Close</th>
            <th>Adjusted High</th>
            <th>Adjusted Low</th>
            <th>Adjusted Open</th>
            <th>Adjusted Volume</th>
            <th>Close</th>
            <th>Exchange</th>
            <th>High</th>
            <th>Low</th>
            <th>Open</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
        {data?.map((item, index) => (
          <tr key={index}>
            <td>{item.symbol}</td>
            <td>{item.adj_close}</td>
            <td>{item.adj_high}</td>
            <td>{item.adj_low}</td>
            <td>{item.adj_open}</td>
            <td>{item.adj_volume}</td>
            <td>{item.close}</td>
            <td>{item.exchange}</td>
            <td>{item.high}</td>
            <td>{item.low}</td>
            <td>{item.open}</td>
            <td>{item.volume}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );  
}





































// import { useState } from 'react';

// export default function StockTable({ data }) {
//   const [currentPage, setCurrentPage] = useState(1);

//   const resultsPerPage = 25;
//   const totalPages = Math.ceil(data.length / resultsPerPage);

//   function handlePrevClick() {
//     setCurrentPage(currentPage - 1);
//   }

//   function handleNextClick() {
//     setCurrentPage(currentPage + 1);
//   }

//   // Calculate the current page data
//   const startIndex = (currentPage - 1) * resultsPerPage;
//   const endIndex = startIndex + resultsPerPage;
//   const currentData = data.slice(startIndex, endIndex);

//   return (
//     <>
//     <table className='styled-table'>
//       <thead>
//         <tr>
//           <th>Symbol</th>
//           <th>Adjusted Close</th>
//           <th>Adjusted High</th>
//           <th>Adjusted Low</th>
//           <th>Adjusted Open</th>
//           <th>Adjusted Volume</th>
//           <th>Close</th>
//           <th>Exchange</th>
//           <th>High</th>
//           <th>Low</th>
//           <th>Open</th>
//           <th>Volume</th>
//         </tr>
//       </thead>
//       <tbody>
//         {currentData?.map((item, index) => {
//           return (
//             <tr key={index}>
//               <td>{item.symbol}</td>
//               <td>{item.adj_close}</td>
//               <td>{item.adj_high}</td>
//               <td>{item.adj_low}</td>
//               <td>{item.adj_open}</td>
//               <td>{item.adj_volume}</td>
//               <td>{item.close}</td>
//               <td>{item.exchange}</td>
//               <td>{item.high}</td>
//               <td>{item.low}</td>
//               <td>{item.open}</td>
//               <td>{item.volume}</td>
//             </tr>
//           )
//         })}
//       </tbody>
//     </table>
//     {currentData?.length > 0 && (
//       <>
//       <button onClick={handlePrevClick} disabled={currentPage === 1}>
//           Prev
//       </button>
//       <button onClick={handleNextClick} disabled={currentPage === 4}>
//           Next
//       </button>
//       </>
//     )}
//     </>
//   );
// }
