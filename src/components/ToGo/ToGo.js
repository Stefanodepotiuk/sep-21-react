import React from 'react';
import {useDispatch} from "react-redux";

import './ToGo.css';
import {changeStatus, deleteGo} from "../../store";

const ToGo = ({toGo: {id, name, status}}) => {

    const dispatch = useDispatch();

    return (
        <div className={'toGo'}>

            <input type="checkbox" value={status} onChange={() => dispatch(changeStatus({id}))}/>
            <div className={status ? 'check' : ''}>{name}</div>
            <button onClick={()=>dispatch(deleteGo({id}))}>Delete</button>

        </div>
    );
};

export {ToGo};