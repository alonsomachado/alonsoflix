import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      
      <img className="Logo" src={Logo} alt="AlonsoFLix logo" />
      
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura 
        </a>
         em Julho de 2020
      </p>
    </FooterBase>
  );
}

export default Footer;
