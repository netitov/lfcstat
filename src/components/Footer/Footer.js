import React from 'react';
import Contacts from '../Contacts/Contacts';

function Footer() {
  return (
    <footer className="footer">
      <p>Официальные соц-сети</p>
      <Contacts />
      <a href="https://netitov.ru/" target="_blank" rel="noreferrer">Разработано NT</a>
    </footer>
  );
}

export default Footer;
