import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface AuthState {
  authenticated: boolean;
  access_token?: string;
  email?: string;
  expires_at?: number;
  id_token?: string;
  scope?: string;
  token_type?: string;
}

interface SigninAction {
  access_token: string;
  email: string;
  expires_in: number;
  id_token: string;
  scope: string;
  token_type: string;
}

const isExpired = (expires_at: number) => expires_at < new Date().getTime();
//const isExpired = (expires_at: number) => false;

const initialState: AuthState = {
  authenticated: false,
  //authenticated: true,
};

let cached_access_token = localStorage.getItem("auth_access_token");
let cached_email = localStorage.getItem("auth_email");
let cached_expires_at: string | number | null = localStorage.getItem(
  "auth_expires_at"
);
let cached_id_token = localStorage.getItem("auth_id_token");
let cached_scope = localStorage.getItem("auth_scope");
let cached_token_type = localStorage.getItem("auth_token_type");

if (cached_expires_at !== null) {
  cached_expires_at = parseInt(cached_expires_at!);
  if (!isExpired(cached_expires_at)) {
    initialState.authenticated = true;
    initialState.access_token = cached_access_token!;
    initialState.email = cached_email!;
    initialState.expires_at = cached_expires_at;
    initialState.id_token = cached_id_token!;
    initialState.scope = cached_scope!;
    initialState.token_type = cached_token_type!;
  }
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin: (state, action: PayloadAction<SigninAction>) => {
      state.authenticated = true;
      state.access_token = action.payload.access_token;
      state.email = action.payload.email;
      state.expires_at =
        new Date().getTime() + action.payload.expires_in * 1000;
      state.id_token = action.payload.id_token;
      state.scope = action.payload.scope;
      state.token_type = action.payload.token_type;
      localStorage.setItem("auth_access_token", state.access_token);
      localStorage.setItem("auth_email", state.email);
      localStorage.setItem("auth_expires_at", state.expires_at.toString());
      localStorage.setItem("auth_id_token", state.id_token);
      localStorage.setItem("auth_scope", state.scope);
      localStorage.setItem("auth_token_type", state.token_type);
    },
    signoutIfExpired: (state) => {
      if (state.authenticated) {
        if (isExpired(state.expires_at!)) {
          state.authenticated = false;
          delete state.access_token;
        }
      }
    },
    signout: (state) => {
      if (state.authenticated) {
        state.authenticated = false;
        delete state.access_token;
      }
    },
  },
});

export const { signin, signoutIfExpired, signout } = authSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// import { AppThunk } from "./store";
/*export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};*/

export const selectAccessToken = (state: RootState) => state.auth.access_token;
export const selectAuthenticated = (state: RootState) =>
  state.auth.authenticated;

export default authSlice.reducer;
