import React from 'react'
import { FaShippingFast } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { CgLogIn } from 'react-icons/cg';
import { CiLogout } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    return (
        <>
            <div className='header'>
                <div className='top_header'>
                    <div className='icon'>
                        <FaShippingFast />
                    </div>
                    <div className='info'>
                        <p>
                        Enjoy yourself while shopping.
                        </p>
                    </div>
                </div>
                <div className='mid_header'>
                    <div className='logo'>
                        <img src='image/banner_happiness.png' alt='logo' ></img>
                    </div>
                    <div className='search_box'>
                        <input type='text' value='' placeholder='search'></input>
                        <button><FaSearch /></button>
                    </div>
                    {
                        isAuthenticated ?
                            <div className='user'>
                                <div className='icon'>
                                    <CiLogout />
                                </div>
                                <div className='btn'>
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                                </div>
                            </div>
                            :
                            <div className='user'>
                                <div className='icon'>
                                    <CgLogIn />
                                </div>
                                <div className='btn'>
                                    <button onClick={() => loginWithRedirect()}>Login</button>
                                </div>
                            </div>
                    }
                </div>
                <div className='last_header'>
                    <div className='user_profile'>
                        {
                            //to show user profile i have used this from auth0
                            isAuthenticated ?
                                <>
                                    <div className='icon'>
                                        <FaUserCircle />
                                    </div>
                                    <div className='info'>
                                        <h2>{user.name}</h2>
                                        <p>{user.email}</p>
                                    </div>
                                </>
                                :
                                <>
                                    <div className='icon'>
                                        <FaUserCircle />
                                    </div>
                                    <div className='info'>
                                        <p>Please Login</p>
                                    </div>
                                </>
                        }
                    </div>
                    <div className='nav'>
                        <ul>
                            <li><Link to='/' className='link'>Home</Link></li>
                            <li><Link to='/shop' className='link'>Shop</Link></li>
                            <li><Link to='/collection' className='link'>Collection</Link></li>
                            <li><Link to='/about' className='link'>About</Link></li>
                            <li><Link to='/contact' className='link'>Contact</Link></li>
                        </ul>
                    </div>

                    <div className='offer'><p>Flat 15% discount on winter collection.</p></div>
                </div>
            </div>
        </>
    )
}
export default Nav;