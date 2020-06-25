import React from 'react'

const ArgonLeftSidebar = () => { 
    return  ( 
        <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
            <div class="scrollbar-inner">
            <!-- Brand -->
            <div class="sidenav-header  align-items-center">
                <a class="navbar-brand" href="javascript:void(0)">
                <img src="assets/img/brand/blue.png" class="navbar-brand-img" alt="...">
                </a>
            </div>
            <div class="navbar-inner">
                <!-- Collapse -->
                <div class="collapse navbar-collapse" id="sidenav-collapse-main">
                <!-- Nav items -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" href="../index.html">
                        <i class="ni ni-tv-2 text-primary"></i>
                        <span class="nav-link-text">Home</span>
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="examples/mobile-app.html">
                        <i class="ni ni-bullet-list-67 text-default"></i>
                        <span class="nav-link-text">Mobile App</span>
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="examples/calender.html">
                        <i class="ni ni-calendar-grid-58 text-green"></i>
                        <span class="nav-link-text">Calender</span>
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="examples/setting.html">
                        <i class="ni ni-settings-gear-65 text-orange"></i>
                        <span class="nav-link-text">Setting</span>
                    </a>
                    </li>
        
                </ul>
                <hr class="my-3">
             

                </div>
            </div>
            </div>
        </nav>
    )
}