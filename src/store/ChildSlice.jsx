import React from 'react';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = [];

const ChildSlice = createSlice({
    name: 'Child',
    initialState,
    reducers: {
        add(state, action) {
            ///Redux:
            state.push(action.payload);
        },
       
    }
});

export const { add } = ChildSlice.actions;
export default ChildSlice.reducer;
