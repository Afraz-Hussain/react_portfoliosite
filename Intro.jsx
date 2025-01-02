import React, { useEffect, useRef } from 'react';
import './Intro.scss';

import Typed from 'typed.js';

function Intro() {
  const el=useRef(null)
 useEffect(()=>{

  const typed = new Typed(el.current, {
    strings: ['<i>React Developer</i>', '<i>Next.js Developer</i>','<i>Mern Stack Developer</i>','<i>Wordpress Developer</i>'],
    typeSpeed: 90,
    shuffle: false,
    backDelay: 900,
    loop: true,
   fadeOutDelay: 500
  });

  

 },[])
  return (
    
    <div className='container'>

      <div className="left">

        <img src="/Pics/afraz hussain.png" className='pic1' alt="Man"></img>
      </div>

      <div className="right">
        <h2 className="greet">Hi There, I'm <span className="emoji">👋</span></h2>

        <h1 className="myname">Afraz Hussain</h1>

        <p className="skills">I'M A <span ref={el}></span></p>

        <button className="btn">Download Resume</button>

      </div>
    </div>
  );
}

export default Intro;
