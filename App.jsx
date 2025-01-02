import React, { useState } from 'react'
import Topbar from './Components/Topbar'
import Intro from './Components/Intro'
import Contact from './Components/Contact'
import './App.scss'
import Portfolio from './Components/Portfolio'
import Menubar from './Components/Menubar'
import Work from './Components/Work'
import Testimonials from './Components/Testimonials'
import{createBrowserRouter, RouterProvider} from'react-router-dom'
const router=createBrowserRouter(
  [{
    path:"/",
  element:<Intro/>
  },
  {
    path:"#portfolio",
  element:<Portfolio/>
  },
  ]
)
function App() {
  const[menu,setmenu]=useState(false);
  return (
    <div>
    <Menubar menu={menu} setmenu={setmenu}/>
<Topbar  menu={menu} setmenu={setmenu}/>
<div className='sections'>
  <Intro/>
  <Portfolio/>
 <Work/>
 <Testimonials/>
 <Contact/>
    </div>
    </div>
   
  )
}

export default App
