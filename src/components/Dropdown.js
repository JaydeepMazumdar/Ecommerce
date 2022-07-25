import React, { useState } from 'react';
import { nav_products, nav_help } from './MenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

export function Dropdown() {
  return (
    <>
    <ul className='d_Menu'>
      {nav_products.map(item =>{
        return(
        <li key={item.id} className={item.cName}>
          <Link to={item.path} className="link">
            {item.title}</Link>
        </li>
        )
      })}
    </ul>
    </>
  );
}

export function Help() {
  return (
    <>
    <ul className='d_Menu h_Menu'>
      {nav_help.map(item =>{
        return(
        <li key={item.id} className={item.cName}>
          <Link to={item.path} className="link">{item.title}</Link>
        </li>
        )
      })}
    </ul>
    </>
  );
}
















































  
        {/* <ul
          onClick={handleClick}
          className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul> */}