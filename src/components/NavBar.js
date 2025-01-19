import React from 'react'
import { Link } from 'react-router';

export default function NavBar() {
  return (
    <nav>
      <Link className='nav-item' to='/'>Home</Link>
      <Link className='nav-item' to='/stock-market'>Stock Market Data</Link>
      <Link className='nav-item' to='/weather'>Weather Data</Link>
      <Link className='nav-item' to='/astronomy'>Astronomy Picture of the Day</Link>
    </nav>
  );
}
