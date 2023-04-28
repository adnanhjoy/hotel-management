import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const NavBar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='bg-primary p-2 d-flex justify-content-between'>
            <p className='m-0 text-white'>Name: {user?.email}</p>
            <div className='d-flex justify-content-center'>
                <Link to='/' className='ps-4 text-white text-decoration-none'>Home</Link>
                <Link to='/about' className='ps-4 text-white text-decoration-none'>About</Link>
                <Link to='/login' className='ps-4 text-white text-decoration-none'>Login</Link>
            </div>
        </div>
    );
};

export default NavBar;