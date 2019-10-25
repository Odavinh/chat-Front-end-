import {combineReducers} from "redux";
import {logIn} from "./auth";
import {dialog} from "./dialog";

const rootReducers = combineReducers({logIn, dialog});

export default rootReducers;
