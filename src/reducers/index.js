import {combineReducers} from "redux";
import {auth} from "./auth";
import {dialog} from "./dialog";
import {authData} from "./userData";

const rootReducers = combineReducers({auth, dialog, authData});

export default rootReducers;
