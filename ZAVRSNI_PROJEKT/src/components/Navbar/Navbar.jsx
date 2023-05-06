import React from 'react'
import stil from "./navbar.module.css"
import UserContext from '../Context/UserContext'
import { useContext } from 'react'
import {NavLink} from "react-router-dom"
import {Switch} from "antd"
import { useState } from 'react'

const Navbar = () => {

const navigationAdmin=[
    {name:'o nama',href:'/'},
    {name:'popis',href:'/popis'},
    {name:'donacije',href:'/donacije'},
    {name:'obavijesti',href:'/obavijesti'},
    {name:'unos',href:'/unos'},
]


const {context,setContext}=useContext(UserContext);




const promjeniToggle=()=>{
    if(context==="admin")
    {
        setContext("korisnik")
    }
    
    else
    {
        setContext("admin")
    }
    
}


  return (
    <div className={stil.NavContainer}>
        <div className={stil.NavNaslov}>
            <div className={stil.naslov}>
                <div className={stil.TekstNaslov}>AZIL ZA ŽIVOTINJE</div>
                <div className={stil.LogoNaslov}><img src="pet-house.png" height="60px" width="60px"/></div>
            </div>
            <div className={stil.korisnik}>

                {context==="admin" ?
                <>
                 <span>ADMIN</span>
                 <Switch  style={{ background: "green",  }} onClick={promjeniToggle}  />
                 </> : 
                 <>
                 <span>KORISNIK</span>
                <Switch  style={{ background: "aqua",  }} onClick={promjeniToggle} checked={context==="korisnik"} />
                </>
                }

            </div>
        </div>
      

        <div className={stil.NavOpcije}>
            {navigationAdmin.map((item)=>(
                <NavLink
                key={item.name}
                to={item.href}
                //destrukturira si da ti samo vrati isActive
                className={({isActive})=>{
                    return stil.Opcija ,
                    (isActive ? stil.OpcijaAktivna :
                        stil.Opcija)  
                }}
                >
                    <span>{item.name}</span>
                </NavLink>
            ))

            }
           
        </div> 
        
       
    </div>
  )
}

export default Navbar


//OVO TI JE BILO U stil.korisnik -->navbar

   {/* <div>
                    <input type="radio"  name="user" value="admin" defaultChecked={context==="admin"} onChange={promjeniContext}/>
                    <label htmlFor="admin">Admin</label>
                </div>

                <div>
                    <input type="radio"  name="user" value="korisnik" defaultChecked={context==="korisnik"} onChange={promjeniContext}/>
                    <label htmlFor="korisnik">Korisnik</label>
                </div> */}