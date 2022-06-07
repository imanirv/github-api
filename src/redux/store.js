import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import user from "./reducers/user";
import repositories from "./reducers/repositories";
const rootReducer = combineReducers({
    user,
    repositories
})

const store = configureStore({
    reducer: rootReducer
})

export default store