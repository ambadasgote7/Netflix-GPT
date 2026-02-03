import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false
    },
    reducers : {
        toggleGptSearchView : (state, action) => {
            state.showGptSearch = !state.showGptSearch
        }
    }
})

export const { toggleGptSearchView} = gptSlice.actions;
export default gptSlice.reducer;