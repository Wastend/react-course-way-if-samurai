import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return( 
    <div className={s.nav}>
        <div className={s.item}>
            <NavLink to='/' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink>Settings</NavLink>
        </div>
    </div>
    )
}

export default Navbar;