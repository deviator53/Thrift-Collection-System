import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await fetch("https://thrift-collection-system-server.vercel.app/users");
  const data = await response.json();
  return data;
});

const userSlice = createSlice({
	name: "user",
	initialState: {
    user: [],
    loggedInUser: null,
    status: "pending",
  },
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
		clearUser: (state) => {
      state.loggedInUser = null;
      localStorage.removeItem("user");
    },
	},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { setUser, setLoggedInUser, clearUser } = userSlice.actions;

export default userSlice.reducer;


