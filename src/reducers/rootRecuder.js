import { combineReducers  } from "redux-immutable";
import dataReducer  from "../slices/dateSlice";
import uiReducer  from "../slices/uiSlice";

const rootReducer = combineReducers({
    data: dataReducer,
    ui: uiReducer
});

export default rootReducer;