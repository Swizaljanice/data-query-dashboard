import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QueryState {
  history: string[];
  currentQuery: string;
  loading: boolean;
  error: string | null;
  resultData: any[];
}

const initialState: QueryState = {
  history: [],
  currentQuery: "",
  loading: false,
  error: null,
  resultData: [],
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    submitQuery(state, action: PayloadAction<string>) {
      state.currentQuery = action.payload;
      state.history.unshift(action.payload);
      state.loading = true;
      state.error = null;
    },
    querySuccess(state, action: PayloadAction<any[]>) {
      state.resultData = action.payload;
      state.loading = false;
    },
    queryFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { submitQuery, querySuccess, queryFailure } = querySlice.actions;
export default querySlice.reducer;
