import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    toGoes: [],

}


const toGoSlice = createSlice({
    name: 'togoSlice',
    initialState,
    reducers: {
        addToGo: (state, action) => {
            state.toGoes.push({id: new Date().getTime(), name: action.payload.toGo, status: false})
        },
        changeStatus: (state, action) => {
            const toGo = state.toGoes.find(toGo => toGo.id === action.payload.id);
            toGo.status = !toGo.status
        },
        deleteGo:(state, action) => {
            const index = state.toGoes.findIndex(gogo => gogo.id === action.payload.id);
            state.toGoes.splice(index, 1);
        }
    }
});

const toGoReducer = toGoSlice.reducer;

export const {addToGo,changeStatus,deleteGo} = toGoSlice.actions;
export default toGoReducer;