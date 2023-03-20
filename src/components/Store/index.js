import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import expenseSlice from "./expenseSlice";

const store = configureStore({
    reducer : {
        expense : expenseSlice,
        auth: authSlice
    }
})
export default store;