import React, {useEffect, useState} from 'react';
import {Link, Outlet, useNavigate, useParams} from "react-router-dom";

import {userService} from "../../services/userService";
import './UserDetailsPage.css';

const UserDetailsPage = () => {

    const {id} = useParams();
    const [user, setUser] = useState([null]);
    const navigate = useNavigate();

    useEffect(() => {
        userService.getById(id).then(value => setUser({...value}))
    }, [])

    const back = () => {
        navigate(-1);
    }

    return (
        <div>

            {user &&
            <div className={'userDetails'}>

                <h1>User Details</h1>

                <div>Id: {user.id}</div>
                <div>Name: {user.name}</div>
                <div>User Name:{user.username}</div>
                <div>email:{user.email}</div>
                <div>Phone:{user.phone}</div>
                <div>Website:{user.website}</div>

                <Link to='posts'>
                    <button className={'button'}>user posts</button>
                </Link>

                <button onClick={back} className={'beak'}>beak</button>

            </div>
            }


            <Outlet/>

        </div>
    );
};

export {UserDetailsPage};