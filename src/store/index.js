import {composeWithDevTools} from "redux-devtools-extension";
import {reducer} from "./reducers";
import {createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const composeEnhancers = composeWithDevTools({trace: true});

const persistConfig = {
  key: 'root',
  storage: storage,
};

const pReducer = persistReducer(persistConfig, reducer);

export const store = createStore(pReducer, composeEnhancers());
export const persistor = persistStore(store);