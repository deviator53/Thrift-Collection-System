import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface User {
  info: {
    email: string;
    password: string;
  };
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  status: 'idle',
  error: null,
};

export const loginUser = createAsyncThunk<User, { email: string; password: string }>(
  'auth/loginUser',
  async (credentials, { dispatch, getState }) => {
    const { users } = getState() as { users: { data: User[] } };
    const user = users.data.find(
      (u) => u.info.email === credentials.email && u.info.password === credentials.password
    );

    if (user) {
      dispatch(login(user));
      return user;
    } else {
      throw new Error('Invalid email or password');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error?.message || 'An error occurred';
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
