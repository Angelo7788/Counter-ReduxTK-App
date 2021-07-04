import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './CounterReducer';
import postListReducer from './postListReducer';

export default configureStore({
    reducer: {
        counter: CounterReducer,
        posts: postListReducer,
    }
});

