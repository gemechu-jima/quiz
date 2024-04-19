import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavLinks.css"
export default function NavLinks(props) {
  return (
    <ul className='navlinks'>
        <li onClick={props.handleSidebar}>
            <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={props.handleSidebar}>
            <NavLink to="/quiz">Quiz</NavLink>
        </li>
        <li onClick={props.handleSidebar}>
            <NavLink to="/blog">Blog</NavLink>
        </li>
        <li onClick={props.handleSidebar}>
            <NavLink to="/about">About</NavLink>
        </li>
        <li onClick={props.handleSidebar}>
            <NavLink to="/contact">Contact US</NavLink>
        </li>
    </ul>
  )
}
