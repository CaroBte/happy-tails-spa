import React from 'react'
import { Outlet } from 'react-router'
import { MenuWeb, MenuBurger } from '../components'

const Navbar = () => {
    return (
        <>
            <div className='menu-web'>
                <MenuWeb />
            </div>

            <div className="menu-burguer">
                <MenuBurger />
            </div>

            <Outlet />

        </>
    )
}

export default Navbar