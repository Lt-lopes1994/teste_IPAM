import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
  cidades: [],
  status: 'idle'
};

export const cidadesFetch = createAsyncThunk('cidades/cidadesfetch', async (uf) => {
  try {
    const response = await api.get(`/estados/${uf}/municipios`);
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
});

export const cidadesSlice = createSlice({
  name: 'cidades',
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(cidadesFetch.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(cidadesFetch.rejected, (state) => {
      state.status = 'rejected';
    });
    builder.addCase(cidadesFetch.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.cidades = action.payload;
    });
  }
});

export default cidadesSlice.reducer;
