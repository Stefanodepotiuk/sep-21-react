import React from 'react';
import {Link, Outlet , NavLink} from "react-router-dom";

import './Layout.css';

const Layout = () => {
    return (

        <div>
            <div className={'header'}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>

            <Outlet/>

        </div>
    );
};

export default Layout;