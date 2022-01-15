import React from 'react';

import './UserStyle.css';

const User = ({user, getUser}) => {

    const {id, name} = user;

    return (
        <div className={'userStyle'}>

            <div>{id} ) {name}</div>
            <button onClick={() => getUser(user)}>Details</button>

        </div>
    );
};

export default User;