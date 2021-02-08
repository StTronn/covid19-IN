import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "data",
  initialState: JSON.parse(localStorage.getItem("data")) || {
    data: false,
    cacheDate: new Date(new Date().getDate() - 1).toString(),
    loading: false,
    error: false,
  },
  reducers: {
    setData: (state, action) => {
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

export const {
  getData,
  setData,
  setCache,
  setLoading,
  setError,
} = slice.actions;

export const fetchData = () => async (dispatch, getState) => {
  const { data } = getState();
  if (!lessThanOneHour(data.cacheDate)) {
    console.log("fetching");
    const today = new Date().toString();
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
        const loadData = { data, cacheDate: today };
        localStorage.setItem("data", JSON.stringify(loadData));
        dispatch(setData(loadData));

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

const lessThanOneHour = (date) => {
  const dateObj = Date.parse(date);
  const hour = 1000 * 60 * 60;
  const hourago = Date.now() - hour;

  return dateObj > hourago;
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCovidData = (state) => state.data.covidData;
export const selectDataLoading = (state) => state.data.loading || false;
export const selectDataError = (state) => state.data.error || false;
export const selectDataStore = (state) => state.data;

export default slice.reducer;
