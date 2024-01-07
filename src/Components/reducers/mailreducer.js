import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState={
    sentMail:[],
    inboxMail:[],
    selectedMail:null
}
const mailSlice= createSlice({
    name:"mailReducer",
    initialState: initialState,
    reducers:{
        
        SentMail(state,action){
            console.log(action,"amit")
            // deletelist.includes(i.id)
            state.sentMail=action.payload.data.filter((i)=>{
                if(Object.keys(i).includes("from") && action.payload.useremail==i?.from){
                    return i
                }
            })
        },
        InboxMail(state,action){
            
            state.inboxMail=action.payload.data.filter((i)=>{
                if (action.payload.useremail==i.to){
                    return i
                }
            })      
        },
        selectMail(state,action){
            state.selectedMail=action.payload
        }
    }
})
export const mailActions=mailSlice.actions;
export default mailSlice;