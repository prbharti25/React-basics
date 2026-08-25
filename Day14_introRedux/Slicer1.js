import { createSlice } from "@reduxjs/toolkit";

// createSlice returns an object
// initialState is passed to the state (as latest object)
const reactslicer = createSlice({
    name: "slice1",
    initialState: {count:0},
    reducers: {
        Increment: (state)=> {state.count = state.count+1},
        Decrement: (state)=> {state.count = state.count-1},
        Reset: (state) => {state.count=0}
    }
})

// reactslicer.actions give super power to the functions Increment, Decrement and Reset that have info about slice_name/function()
export const {Increment, Decrement, Reset} = reactslicer.actions

export default reactslicer.reducer;
 
