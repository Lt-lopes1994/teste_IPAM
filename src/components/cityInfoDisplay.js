import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function CityInfoDisplay() {
  const { status } = useSelector((state) => state.info);
  const { info } = useSelector((state) => state.info);
  const [selectedCity, setSelectedCity] = useState();

  useEffect(() => {
    if (status === 'fulfilled') {
      setSelectedCity({
        Município: {
          Id: info.id,
          Nome: `Município: ${info.nome}`,
          'Informações adicionais': {
            Infos: `Região imediata: ${info.municipio['regiao-imediata'].nome}`,
            Obs: `UF da região imediata: ${info.municipio['regiao-imediata']['regiao-intermediaria'].UF.nome} (${info.municipio['regiao-imediata']['regiao-intermediaria'].UF.sigla})`
          }
        },
        'Micro e Meso regiões': {
          Id: info.municipio.microregiao.id,
          Nome: `Região: ${info.municipio['regiao-imediata']['regiao-intermediaria'].UF.regiao.nome}`,
          'Informações adicionais': {
            info1: `Microrregião: ${info.municipio.microrregiao.nome}`,
            info2: `Mesorregião: ${info.municipio.microrregiao.mesorregiao.nome}`
          }
        }
      });
    } else {
      setSelectedCity({});
    }
  }, [status, info]);

  return (
    <>
      {status === 'fulfilled' && (
        <div className="city-info-display">
          <h2>Informações sobre a cidade selecionada</h2>
          <div className="city-info-display__content">
            {Object.keys(selectedCity).map((key) => (
              <div key={key} className="city-info-display__content__item">
                <h3>{key}</h3>
                <div className="city-info-display__content__item__info">
                  {Object.keys(selectedCity[key]).map((key2) => (
                    <div key={key2} className="city-info-display__content__item__info__item">
                      <h4>{selectedCity[key][key2]}</h4>
                      {Object.keys(selectedCity[key][key2]).map((key3) => (
                        <div
                          key={key3}
                          className="city-info-display__content__item__info__item__info">
                          <h5>{selectedCity[key][key2][key3]}</h5>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
