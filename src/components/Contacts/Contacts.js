import React from 'react';
import { BsYoutube } from 'react-icons/bs';
import { RiInstagramFill, RiFacebookCircleFill } from 'react-icons/ri';
import { AiFillTwitterCircle } from 'react-icons/ai';

function Contacts() {
  return (
    <ul className="contacts">
      <li>
        <a href="https://www.facebook.com/LiverpoolFC" className="contacts__link" title="Facebook" target="_blank" rel="noreferrer">
          <RiFacebookCircleFill />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/liverpoolfc" className="contacts__link" title="Youtube" target="_blank" rel="noreferrer">
          <BsYoutube />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/liverpoolfc/" className="contacts__link" title="Instagram" target="_blank" rel="noreferrer">
          <RiInstagramFill />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/lfc" className="contacts__link" title="Twitter" target="_blank" rel="noreferrer">
          <AiFillTwitterCircle />
        </a>
      </li>
    </ul>
  );
}

export default Contacts;
