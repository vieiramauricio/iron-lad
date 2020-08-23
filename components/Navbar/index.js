import React, { useState } from 'react';
import Link from 'next/link';

import { 
  navbar, 
  container, 
  menuWrapper, 
  logo,
  icon, 
  list,
  itemList
} from './navbar.module.css';

import Drawer from '@material-ui/core/Drawer';
import { Menu, AccountCircle } from '@material-ui/icons';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const menuList = [
    {
      name: 'Dashboard',
      url: '/dashboard'
    },
    {
      name: 'Produtos',
      url: '/produtos'
    },
    {
      name: 'Pedidos',
      url: '/pedidos'
    }
  ]

  return (
    <nav className={navbar}>
      <div className={container}>

        <div className={menuWrapper}>
          <Menu onClick={toggleMenu} className={icon}/>
          <Drawer anchor="left" open={menu} onClose={toggleMenu}>
            <ul className={list}>
              { 
                menuList.map((item, index) => (
                  <Link href={item.url} key={index}>
                    <a className={itemList}>
                      {item.name}
                    </a>
                  </Link>
                )) 
              }
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