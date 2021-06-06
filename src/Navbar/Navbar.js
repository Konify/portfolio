import React from 'react'
import { FaTimes, FaBars, FaInstagramSquare, FaTwitterSquare, FaGithubSquare, FaFacebookSquare } from 'react-icons/fa'
import './navbar.css'

export default function Navbar(){

    const [open, setOpen] = React.useState(false)

    const links = (
        <ul className="nav">
            <li className="nav-item"><a href="#" className="nav-link" >Home</a> </li>
            <li className="nav-item"><a href="#about" className="nav-link" >About</a> </li>
            <li className="nav-item"><a href="#skill" className="nav-link" >Skills</a> </li>
            <li className="nav-item"><a href="#projects" className="nav-link" >Projects</a> </li>
            <li className="nav-item"><a href="#" className="nav-link" >Doc</a> </li>
            <li className="nav-item"><a href="#" className="nav-link" >Blog</a> </li>
            <li className="nav-item"><a href="#contact" className="nav-link" >Contact</a> </li>
        </ul>
    )
    return (
        <nav className="navbar-wraper">
            <div className="menu-bar-wraper">
                <span onClick={() => setOpen(!open)}>{open ? <FaTimes className="menu-bar-icon" /> : <FaBars className="menu-bar-icon" />}</span>
            </div>
            <div className="d-flex text-white pt-1 mr-3">
                <h2>Kon<span className="color-span">son</span></h2>
            </div>
            <div className="nav-links-container desktop-menu">
                {links}
            </div>
            <div className={open ? "mobile-menu show" : "mobile-menu hide"} onClick={() => setOpen(!open)}>
                {links}
            </div>
            <div className="nav-media-container d-flex">
                <a href="https://facebook.com/koni.akech" target="blank" rel="noreferrer"><FaFacebookSquare className="nav-media-icon" /></a>
                <a href="https://facebook.com/koni.akech" target="blank" rel="noreferrer"><FaTwitterSquare className="nav-media-icon" /></a>
                <a href="https://facebook.com/koni.akech" target="blank" rel="noreferrer"><FaInstagramSquare className="nav-media-icon" /></a>
                <a href="https://facebook.com/koni.akech" target="blank" rel="noreferrer"><FaGithubSquare className="nav-media-icon" /></a>
            </div>
        </nav>
    )
}