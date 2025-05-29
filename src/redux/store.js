import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import persistStore from "redux-persist/lib/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['items'],
};

const rootReducer = combineReducers({
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
    filters: filtersReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
export const persistor = persistStore(store);