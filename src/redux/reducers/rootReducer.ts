import { combineReducers } from "redux";
import { photoReducer } from "./photoReducer";

export const rootReducer = combineReducers({
  photos: photoReducer
})