// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import { useState, useEffect } from 'react';
import { cityInfoFetch } from '../features/slices/cityInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CitySelector() {
  const dispatch = useDispatch();
  const { cidades } = useSelector((state) => state.cidades);
  const { status } = useSelector((state) => state.cidades);
  const [selectedCity, setSelectedCity] = useState();

  useEffect(() => {
    if (status !== 'fulfilled') setSelectedCity({});
  }, [status]);

  function handleCityChange(e) {
    const selectedCity = cidades.find((city) => city.nome === e.target.value);
    setSelectedCity(selectedCity);
    dispatch(cityInfoFetch(selectedCity.id));
  }

  return (
    <Box sx={{ minWidth: 300, background: '#fff', fontSize: 20 }}>
      <FormControl fullWidth>
        <InputLabel sx={{fontSize: 12}} id="demo-simple-select-label">Selecione uma cidade:</InputLabel>
        <Select
          sx={{fontSize: 15, color: '#000'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCity ? selectedCity.nome : ''}
          label="Selecione uma cidade:"
          onChange={handleCityChange}>
          {cidades.map((city) => (
            <MenuItem key={city.id} value={city.nome} sx={{fontSize: 15}}>
              {city.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
