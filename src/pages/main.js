/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useEffect, useState } from 'react';
import api from '../services/api';
import './styles.css';

function Main() {
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }
    api.get(`/estados/${selectedUf}/municipios`).then((response) => {
      setCities(response.data);
    });
  });

  useEffect(() => {
    api.get('/estados').then((response) => {
      setUfs(response.data);
    });
  }, [selectedUf]);

  useEffect(() => {
    if (selectedCity === '0') {
      return;
    }

    api.get(`/municipios/${selectedCity}`).then((response) => {
      console.log(response.data);
    });
  }, [selectedCity]);

  function handleSelectUf(event) {
    const uf = event.target.value;
    setSelectedUf(uf);
  }

  function handleSelectCity(event) {
    const city = event.target.value;
    setSelectedCity(city);
  }

  function handleCityID(event) {
    const cityID = event.target.value;
    console.log(cityID);
  }

  return (
    <div className="containerMain">
      <div className="title">
        <h1>Seletor de UF e Cidade</h1>
      </div>
      <div className="container">
        <select name="uf" id="uf" onChange={handleSelectUf}>
          <option value="0">Selecione uma UF</option>
          {ufs.map((uf) => (
            <option key={uf.id} value={uf.sigla}>
              {uf.nome}
            </option>
          ))}
        </select>

        <select name="City" id="City" value={selectedCity} onChange={handleSelectCity}>
          <option value="0">Selecione uma cidade</option>
          {cities.map((city) => (
            <option onClick={handleCityID} key={city.id} value={city.nome}>
              {city.nome}
              {console.log(city.id)}
            </option>
          ))}
        </select>
      </div>

      {selectedUf === '0' || selectedCity === '0' ? (
        <></>
      ) : (
        <div className="cityOverview">
          <h2>
            {selectedCity} - {selectedUf}
          </h2>

          <div className="cityInfo">
            <div className="cityInfoItem">
              <h3>População</h3>
              <p>1.000.000</p>
            </div>
            <div className="cityInfoItem">
              <h3>Área</h3>
              <p>1.000.000</p>
            </div>
            <div className="cityInfoItem">
              <h3>Distância da Capital</h3>
              <p>1.000.000</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
