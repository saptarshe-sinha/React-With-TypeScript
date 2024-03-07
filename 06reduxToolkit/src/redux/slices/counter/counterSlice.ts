import { createSlice } from '@reduxjs/toolkit'

// export interface CounterState {
//     value: number,
// }
// 
// const initialState: CounterState = {
//     value: 0,
// }

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
    }
})

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;