import {configureStore} from "@reduxjs/toolkit";

import toGoReducer from "./toGo.slice";

const store = configureStore({
    reducer: {
        toGo: toGoReducer
    }
});

export default store;