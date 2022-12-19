import { configureStore } from '@reduxjs/toolkit';
import CityInfoReducer from '../features/slices/cityInfoSlice';
import cityReducer from '../features/slices/citySlice';
import ufReducer, { estadosFetch } from '../features/slices/ufSlice';

export const store = configureStore({
  reducer: {
    estados: ufReducer,
    cidades: cityReducer,
    info: CityInfoReducer
  }
});

store.dispatch(estadosFetch());
