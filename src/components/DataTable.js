

export default function DataTable({ data }) {

  return (
    <table className='styled-table'>
      <thead>
        <tr>
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
        {data?.map((item, index) => {
          return (
            <tr key={index}>
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
          )
        })}
      </tbody>
    </table>
  );
}
