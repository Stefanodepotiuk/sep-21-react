import React, {useEffect, useState} from 'react';

import {userServices} from "../../services/user.services";
import User from "../User/User";

const Users = ({getUser}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userServices.getAll().then(value => setUsers(value));
    }, [])


    return (
        <div>

            <div>
                {users.map(user => <User key={user.id} user={user} getUser={getUser}/>)}
            </div>

        </div>
    );
};

export default Users;