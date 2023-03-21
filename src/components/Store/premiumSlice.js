import { createSlice } from "@reduxjs/toolkit";

const initialpremiumState = {
   showDarkTheme : false
}

const premiumSlice = createSlice({
    name : 'darktheme',
    initialState : initialpremiumState,
    reducers : {
        toggleDarkMode : (state) =>  {
             state.showDarkTheme = !state.showDarkTheme
        },
       
    }
})


export const premiumActions = premiumSlice.actions

export default premiumSlice.reducer

