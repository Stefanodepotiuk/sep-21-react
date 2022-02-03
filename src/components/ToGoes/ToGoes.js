import React from 'react';
import {useSelector} from "react-redux";
import {ToGo} from "../ToGo/ToGo";


const ToGoes = () => {

    const {toGoes} = useSelector(state => state.toGo);

    return (
        <div>
            {toGoes.map(toGo => <ToGo key={toGo.id} toGo={toGo}/>)}
        </div>
    );
};

export {ToGoes};