import React from 'react';

const Flight = ({item}) => {

    return (
        <div key={item.flight_number}> {item.mission_name} -- {item.launch_year}
            <img src={item.links.mission_patch_small} alt={item.flight_number}/>
        </div>
    );
};

export default Flight;