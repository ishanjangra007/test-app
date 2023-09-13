import {combineReducers, createStore} from "redux";
import userReducer from "../reducer/userReducer";
import studentReducer from "../reducer/studentReducer";
 
const rootReducer=combineReducers({
    user:userReducer,
    student:studentReducer,
})

const store=(createStore(rootReducer));

export default store;