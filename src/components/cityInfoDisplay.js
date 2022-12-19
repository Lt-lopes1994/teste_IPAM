import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/cityInfoDisplayStyles.css';

export default function CityInfoDisplay() {
  const { status } = useSelector((state) => state.info);
  const { info } = useSelector((state) => state.info);
  const [selectedCity, setSelectedCity] = useState();
  const cityInfo = info[0];

  useEffect(() => {
    if (status === 'fulfilled') {
      setSelectedCity({
        Município: {
          id: cityInfo.id,
          nome: `Município: ${cityInfo.nome}`,
          info1: `Região imediata: ${cityInfo.municipio['regiao-imediata'].nome}`,
          info2: `UF: ${cityInfo.municipio['regiao-imediata']['regiao-intermediaria'].UF.nome} (${cityInfo.municipio['regiao-imediata']['regiao-intermediaria'].UF.sigla})`
        },
        'Micro e Mesorregiões': {
          id: cityInfo.municipio.microrregiao.id,
          nome: `Região: ${cityInfo.municipio['regiao-imediata']['regiao-intermediaria'].UF.regiao.nome}`,
          info1: `Microrregião: ${cityInfo.municipio.microrregiao.nome}`,
          info2: `Mesorregião: ${cityInfo.municipio.microrregiao.mesorregiao.nome}`
        }
      });
    } else setSelectedCity({});
  }, [status, info]);

  return (
    <>
      {info && status === 'fulfilled' && (
        <div className="cityInfoDisplay">
          <h2>Informações sobre a cidade selecionada</h2>
          <div className="cityInfoContainer">
            {Object.keys(selectedCity).map((city) => (
              <div key={selectedCity[city].id} className="cityInfo">
                <h3>{city}</h3>
                <p>{selectedCity[city].nome}</p>
                <p>{selectedCity[city].info1}</p>
                <p>{selectedCity[city].info2}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
