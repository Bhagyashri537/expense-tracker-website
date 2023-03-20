import { createSlice } from "@reduxjs/toolkit";

// const initialExpenseState = {
//     expenses : [],
//     totalAmount : 0
// }
// const expenseSlice = createSlice({
//     name : 'expense',
//     initialState : initialExpenseState,
//     reducers :{
//         replaceExpenses(state,action)
//         {
//             state.expenses = action.payload.expenses;
//             state.totalAmount = Number(action.payload.totalAmount)
//         },
//         addExpense(state,action)
//         {
//             state.expenses=[...state.expenses,action.payload.expenses];
//             state.totalAmount = Number(state.totalAmount) + Number (action.payload.totalAmount)
//         },
//         removeExpense(state,action)
//         {
//             state.expenses = action.payload.expenses
//             state.totalAmount = state.payload.totalAmount
//         }
//     }
// })

// export const expenseAction = expenseSlice.actions

// export default expenseSlice.reducer


const initialExpenseState = {
    expenses : [],
    totalAmount : 0
}

const expenseSlice = createSlice({
    name : 'expense',
    initialState: initialExpenseState,
    reducers : {
        addExpenses (state, action) {
            
          state.expenses = action.payload;
          //state.expense = [...state.expense]
        // ...state,
          //state.expense = [...state.expense , action.payload.expenses]
         state.totalAmount = action.payload
        }
    }


})
    
export const expenseAction = expenseSlice.actions

export default expenseSlice.reducer