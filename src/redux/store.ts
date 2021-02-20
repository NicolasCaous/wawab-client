import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import counterReducer from "./counterSlice";
import socketSlice from "./socketSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    counter: counterReducer,
    socket: socketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
