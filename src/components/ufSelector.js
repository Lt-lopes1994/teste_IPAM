/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { estadosFetch } from '../features/slices/ufSlice';
import { cidadesFetch } from '../features/slices/citySlice';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function UfSelector() {
  const dispatch = useDispatch();
  const { estados } = useSelector((state) => state.estados);
  const [selected, setSelected] = useState();

  useEffect(() => {
    dispatch(estadosFetch);
  }, [dispatch]);

  function handleSelectedUf(e) {
    const selectedUf = e;
    setSelected(e);
    dispatch(cidadesFetch(selectedUf));
  }

  return (
    <Box sx={{ minWidth: 300, marginBottom: 2, background: '#fff'}}>
      <FormControl fullWidth>
        <InputLabel sx={{fontSize: 15}} id="demo-simple-select-label">UF</InputLabel>
        <Select
          sx={{fontSize: 15}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label="UF"
          onChange={(e) => handleSelectedUf(e.target.value)}
        >
          {
            estados.map((estado) => (
              <MenuItem sx={{fontSize: 15}} key={estado.sigla} value={estado.sigla}>
                {estado.nome}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );

  // return (
  //   <>
  //     <select className='ufSelector' onChange={(e) => handleSelectedUf(e.target.value)}>
  //       <option value=''>Selecione um estado</option>
  //       {estados.map((estado) => (
  //         <option key={estado.sigla} value={estado.sigla}>
  //           {estado.nome}
  //         </option>
  //       ))}
  //     </select>
  //   </>
  // );
}

