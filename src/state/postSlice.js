import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await fetch("http://localhost:5005/posts");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const detailPost = createAsyncThunk(
  "posts/detailPost",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await fetch(`http://localhost:5005/posts/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      await fetch(`http://localhost:5005/posts/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertPost = createAsyncThunk(
  "posts/insertPost",
  async (element, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState();
    element.creator = auth.creator;
    element.id = JSON.stringify(element.id);
    try {
      const response = await fetch("http://localhost:5005/posts", {
        method: "POST",
        body: JSON.stringify(element),
        headers: {
          "Content-Type": "application/json; charset= UTF-8",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async (element, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        `http://localhost:5005/posts/${element.id}`,
        {
          method: "PATCH",
          body: JSON.stringify(element),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: { records: [], loading: false, error: null, record: null },
  reducers: {
    cleanRecord: (state) => {
      state.record = null;
    },
  },
  extraReducers: {
    // get Posts
    [getPosts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.records = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // delete Post
    [deletePost.pending]: (state) => {
      state.loading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.records = state.records.filter(
        (record) => record.id !== action.payload
      );
    },
    [deletePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // insert Post
    [insertPost.pending]: (state) => {
      state.loading = true;
    },
    [insertPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.records.push(action.payload);
    },
    [insertPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // detail Post
    [detailPost.pending]: (state) => {
      state.loading = true;
    },
    [detailPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.record = action.payload;
    },
    [detailPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //edit Post
    [editPost.pending]: (state) => {
      state.loading = true;
    },
    [editPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.record = action.payload;
    },
    [editPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { cleanRecord } = postSlice.actions;
export default postSlice.reducer;
