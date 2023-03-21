import { createSlice } from "@reduxjs/toolkit"

const initialbuttonState = {
    showFeature:false
}

const activeFeatureslice = createSlice({
    name:'activePremium',
    initialState:initialbuttonState,
    reducers:{
        ShowActiveFeature(state){
            state.showFeature = !state.showFeature
        }
    }
})

export const featureAction = activeFeatureslice.actions
export default activeFeatureslice.reducer