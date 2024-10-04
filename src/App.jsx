import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Tormenta1 } from './components/Tormenta1';
import { Tormenta2 } from './components/Tormenta2';
import { Tormenta3 } from './components/Tormenta3';
import { Tormenta4 } from './components/Tormenta4';
import { Tormenta5 } from './components/Tormenta5';
import { Tormenta6 } from './components/Tormenta6';
import { Navigation } from './components/Navigation';

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <h1 className='tec-center my-3'>Galery Project</h1>
        </div>
       <div className='container d-flex justify-content-center'>
       <Routes>
          <Route path='/tormenta1' element={<Tormenta1 className='main-img-container'/>} />
          <Route path='/tormenta2' element={<Tormenta2 className='main-img-container'/>} />
          <Route path='/tormenta3' element={<Tormenta3 className='main-img-container'/>} />
          <Route path='/tormenta4' element={<Tormenta4 className='main-img-container'/>} />
          <Route path='/tormenta5' element={<Tormenta5 className='main-img-container'/>} />
          <Route path='/tormenta6' element={<Tormenta6 className='main-img-container'/>} />
        </Routes>
       </div>
       <div>
        <Navigation />
       </div>
      </BrowserRouter>
    </>
  );
};

export default App;