import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import profileicon from "../../assets/profile_img.png";
import bell from "../../assets/bell_icon.svg";
import search from "../../assets/search_icon.svg";
import dropdown from '../../assets/caret_icon.svg';
import { logout } from "../../firebase";

const Navbar = () => {
  const navref=useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=80){
        navref.current.classList.add('nav-dark')
      }
      else{
        navref.current.classList.remove('nav-dark')
      }
    })
  })
  return (
    <div ref={navref}className="navbar">
      <div className="leftcolumn">
        <img src={logo} alt="" />
        
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New and Popular</li>
            <li>My List</li>
            <li>Browse by language</li>
          </ul>
        
      </div>
      <div className="rightcolumn">
        <img src={search} alt="" className="icon"/>
        <p>Children</p>
        <img src={bell} alt=""className="icon" />

        <div className="navbarprofile">
          <img src={profileicon} alt="" className="profile"/>
          <img src={dropdown}alt="" />
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
