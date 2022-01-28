import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, count1: state.count1 + 1}
        case 'dec':
            return {...state, count1: state.count1 - 1}
        case 'reset':
            return {...state, count1: action.payload}

        case 'inc2':
            return {...state, count2: state.count2 + 1}
        case 'dec2':
            return {...state, count2: state.count2 - 1}
        case 'reset2':
            return {...state, count2: action.payload}

        case 'inc3':
            return {...state, count3: state.count3 + 1}
        case 'dec3':
            return {...state, count3: state.count3 - 1}
        case 'reset3':
            return {...state, count3: action.payload}

        default:
            throw new Error('Error fuck')
    }

};


const App = () => {

    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});


    return (
        <div>

            <div>{state.count1}/{state.count2}/{state.count3}</div>

            <div>
                <button onClick={() => dispatch({type: 'inc'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset', payload: 100500})}>Reset</button>
            </div>

            <div>
                <button onClick={() => dispatch({type: 'inc2'})}>INC2</button>
                <button onClick={() => dispatch({type: 'dec2'})}>Dec2</button>
                <button onClick={() => dispatch({type: 'reset2', payload: 100600})}>Reset2</button>
            </div>

            <div>
                <button onClick={() => dispatch({type: 'inc3'})}>INC3</button>
                <button onClick={() => dispatch({type: 'dec3'})}>Dec3</button>
                <button onClick={() => dispatch({type: 'reset3', payload: 100700})}>Reset3</button>
            </div>

        </div>
    );
};

export default App;