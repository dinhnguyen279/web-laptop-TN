import React from 'react'
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./test.css";

const Test = () => {

      const navRef = useRef();
      const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
      };
   
      return (
        <header>
          <h3>LOGO</h3>
          <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">My work</a>
            <a href="/#">Blog</a>
            <a href="/#">About me</a>
            <button
              className="nav-btn nav-close-btn"
              onClick={showNavbar}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </nav>
          <button className="nav-btn" onClick={(icon)=>icon.classList.toggle(`${faTimes}`)}>
             <FontAwesomeIcon icon={faBars} />
          </button>
        </header>
    
      );
    }

export default Test