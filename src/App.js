import React, {useEffect, useState} from 'react';
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import {userServices} from "./services/user.services";

const App = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        userServices.getAll().then(value => {
            setUsers([...value])
            setFilteredUsers([...value])
        })
    }, [])

    const getFilter = (inform) => {
        let filetrArr = [...users];

        if (inform.name) {
            filetrArr = filetrArr.filter(user => user.name.toLowerCase().includes(inform.name.toLowerCase()))
        }

        if (inform.username) {
            filetrArr = filetrArr.filter(user => user.username.toLowerCase().includes(inform.username.toLowerCase()))
        }

        if (inform.email) {
            filetrArr = filetrArr.filter(user => user.email.toLowerCase().includes(inform.email.toLowerCase()))
        }

        setFilteredUsers(filetrArr);

    }

    return (
        <div>

            <Form getFilter={getFilter}/>
            <Users users={filteredUsers}/>

        </div>
    );
};

export default App;