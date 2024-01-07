import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import mailSlice from "../reducers/mailreducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const token=localStorage.getItem("token")
const persistConfig = {
    key: 'root',
    storage,
  };
const initialState={isLoggedin:!!token}
console.log(initialState.isLoggedin)
const authSlice=createSlice({
    name:"authentication",
    initialState: initialState,
    reducers:{
        Login(state){
            state.isLoggedin=true;

        },
        Logout(state){
            state.isLoggedin=false
        }
    }
})
const rootReducer=combineReducers({
    authReducer:authSlice.reducer,
    mailReducer:mailSlice.reducer
})
const finalReducer=(state,action)=>{
    return rootReducer(state,action)
}
export const authActions=authSlice.actions;
const persistedReducer = persistReducer(persistConfig,finalReducer);
const Store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Ignore check for non-serializable values
    }),
})

export default Store;
export const persistor = persistStore(Store);