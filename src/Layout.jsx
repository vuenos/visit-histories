import React from 'react';
import {Header, Aside} from './components/Common';
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content-section">
                <Aside />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;