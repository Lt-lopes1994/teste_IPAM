/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const infoFetch = createAsyncThunk('cidades/infoFetch', async (id) => {
  try {
    const response = await api.get(`municipios/${id}/distritos?orderBy=nome`);
    if (response.status === 200) {
      const data = await response.data[0];
      return data;
    }
  } catch (error) {
    console.log(error);
  }
});

export const infoSlice = createSlice({
  name: 'info',
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(infoFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(infoFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
    builder.addCase(infoFetch.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.info = action.payload;
    });
  }
});

export default infoSlice.reducer;
