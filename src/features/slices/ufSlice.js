import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
  estados: [],
  status: ''
};

export const estadosFetch = createAsyncThunk('estados/estadosfetch', async () => {
  const response = await api.get('/estados?orderBy=nome');
  return response.data;
});

export const estadosSlice = createSlice({
  name: 'estados',
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(estadosFetch.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(estadosFetch.rejected, (state) => {
      state.status = 'rejected';
    });
    builder.addCase(estadosFetch.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.estados = action.payload;
    });
  }
});

export default estadosSlice.reducer;
