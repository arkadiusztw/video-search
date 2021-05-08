import { combineReducers } from "redux";
import { dataReducer } from "./reducers/videoReducer";

export const rootReducer = combineReducers({
  data: dataReducer,
});
