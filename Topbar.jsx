
import './Topbar.scss'
import { Person, Mail } from "@mui/icons-material";
function Topbar({menu,setmenu}) {
  return (
    <div className={"topbar "+ (menu &&" active")}>
     <div className='wrapper'>
     <div className="left">
     <div className='logo'>
<a href='#Intro' className='logo'>Afraz Dev</a>
     </div>
     <div className='itemcontainer'>
<Person  />
<span>+923064846431</span>
</div>
 <div className='itemcontainer'>
<Mail/>
<span>afrazmuhmmad310@gmail.com</span>
     </div>
     </div>
     <div className="right">
     <div className="hamburger" onClick={()=>setmenu(!menu)}>
     <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
     </div>
     </div>
     </div>
    </div>
  )
}

export default Topbar
