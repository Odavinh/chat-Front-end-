import {combineReducers} from "redux";
import {auth} from "./auth";
import {dialog} from "./dialog";
import {authData} from "./userData";
import {user} from "./user";

const rootReducers = combineReducers({auth, dialog, authData, user});

export default rootReducers;
