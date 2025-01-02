import React, { useEffect, useState } from 'react'
import './Portfolio.scss'
import Portfoliolist from './Portfoliolist'

import {
  frontend
  ,react,
  js,wp
} from '../Components/Data'


function Portfolio() {

  const[selected,setselected]=useState("frontend")
  const[data,setData]=useState([])
  
  useEffect(()=>{
if(selected=="frontend"){
  setData(frontend)
}
else if(selected=="react"){
  setData(react)
}
if(selected=="js"){
  setData(js)
}
else if(selected=="wp"){
  setData(wp)
}

  },[selected])
  const list=[
    {id:"frontend",title:'Frontend Projects'},
    {id:"react",title:'React Projects'},
    {id:"js",title:'Javascript Projects'},
    {id:"wp",title:'Wordpress Projects'},
  ]
  return (
   
      <div className='portfoliosec'>
       <div className="box1">
   <div className="skills">
    <ul>
      {list.map((currelem)=>(

      <Portfoliolist 
      id={currelem.id}
      title={currelem.title}
      
      activems={selected===currelem.id}
      setselected={setselected}


      />
      ))}
    </ul>
   </div>
    </div>
    <div className="box2">
    {data.map((currelem)=>{
      return(
        <div className="portfolioimgs">
        <img src={currelem.img}></img>
        <h3>{currelem.title}</h3>
      </div>
      )
    })}
      
    </div>
    
  {/*  */}
  
  </div>
  )
}

export default Portfolio
