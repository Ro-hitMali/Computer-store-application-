import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Data } from './types';

interface DataState {
  data: Data[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: DataState = {
  data: [],
  status: 'idle',
};

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch('/data.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json() as Promise<Data[]>;
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
        console.log('Fetched Data:', action.payload);
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectData = (state: RootState) => state.data.data;
export const selectStatus = (state: RootState) => state.data.status;

export default dataSlice.reducer;
