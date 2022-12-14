import React from 'react';
import { Link } from 'react-router-dom';
import img from './../../../src/images/1248.jpg';
import './navbar.css'

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About me</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contract'>Contract</Link></li>
    </React.Fragment>
    return (
        <div>
 <div>
            <div className="navbar py-6 font-bold bg-neutral  text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <div className='hidden  sm:block'>
                        <div className='flex items-center'>
                            <img alt="" className="w-10 h-10 mr-2 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src={img} />
                            
                            <h2 className='text-3xl ml-3'>Dev Firoj</h2>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
            </div>
            <hr />
        </div>
        </div>
    );
};

export default Navbar;