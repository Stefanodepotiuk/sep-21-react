import {useReducer} from "react";

import reducer from "./reduser/reducer";
import './App.css';
import {CatDogsForms, CatsDogsOutput} from "./components";

function App() {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    return (
        <div>
            <CatDogsForms dispatch={dispatch}/>
            <hr/>
            <CatsDogsOutput cats={state.cats} dogs={state.dogs} dispatch={dispatch}/>
        </div>
    );
}

export default App;