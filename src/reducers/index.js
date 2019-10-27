import {combineReducers} from "redux";
import {auth} from "./auth";
import {dialog} from "./dialog";

const rootReducers = combineReducers({auth, dialog});

export default rootReducers;
