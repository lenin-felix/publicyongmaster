
{/* <link rel="stylesheet" href="assets/vendor/nucleo/css/nucleo.css" type="text/css">
  <link rel="stylesheet" href="assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" type="text/css">
  <!-- Page plugins -->
  <!-- Argon CSS -->
  <link rel="stylesheet" href="assets/css/argon.css?v=1.2.0" type="text/css"></link> */}
import React from 'react'
// import '../public/assets/vendor/nucleo/css/nucleo.css'
// import '..//assets/vendor/@fortawesome/fontawesome-free/css/all.min.css'
// import './assets/css/argon.min.css'
const ArgonLeftSidebar = () => { 
    return  ( 
        <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"/>
            {/* <link rel="icon" href="assets/img/brand/favicon.png" type="image/png"/> */}

            <div className="scrollbar-inner">
                <div className="sidenav-header  align-items-center">
                    <a className="navbar-brand" href="javascript:void(0)">
                    <img src="assets/img/brand/blue.png" className="navbar-brand-img" alt="..."/>
                    </a>
                </div>
                <div className="navbar-inner">
                
                    <div className="collapse navbar-collapse" id="sidenav-collapse-main">
            
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active" href="../index.html">
                                <i className="ni ni-tv-2 text-primary"></i>
                                <span className="nav-link-text">Home</span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="examples/mobile-app.html">
                                <i className="ni ni-bullet-list-67 text-default"></i>
                                <span className="nav-link-text">Mobile App</span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="examples/calender.html">
                                <i className="ni ni-calendar-grid-58 text-green"></i>
                                <span className="nav-link-text">Calender</span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="examples/setting.html">
                                <i className="ni ni-settings-gear-65 text-orange"></i>
                                <span className="nav-link-text">Setting</span>
                            </a>
                            </li>
                
                        </ul>
                        <hr className="my-3"/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export {ArgonLeftSidebar};