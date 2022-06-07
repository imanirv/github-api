import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import user from "./reducers/user";
import repository from "./reducers/repositories";
const rootReducer = combineReducers({
    user,
    repository
})

const store = configureStore({
    reducer: rootReducer
})

export default store