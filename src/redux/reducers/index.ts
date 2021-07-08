import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import layoutReducer from "./layout";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["layout"],
};

const reducers = combineReducers({
  layout: layoutReducer,
});

export default persistReducer(persistConfig, reducers);
