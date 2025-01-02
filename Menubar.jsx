import React from 'react';
import './Menu.scss';


function Menubar({ menu, setmenu }) {
  return (
    <div className={`menubar ${menu ? 'active' : ''}`}>
      <ul>
        <li onClick={() => setmenu(false)}>
          <a  href="#Intro">HOME</a>
        </li>
        <li onClick={() => setmenu(false)}>
          <a  href="#Portfolio">PORTFOLIO</a>
        </li>
        <li onClick={() => setmenu(false)}>
          <a  href="#Contact">CONTACT</a>
        </li>
      </ul>
    </div>
  );
}

export default Menubar;
