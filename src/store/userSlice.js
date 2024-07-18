import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants";

const initialState = {
  user: null,
  users: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const login = createAsyncThunk(
  "users/login",
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { access_token } = response.data;
      localStorage.setItem("access_token", access_token);
      dispatch(userSlice.actions.clearStatus());
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const createUser = createAsyncThunk(
  "users/createUser",
  async (newUser, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/users/`, {
        headers: {
          "Content-Type": "application/json",
        },
        data: newUser,
      });
      dispatch(userSlice.actions.clearStatus());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (userId) => {
    const response = await axios.get(`${API_URL}/auth/users/${userId}`);
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    await axios.delete(`${API_URL}/auth/users/${userId}`);
    return userId;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearStatus: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUserById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
