import React from 'react';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = [];

const GrandparentSlice = createSlice({
    name: 'GrandParent',
    initialState,
    reducers: {
        add(state, action) {
            ///Redux:
            state.push(action.payload);
        },
       
    }
});

export const { add } = GrandparentSlice.actions;
export default GrandparentSlice.reducer;
