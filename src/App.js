import './App.css';
import {useEffect, useState} from "react";

function App() {

    let [flightslist,setflightslist] = useState();


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
                flightslist.map(value => <div key={value.flight_number}> {value.mission_name} -- {value.launch_year}
                    <img src={value.links.mission_patch_small} alt={value.flight_number}/>
                </div>)
            }

        </div>


    );
}

export default App;
