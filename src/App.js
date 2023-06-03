import React from 'react';

import './App.css';
import Villes from './Villes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddVille from './AddVille';
import EditVille from './components/dashborad/EditVille';

//import Header from './components/dashborad/Header';
//import Footer from './components/dashborad/Footer';
import Home from './views/Home';
import SearchByZone from './components/userInterface/SearchByZone';
import RestaurantUI from './components/userInterface/Restaurants';
import Aboutus from './components/userInterface/Aboutus';
import AdminHome from './views/AdminHome';
import Serie from './components/dashborad/Serie';
import EditSerie from './components/dashborad/EditSerie';
import AddSerie from './components/dashborad/AddSerie';
import Specialities from './components/dashborad/Specialities';
import AddSpecialite from './components/dashborad/AddSpecialite';
import EditSpecialite from './components/dashborad/EditSpecialite';
import Zone from './components/dashborad/Zone';
import AddZone from './components/dashborad/AddZone';
import EditZone from './components/dashborad/EditZone';
import Restaurant from './components/dashborad/Restaurant';
import AddRestaurant from './components/dashborad/AddRestaurant';
import EditRestaurant from './components/dashborad/EditRestaurant';

function App() {



  return (

    <Router>

      <Routes>

        <Route path='/' element={<Home />} >
          <Route path='' element={<SearchByZone />} />
          <Route path='aboutus' element={<Aboutus />} />
          <Route path='restaurants/:id' element={<RestaurantUI />} />
        </Route>
        <Route path='admin' element={<AdminHome />} >
          <Route path='' element={<Villes />} />
          <Route path='villes/save' element={<AddVille />} />
          <Route path='villes/:id' element={<EditVille />} />
          <Route path='series/' element={<Serie />} />
          <Route path='series/save' element={<AddSerie />} />
          <Route path='series/:id' element={<EditSerie />} />
          <Route path='specialities/' element={<Specialities />} />
          <Route path='specialities/save' element={<AddSpecialite />} />
          <Route path='specialities/:id' element={<EditSpecialite />} />
          <Route path='zones/' element={<Zone />} />
          <Route path='zones/save' element={<AddZone />} />
          <Route path='zones/:id' element={<EditZone />} />
          <Route path='restaurants/' element={<Restaurant />} />
          <Route path='restaurants/save' element={<AddRestaurant />} />
          <Route path='restaurants/:id' element={<EditRestaurant />} />
        </Route>

      </Routes>
    </Router>

  );
}

export default App;
