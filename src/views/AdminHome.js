import React from 'react';
import { Outlet } from 'react-router-dom';
import '../Css/Sidebar.css';
import SideBar from '../components/dashborad/SideBar';

function AdminHome() {
    return (
        <div>
            <div className=' justify-content-center ' style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
                <header className="navbar navbar-dark sticky-top  flex-md-nowrap p-0 shadow" style={{backgroundColor: '#869aeb'}}>
                    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#"><b>Find Restaurant</b></a>
                    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-nav">
                        <div className="nav-item text-nowrap">
                            <a className="nav-link px-3" href="#">Sign out</a>
                        </div>
                    </div>
                </header>
                <div className="container-fluid">
                    <div className="row">
                        <SideBar />
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <Outlet />
                        </main>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AdminHome
