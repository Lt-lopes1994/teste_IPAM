/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const cidadesFetch = createAsyncThunk('cidades/cidadesFetch', async (sigla) => {
  try {
    const response = await api.get(`estados/${sigla}/municipios/?orderBy=name`);
    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
});

export const citySlice = createSlice({
  name: 'cidades',
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(cidadesFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(cidadesFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
    builder.addCase(cidadesFetch.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.cidades = action.payload;
    });
  }
});

export default citySlice.reducer;
