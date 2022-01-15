import React from 'react';

const UserDetails = ({user, getUserId}) => {
    const {id, name, username, email, address, phone} = user;

    return (
        <div>
            <li>Id - {id}</li>
            <li>Name - {name}</li>
            <li> Username - {username}</li>
            <li>email - {email}</li>
            <li>Adress</li>
            <ul>street : {address.street}</ul>
            <ul>city : {address.city}</ul>
            <li>number : {phone}</li>
            <button onClick={() => getUserId(id)}>Get post</button>
        </div>
    );
};

export default UserDetails;