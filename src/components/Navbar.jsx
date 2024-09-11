import { NavLink, Outlet } from 'react-router-dom';
import './Navbar.css';
import { useAuthContext } from '../hooks/useAuthContext';

import React from 'react'
import { useLogout } from '../hooks/useLogout';

export default function Navbar() {
    const {user} = useAuthContext();
    const {logout} = useLogout();

  return (
    <div>
        <header>
            <nav>
                <ul>
                    <li className='title'>My Transactions</li> 
                    {!user && (
                        <>
                            <li><NavLink to='/login'>Login</NavLink></li> 
                            <li><NavLink to='/signup'>Signup</NavLink></li>
                        </>
                    )}
                    {user && (
                        <>
                        <li><p>Hello, {user.displayName}</p></li>
                        <li><button onClick={logout} className='btn'>Logout</button></li>
                        </>
                    )}

                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
