import { configureStore } from '@reduxjs/toolkit';
import Parent from './ParentSlice';
import Child from './ChildSlice';
import Grandparent from './GrandparentSlice';

const store = configureStore({
    reducer: {
        parent: Parent,
        child: Child,
        grandparent: Grandparent
    }
});

export default store;
