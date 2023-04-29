
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getallEmployees } from './action/action'
import Leaflet from './componets/Leaflet';
import store from './store'
import EmployeeDetails from './componets/EmployeeDetails';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Leaflet />} />
        <Route path='/employee-details/:id' element={<EmployeeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
