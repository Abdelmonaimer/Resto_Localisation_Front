import React from 'react';
import '../../Css/Sidebar.css';
import '../../JS/sidebarJs.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { HouseGearFill, LayersHalf, StarFill, PinMapFill, Map } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';


function SideBar() {
    const location = useLocation();
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item my-2">
                        <a className="nav-link " style={{ color: location.pathname === '/admin/' ? '#869aeb' : '#333', fontFamily:'Montserrat Thin' , fontWeight:'bold'}} aria-current="page" href="/admin/">
                            <h4><Map className='me-2' />
                                Villes
                            </h4>
                        </a>
                    </li>
                    <li className="nav-item my-2">
                        <a className="nav-link " style={{ color: location.pathname === '/admin/series' ? '#869aeb' : '#333', fontFamily:'Montserrat Thin' , fontWeight:'bold'}} href="/admin/series">
                            <h4><LayersHalf className='me-2' />
                                Series
                            </h4>
                        </a>
                    </li>
                    <li className="nav-item my-2">
                        <a className="nav-link my-2" style={{ color: location.pathname === '/admin/specialities' ? '#869aeb' : '#333', fontFamily:'Montserrat Thin' , fontWeight:'bold'}} href="/admin/specialities">
                            <h4><StarFill className='me-2' />
                                Specialities
                            </h4>
                        </a>
                    </li>
                    <li className="nav-item my-2">
                        <a className="nav-link " style={{ color: location.pathname === '/admin/restaurants' ? '#869aeb' : '#333', fontFamily:'Montserrat Thin' , fontWeight:'bold'}} href="/admin/restaurants">
                            <h4><HouseGearFill className='me-2' />
                                Restaurants
                            </h4>
                        </a>
                    </li>
                    <li className="nav-item my-2">
                        <a className="nav-link" tyle={{ color: location.pathname === '/admin/zones' ? '#869aeb' : '#333', fontFamily:'Montserrat Thin' , fontWeight:'bold'}} href="/admin/zones">
                            <h4><PinMapFill className='me-2' />
                                Zones
                            </h4>
                        </a>
                    </li>
                </ul>

            </div>
        </nav>

    )
}

export default SideBar;
