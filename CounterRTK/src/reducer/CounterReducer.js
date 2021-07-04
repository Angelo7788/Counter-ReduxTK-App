import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const delayIncrement = createAsyncThunk(
    'count/delayIncrement',  // name of the slice + const
    async (_, thunkAPI) => {
        setTimeout(() => { thunkAPI.dispatch(increment())},1000);
    }
);

// thunk action to call increment with a delay, pending + fulfilled ok, but we do not need to use in this case

export const thunkIncrementAmount = createAsyncThunk(
    'count/thunkIncrementAmount',  // name of the slice + const
    async (value, thunkAPI) => {
        (value === 5) ? thunkAPI.dispatch(increment()) : thunkAPI.dispatch(console.log('not 5'))
    }
);

// thunk action to call a dispatch if .....  pending + fulfilled ok when the cond is true, not used for this case

export const thunkIncrementIfCount0 = createAsyncThunk(
    'count/thunkIncrementIfCount0',  // name of the slice + const
    async (value, thunkAPI) => {

        const { counter } = thunkAPI.getState();    // getState() took all the state , all reducers
        console.log(counter);   // {"count": 0}
        const allState = thunkAPI.getState();
        console.log(allState);   //  {"counter": {"count": 0}, "posts": {"list": [[Object]], "status": "success"}}

        (counter.count === 0) ? thunkAPI.dispatch(increment()) : thunkAPI.dispatch(console.log(value))
    }
);

// thunk action with check on the state, fulfulled when check is ok






export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload.value1 -= action.payload.value2;
        }
    },
    extraReducers: {
        // [thunkIncrementIfCount0.pending]: (dispatch) => {
        //     console.log('pending');
        // },
        // [thunkIncrementIfCount0.fulfilled]: () => {
        //     console.log('fulfilled');
        // },
    }
});


export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
