import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import user from "./reducers/user";
import repository from "./reducers/repositories";
import authorization from "./reducers/auth";
const rootReducer = combineReducers({
    user,
    repository,
    authorization
})

const store = configureStore({
    reducer: rootReducer
})

export default store