import React from 'react'
import navProfile from '../../assets/avata.jpg'
import navlogo from '../../assets/phuocadmin.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={navlogo} alt='' className='nav-logo'/>
            <div className="avatar-dropdown">
        <div className="avatar-container">
            <img src={navProfile} alt="Avatar" className="avatar" />
            <span className="dropdown-arrow">&#9660;</span>
        </div>
    </div>
        </div>
    )
}

export default Navbar