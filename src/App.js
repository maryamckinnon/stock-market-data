import { Route, Routes } from 'react-router-dom';
import Astronomy from './components/Astronomy';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Stock from './components/Stock';
import Weather from './components/Weather';
import Form from './components/Form';
import Practice from './components/Practice';
import Exercise from './components/Exercise';
import Counter from './components/Counter';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stock-market' element={<Stock />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/astronomy' element={<Astronomy />} />
        <Route path='/practice' element={<Practice /> } />
        <Route path='/exercise' element={<Exercise />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </>
  )
}

export default App;
