import { Route, Routes } from 'react-router-dom';
import Astronomy from './components/Astronomy';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Stock from './components/Stock';
import Weather from './components/Weather';
import Practice from './components/Practice';
import Exercise from './components/Exercise';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stock-market' element={<Stock />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/astronomy' element={<Astronomy />} />
        <Route path='/form-practice' element={<Practice /> } />
        <Route path='/exercise' element={<Exercise />} />
      </Routes>
    </>
  )
}

export default App;
