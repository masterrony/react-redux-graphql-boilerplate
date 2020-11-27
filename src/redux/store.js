import { createStore , applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from './reducers/root.reducer';



const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = process.env.NODE_ENV === 'development' 
                      ? createStore(persistedReducer, {}, applyMiddleware(thunk, createLogger()))
                      : createStore(persistedReducer, {}, applyMiddleware(thunk))

export const dispatch = store.dispatch

export const persistor = persistStore(store)