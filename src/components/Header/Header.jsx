import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Nav className='d-flex justify-content-center pt-3'>
                <Link to='/' className='ps-4 text-white text-decoration-none icon-link'>Home</Link>
                <Link to='/about' className='ps-4 text-white text-decoration-none icon-link'>About</Link>
                <Link to='/login' className='ps-4 text-white text-decoration-none icon-link'>Login</Link>
            </Nav>
            <h1 className='text-white text-center mt-5'>Burj Al Arab</h1>
            <p className='w-50 text-white text-center m-auto mt-5'>Food and beverage service is another key area of hotel management, as it involves managing restaurants, bars, and catering services. This includes menu planning, food preparation and service, and managing inventory and costs.</p>
        </div>
    );
};

export default Header;