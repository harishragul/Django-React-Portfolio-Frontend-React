import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
  <>
  <Link to="/"><p>Home</p></Link>
  <Link to="/animations"><p>3D/Animations</p></Link>
  <Link to="/photo"><p>Photo Manipulation</p></Link>
  <Link to="/music"><p>Music</p></Link>
  <p><a href="#footer">Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className='navbar-links_logo'>
        <p>Dhawheedfx</p>
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <Menu />
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
