import { createSlice } from "@reduxjs/toolkit";

const initialpremiumState = {
   showDarkTheme : false
}

const premiumSlice = createSlice({
    name : 'premium_feature',
    initialState : initialpremiumState,
    reducers : {
        addPremiumFeature(state) {
             
        }
    }
})


export const premiumActions = premiumSlice.actions

export default premiumSlice.reducer
