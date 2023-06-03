import React from 'react';
import {Outlet} from "react-router-dom";
import HomeNavbar from '../components/userInterface/Navbar';

function Home() {
    return (
      
        <div >
            <div className='nav'>
                <HomeNavbar />
            </div>
            <div className='container-fluid justify-content-center my-2' >
                <Outlet />
            </div>
        </div>
      
    );
  }
export default Home;  