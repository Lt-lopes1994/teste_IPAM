import * as React from 'react';
import { useState, useEffect } from 'react';
import { estadosFetch } from '../features/slices/ufSlice';
import { cidadesFetch } from '../features/slices/citySlice';
import { useDispatch, useSelector } from 'react-redux';

export default function UfSelector() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { estados } = useSelector((state) => state.estados);
  // eslint-disable-next-line no-unused-vars
  const [selected, setSelected] = useState();

  useEffect(() => {
    dispatch(estadosFetch);
  }, [dispatch]);

  function handleSelectedUf(e) {
    const selectedUf = e;
    console.log(selectedUf);
    setSelected(e);
    dispatch(cidadesFetch(selectedUf));
  }

  return (
    <>
      <select onChange={(e) => handleSelectedUf(e.target.value)}>
        <option value="">Selecione um estado</option>
        {estados.map((estado) => (
          <option key={estado.sigla} value={estado.sigla}>
            {estado.nome}
          </option>
        ))}
      </select>
    </>
  );
}
