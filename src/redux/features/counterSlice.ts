import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    counter:0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) => {
            state.counter = state.counter + 1
        },
        decrement: (state) => {
            state.counter = state.counter - 1
        },
        reset: (state) => {
            state.counter = 0
        }

    }
})

export const {increment,decrement,reset} = counterSlice.actions

export default counterSlice.reducer