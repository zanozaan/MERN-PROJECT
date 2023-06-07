import React, { useState, useRef } from 'react';
import { Navbar, Nav, NavbarBrand, Image } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logo from "../../assets/images/logo.png"
import user from "../../assets/images/user.png"

const Navigation = () => {

    const navigate = useNavigate();

    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const subMenuRef = useRef(null);

    const toggleMenu = () => {
        setSubMenuOpen(!subMenuOpen);
};

    return(
        <div className="Navbar">
        <Navbar bg="light" fixed="top" variant="light" className="headNav">
            <div className="container">
                <NavbarBrand href="/home" font-size="20px">
                    <Image src={logo} 
                    width='100px'
                    onClick={() => navigate('/home')}/>
                </NavbarBrand>
                <Nav>
                <Nav.Link href="#NowPlaying">NowPlaying</Nav.Link>
                <Nav.Link href="#UpComing">UpComing</Nav.Link>
                </Nav>
                <img src={user} 
                className='user-pic' 
                onClick={toggleMenu} />
                <div className={`sub-menu-wrap ${subMenuOpen ? 'open-menu' : ''}`} id='subMenu' ref={subMenuRef}>
                    <div className='sub-menu'>
                        <div className='user-info'>
                            <img src={user} alt='User' />
                            <h3>Fauzan Musyafa</h3>
                        </div>
                        <hr />
                        <a href='#' 
                        className='sub-menu-link'
                        onClick={() => navigate('/history')}>
                            <Icon icon="ph:user" className='icon' />
                            <p>History Payment</p>
                            <span>{`>`}</span>
                        </a>
                        <a href='#' 
                        className='sub-menu-link'
                        onClick={() => navigate('/add')}>
                            <Icon icon="ic:twotone-movie" className='icon'/>                            
                            <p>Add Movie`</p>
                            <span>{`>`}</span>
                        </a>
                        <a href='#' 
                        className='sub-menu-link'
                        onClick={() => navigate('/list')}>
                            <Icon icon="ic:twotone-movie" className='icon'/>                            
                            <p>My Film</p>
                            <span>{`>`}</span>
                        </a>
                        <a href='#' 
                        className='sub-menu-link'
                        onClick={() => navigate('/')}>
                            <Icon icon="material-symbols:logout" className='icon'/>
                            <p>Logout</p>
                            <span>{`>`}</span>
                        </a>
                    </div>
                </div>
            </div>
        </Navbar>
        </div>
    )
}

export default Navigation