import {createSlice} from '@reduxjs/toolkit';
interface AuthState {
  users: [];
  loading: boolean;
  error: boolean;
}

export const initialState: AuthState = {
  users: [],
  loading: false,
  error: false,
};

const AuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload;
      state.loading = true;
      state.error = false;
    },
    getUserFailed: state => {
      state.users = [];
      state.loading = false;
      state.error = true;
    },
  },
});

export const {getUser, getUserFailed} = AuthSlice.actions;

export default AuthSlice.reducer;
