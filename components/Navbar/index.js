import React, { useState } from 'react';

import { 
  navbar, 
  container, 
  menuWrapper, 
  logo,
  icon, 
  list
} from './navbar.module.css';

import Drawer from '@material-ui/core/Drawer';
import { Menu, AccountCircle } from '@material-ui/icons';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className={navbar}>
      <div className={container}>

        <div className={menuWrapper}>
          <Menu onClick={toggleMenu} className={icon}/>
          <Drawer anchor="left" open={menu} onClose={toggleMenu}>
            <ul className={list}>

            </ul>
          </Drawer>

          <span className={logo}>Iron Lad</span>
        </div>

        <div>
          <img src="/assets/logo_MM.png" alt="Logo MadeiraMadeira"/>
        </div>

        <AccountCircle className={icon}/>

      </div>
    </nav>
  );
};

export default Navbar;