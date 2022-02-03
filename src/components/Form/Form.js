import React from 'react';
import {useDispatch} from "react-redux";
import {addToGo} from "../../store";

const Form = () => {

    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        dispatch(addToGo({toGo: e.target.toGo.value}))
        e.target.reset()
    }

    return (
        <form onSubmit={submit}>
            <input type="text" name={'toGo'}/>
            <button>Save</button>
        </form>
    );
};

export {Form};