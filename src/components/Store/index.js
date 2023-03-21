import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import expenseSlice from "./expenseSlice";
import featureSlice from "./featureSlice";
import premiumSlice from "./premiumSlice";

const store = configureStore({
    reducer : {
        expense : expenseSlice,
        auth: authSlice,
        premium : premiumSlice,
        feature : featureSlice
    }
})
export default store;