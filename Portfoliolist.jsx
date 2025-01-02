import React from 'react'

function Portfoliolist({title,id,selected,activems,setselected}) {

  return (
    <li className={activems?"active":""} 
onClick={()=>setselected(id)} key={id}>{title}</li>
  )
}

export default Portfoliolist
