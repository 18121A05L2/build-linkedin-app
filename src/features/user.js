import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    name:null,
    photo:null,
    email:null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.photo = action.payload.photo;
            state.email = action.payload.email;
            
            },
        setSignoutStatus: (state) => {
            state.photo = null;
            state.name = null;
            state.email = null;
        },
    }
})

export default userSlice.reducer;
export const {setUserLoginDetails, setSignoutStatus} = userSlice.actions;

