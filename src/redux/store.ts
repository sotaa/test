import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import reducers from "./reducers";

export const store: any = createStore(reducers, {}, applyMiddleware(thunk));

export const persistor = persistStore(store);
