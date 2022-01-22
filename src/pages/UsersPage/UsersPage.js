import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services/userService";
import {User} from "../../componenta";
import './UsersPage.css';

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, []);

    return (
        <div className={'userPage'}>

            <div>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>

            <Outlet/>

        </div>
    );
};

export {UsersPage};