import { Route, Routes } from 'react-router-dom';
import Astronomy from './components/Astronomy';
import Home from './components/Home';
import NavBar from './components/NavBar';
import StockMarket from './components/StockMarket';
import Weather from './components/Weather';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stock-market' element={<StockMarket />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/astronomy' element={<Astronomy />} />
      </Routes>
    </>
  )
}

export default App;
