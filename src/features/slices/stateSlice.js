/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const estadosFetch = createAsyncThunk('estados/estadosFetch', async () => {
  try {
    const response = await api.get('estados/?orderBy=nome');
    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
});

export const estadosSlice = createSlice({
  name: 'estados',
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(estadosFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(estadosFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
    builder.addCase(estadosFetch.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.estados = action.payload;
    });
  }
});

export default estadosSlice.reducer;
