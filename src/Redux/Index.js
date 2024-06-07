import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../Slice/UserSlice"; 

const rootReducer = combineReducers({
        user: userReducer,
});
export default rootReducer;
