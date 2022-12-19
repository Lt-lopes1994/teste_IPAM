import React from 'react';
import Logo from '../assets/logoIpam.png';
import '../styles/headerStyle.css';

export default function Header() {
  return (
    <header>
      <div className='containerImg'>
        <a href='https://www.ipam.org.br/' target='_blank' rel='noreferrer'>
          <img src={Logo} alt='Logo do IPAM' />
        </a>
      </div>
      <div className='projectName'>
        <h1>IPAM - Instituto de Pesquisa Ambiental da Amazônia</h1>
      </div>
      <div className='links'>
        <a href='https://www.ipam.org.br/' target='_blank' rel='noreferrer'>
          <p>Site do IPAM</p>
        </a>
        <a href='https://www.ipam.org.br/pt-br/contato' target='_blank' rel='noreferrer'>
          <p>Contato</p>
        </a>
      </div>
    </header>
  );
}
