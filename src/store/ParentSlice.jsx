import React from 'react';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = [];

const ParentSlice = createSlice({
    name: 'Parent',
    initialState,
    reducers: {
        add(state, action) {
            ///Redux:
            state.push(action.payload);
        }
    }
});

export const { add } = ParentSlice.actions;
export default ParentSlice.reducer;
