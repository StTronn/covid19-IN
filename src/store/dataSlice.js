import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "data",
  initialState: {
    data: false,
    cacheDate: new Date(new Date().getDate() - 1).toString(),
    loading: false,
    error: false,
  },
  reducers: {
    setData: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //Object.keys(action.payload).forEach(e=>{state[e]=action.payload[e]});
      state.data = action.payload.data;
      state.cacheDate = action.payload.cacheDate;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setCache: (state) => {
      state.cacheDate = 1;
    },
  },
});

export const { getData, setData, setCache, setLoading,setError } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const fetchData = () => async (dispatch, getState) => {
  const { cacheDate } = getState();
  const today = new Date().toString();
  if (cacheDate !== today) {
    dispatch(setLoading(true));
    await fetch("https://api.covid19india.org/v4/data.json")
      .then((response) => {
        if (response.status >= 400 && response.status < 600) {
          dispatch(setError(false));
          dispatch(setLoading(false));
          return;
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setData({data,cacheDate:today}));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        // Your error is here!
        dispatch(setLoading(false));
        dispatch(setError(true));

      });
    // const res = await fetch("https://api.covid19india.org/data.json");
    // const data = await res.json();
    // const payload = { data, cacheDate: today };
    // dispatch(setData(payload));
    dispatch(setLoading(false));
  }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectData = (state) => state.data.data;
export const selectDataLoading = (state) => state.data.loading || false;
export const selectDataError = (state) => state.data.error || false;

export default slice.reducer;
