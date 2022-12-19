import React from 'react';
import '../styles/footerStyles.css';

export default function Footer() {
  return (
    <section className='footer'>
      <p>Links para contato:</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/bruno-mantovan-lopes-c501a54tb532/">Linkedin</a>
        </li>
        <li>
          <a href="https://github.com/Lt-lopes1994">Github</a>
        </li>
        <li>
          <a href="https://github.com/Lt-lopes1994/teste_IPAM">Link do repositório</a>
        </li>
      </ul>
    </section>
  );
}
