import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
  info: {},
  status: ''
};

export const cityInfoFetch = createAsyncThunk('cityInfo/cityInfoFetch', async (id) => {
  const reponse = await api.get(`municipios/${id}/distritos?orderBy=nome`);
  return reponse.data;
});

const cityInfoSlice = createSlice({
  name: 'cityInfo',
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(cityInfoFetch.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(cityInfoFetch.rejected, (state) => {
      state.status = 'rejected';
    });
    builder.addCase(cityInfoFetch.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.info = action.payload;
    });
  }
});

export default cityInfoSlice.reducer;
