import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "features/filter/filter-slice";
import { positionReducer } from "features/positions/position-slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from 'redux'

const persistConfig = {
    key: 'root', 
    storage
}

const rootReducer = combineReducers({
        filters: filterReducer,
        positions: positionReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
});
export const persistor = persistStore(store)
