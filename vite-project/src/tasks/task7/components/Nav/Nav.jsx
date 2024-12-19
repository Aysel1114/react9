import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import css from "./Nav.module.css";

export default function Nav() {
  return (
    <div className = {css.navbar}>
        <NavLink className={({ isActive }) => 
          isActive ? `${css.navElement} ${css.activeNavElement}` : css.navElement
        } to = "/">Saat</NavLink>
        <NavLink className={({ isActive }) => 
          isActive ? `${css.navElement} ${css.activeNavElement}` : css.navElement
        } to = "/stopwatch">Saniyəölçən</NavLink>
        <NavLink className={({ isActive }) => 
          isActive ? `${css.navElement} ${css.activeNavElement}` : css.navElement
        } to = "/taymer">Taymer</NavLink>
    </div>
  )
}
