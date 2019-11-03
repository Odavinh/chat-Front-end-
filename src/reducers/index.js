import {combineReducers} from "redux";
import {auth} from "./auth";
import {dialog} from "./dialog";
import {authData} from "./userData";
import {user} from "./user";
import {message} from "./message";

const rootReducers = combineReducers({auth, message, dialog, authData, user});

export default rootReducers;
