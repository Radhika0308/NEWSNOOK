import React, { useState, useEffect } from "react";
// import logo from './assets/logo/png';
import { Link } from 'react-router-dom'
import Countries from "./countries";
// import downArrow from './../assets/downarrow.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios';



function Header() {

    const [active, setActive] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [theme, setTheme] = useState("light-theme");

  const category = ["business", "entertainment", "general", "health", "science", "sports", "technology","politics"]
  useEffect(() => {
    document.body.className = theme;
  }, [theme])
  function toggleTheme() {
    if (theme === "light-theme") {
      setTheme("dark-theme")
    }
    else {
      setTheme("light-theme")
    }
  }

    return(
    <header>

        <nav className= "fixed top-0 left-0 w-full h-auto bg-gray-800 z-10 flex items-center justify-around">
            <h3 className ="relative heading font-bold md:w-1/6 text-2xl xs:w-4/12 z-50 mb-5 mt-5">
           <span className ="logo">
            <img src="logo" alt ="News_Nook"></img>
           </span>
            </h3>
            <ul className={`nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:w-4/6 md:justify-end ${active ? 'active':''} `}>
                <li>
                <Link className="no-underline font-semibold" to="/" onClick={() => { setActive(!active) }}>All News</Link>  
                </li>
                <li className = "dropdown-li">
                    <Link className="no-underline font-semibold justify-center items-center gap-2 " onClick ={() =>{setShowCategoryDropdown(!setShowCategoryDropdown);setShowCountryDropdown(false); }}>
                    Top-Headlines
                    </Link>
                </li>

                <ul className={showCategoryDropdown ? "dropdown p-2 show-dropdown": "dropdown p-2"}>
                    {Countries.map((element,index) =>{
                        <li key ={index} onClick={() => setShowCategoryDropdown(!setShowCountryDropdown)}>
                            <Link to={`/country/${element?.iso_2_alpha}`} className="flex gap-3" onClick={() =>{
                                setActive(!active)
                            }}>
                            <img src="{element?.png" srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`} />
                            <span>{element?.countryName}</span>
                            </Link>
                        </li>
                    })}
                </ul>
                <li>
                    <Link className="no-underline font-semibold" to ="#" onClick={toggleTheme} >
                    <input type = "checkbox" className="checkbox" id="checkbox"></input>
                    <label htmlFor="checkbox" className="checkbox-label">
                       <i className="fas fa-moon"></i>
                        <i className="fas fa-sun"></i>
                        <span className="ball"></span>
                        </label>
                    </Link>
                </li>
                <li></li>
            </ul>
        </nav>
    </header>
    )
} 


export default Header;
