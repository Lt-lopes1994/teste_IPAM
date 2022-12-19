import * as React from 'react';
import { useState, useEffect } from 'react';
import { cityInfoFetch } from '../features/slices/cityInfoSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function CitySelector() {
  const dispatch = useDispatch();
  const { cidades } = useSelector((state) => state.cidades);
  const { status } = useSelector((state) => state.cidades);
  const [selectedCity, setSelectedCity] = useState();

  useEffect(() => {
    if (status !== 'fulfilled') setSelectedCity({});
  }, [status]);

  //TODO: Refactor this function look at the code below. See the return in the console.log
  function handleCityChange(e) {
    const selectedCity = cidades.find((city) => city.nome === e.target.value);
    setSelectedCity(selectedCity);
    console.log(selectedCity);
    dispatch(cityInfoFetch(selectedCity.id));
  }

  return (
    <>
      <select onChange={handleCityChange}>
        <option value="">Selecione uma cidade</option>
        {cidades.map((city) => (
          <option key={city.id} value={city.nome}>
            {city.nome}
          </option>
        ))}
      </select>
    </>
  );
}
