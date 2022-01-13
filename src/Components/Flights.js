import React from 'react';
import {useEffect, useState} from "react";
import Flight from "./Flight";



const Flights = () => {

    let [flightslist,setflightslist] = useState([]);


    useEffect(() => {

        fetch(`https://api.spacexdata.com/v3/launches`)
            .then(value => value.json())
            .then(flights => {
                let filter = flights.filter(flight => flight.launch_year !== '2020');
                setflightslist(filter);


            });


    }, []);


    return (
        <div>
            {
                flightslist.map(value => <Flight key={value.flight_number}/> )
            }
        </div>
    );
};

export default Flights;