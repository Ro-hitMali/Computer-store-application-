import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../src/features/data/dataSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
