import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { action } from "commander";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { increment } from "./CounterReducer";


// create the thunk
export const getPostsFromJsonServer = createAsyncThunk(
    'posts/getPostsFromJsonServer',  // name of the slice + const
    async ({limit}) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
        .then((result) => result.json())

    }
);

// ?_limit=${limit}  added to the end of the url to limit the fetch to the limit value

// thunk dispatch auto 2 action: pending and fulfilled

export const getOnePostsFromJson = createAsyncThunk(
    'posts/getOnePostsFromJson',  // name of the slice + const
    async (id) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
        .then((result) => result.json())
    }
);



const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [],
        status: null, // to check the status of the fetch action
        listForId: [],
        statusForId: null,
    },
    extraReducers: {
        [getPostsFromJsonServer.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getPostsFromJsonServer.fulfilled]: (state, {payload}) => {
            state.list = payload
            state.status = 'success'
            console.log('success')
        },
        [getPostsFromJsonServer.rejected]: (state, action) => {
            state.status = 'failed'
        },
        [getOnePostsFromJson.pending]: (state) => {
            state.statusForId = 'loading'
            console.log('loading')
        },
        [getOnePostsFromJson.fulfilled]: (state, {payload}) => {
            state.listForId = payload
            state.statusForId = 'success'
            console.log(state.listForId)
        },
        [getOnePostsFromJson.rejected]: (state) => {
            state.statusForId = 'failed'
            console.log(state.statusForId)
            Alert.alert('fetch fail')
        },
    },
});

export default postsSlice.reducer;
