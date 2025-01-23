
import { useEffect, useState } from 'react';

export default function Form() {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [search, setSearch] = useState('');

  async function fetchData() {
    const url = 'https://randomuser.me/api?results=20';
    try {
      const response = await fetch(url);
      const result = await response.json();
      const apiData = result.results
      setData(apiData);
    } catch (error) {
      console.error(error);
    }
  };

  function handleSort(key) {
    const direction = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'; // Toggle direction
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      const aValue = key === 'name' ? `${a.name.first} ${a.name.last}` : key.split('.').reduce((obj, k) => obj[k], a);
      const bValue = key === 'name' ? `${b.name.first} ${b.name.last}` : key.split('.').reduce((obj, k) => obj[k], b);

      if (aValue < bValue) return direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setData(sortedData);
  }

  const filteredData = data.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    const email = user.email.toLowerCase();
    const city = user.location.city.toLowerCase();
    const gender = user.gender;
    return (
      fullName.includes(search.toLowerCase()) ||
      email.includes(search.toLowerCase()) ||
      city.includes(search.toLowerCase()) ||
      gender.includes(search.toLowerCase())
    );
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <label htmlFor='search'>
        Search: 
        <input
          type='text'
          placeholder='Search the table'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th><button onClick={() => handleSort('name')}>Name</button></th>
            <th><button onClick={() => handleSort('gender')}>Gender</button></th>
            <th><button onClick={() => handleSort('location.city')}>Location</button></th>
            <th><button onClick={() => handleSort('email')}>Email</button></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr key={user.email}>
              <td><img src={user.picture?.thumbnail}/></td>
              <td>{user.name?.first + ' ' + user.name?.last}</td>
              <td>{user.gender}</td>
              <td>{user.location?.city}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}