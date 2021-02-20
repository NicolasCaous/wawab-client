import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum SocketStatus {
  WAITING_TO_CONNECT = "WAITING_TO_CONNECT",
  CONNECTING = "CONNECTING",
  IDLE = "IDLE",
  BUSY = "BUSY",
  FAILED_TO_CONNECT = "FAILED_TO_CONNECT",
  CONCURRENT_LIMIT_REACHED = "CONCURRENT_LIMIT_REACHED",
}

interface SocketState {
  status: SocketStatus;
}

const initialState: SocketState = {
  status: SocketStatus.WAITING_TO_CONNECT,
};

export const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    connect: (state) => {
      if (state.status === SocketStatus.WAITING_TO_CONNECT)
        state.status = SocketStatus.CONNECTING;
      else if (state.status === SocketStatus.CONNECTING)
        state.status = SocketStatus.IDLE;
      else if (state.status === SocketStatus.IDLE)
        state.status = SocketStatus.BUSY;
      else if (state.status === SocketStatus.BUSY)
        state.status = SocketStatus.CONCURRENT_LIMIT_REACHED;
      else if (state.status === SocketStatus.CONCURRENT_LIMIT_REACHED)
        state.status = SocketStatus.FAILED_TO_CONNECT;
      else if (state.status === SocketStatus.FAILED_TO_CONNECT)
        state.status = SocketStatus.WAITING_TO_CONNECT;
    },
  },
});

export const { connect } = socketSlice.actions;

export const selectSocketStatus = (state: RootState) => state.socket.status;

export default socketSlice.reducer;
