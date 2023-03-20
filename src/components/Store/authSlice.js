import { createSlice } from "@reduxjs/toolkit";


const initialAuthState = {
    isLoggedIn : false,
   token : localStorage.getItem('token'),
    email: "",
    
}

const authSlice = createSlice({
    name : 'authentication',
    initialState : initialAuthState,
    reducers : {
        login(state, action){
            state.isLoggedIn = true;
            localStorage.setItem('token' , action.payload)
            
            state.token = action.payload
        },
        
        logout(state){
            state.isLoggedIn= false
            localStorage.removeItem('token')

        }
    }
})

export const authAction = authSlice.actions;
export default authSlice.reducer;