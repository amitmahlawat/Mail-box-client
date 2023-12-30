import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState={
    sentMail:[],
    inboxMail:[]
}
const mailSlice= createSlice({
    name:"mailReducer",
    initialState: initialState,
    reducers:{
        
        SentMail(state,action){
            console.log(action,"amit")
            state.sentMail=action.payload
        },
        InboxMail(state,action){
            
            state.inboxMail=action.payload.data.filter((i)=>{
                if (action.payload.useremail==i.to){
                    return i
                }
            })      
        }
    }
})
export const mailActions=mailSlice.actions;
export default mailSlice;