import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { BsPersonFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <Nav style={{borderBottomWidth:"2px"}}>

        <NavMenu>
          <NavLink to='/'>
            <img src={require('../../images/logo.png')} alt='logo' 
            style={{width:"50px", height:"47px"}} />
          </NavLink>
          <NavLink to='/about' activeStyle>
            Game
          </NavLink>
          <NavLink to='/services' activeStyle>
            Tin tức
          </NavLink>
        </NavMenu>
        <input
        type="text"
        placeholder="Search"
        style={{
          width:"300px",
          height:"32px",
        marginTop:'5px',
        marginBottom:'5px'
        }}
       
      />
        <NavMenu className="margin" >
          <NavLink to='/'>
            <AiFillHeart size={32} color="white"/>
          </NavLink>
          <NavLink to='/'>
            <BsPersonFill size={32} color="white" />
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
