import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userState {
  username: string;
  email: string;
  uid: string;
}

const initialState: userState = {
  username: '',
  email: '',
  uid: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initializeUser: () => {},
    logIn: (
      state,
      action: PayloadAction<{ username: string; email: string; uid: string }>
    ) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
    logOut: () => {},
  },
});

export const { initializeUser, logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
