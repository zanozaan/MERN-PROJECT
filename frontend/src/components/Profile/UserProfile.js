import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./UserProfile.css";
import userPic from '../../assets/images/user.png';
import helpIcon from '../../assets/images/help.png';
import logoutIcon from '../../assets/images/logout.png';
import profileIcon from '../../assets/images/profile.png';
import settingIcon from '../../assets/images/setting.png';

const UserProfile = () => {
    const navigate = useNavigate();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const subMenuRef = useRef(null);

    const toggleMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <div className='hero'>
            <nav>
                
                <img src={userPic} className='user-pic' onClick={toggleMenu} />
                <div className={`sub-menu-wrap ${subMenuOpen ? 'open-menu' : ''}`} id='subMenu' ref={subMenuRef}>
                    <div className='sub-menu'>
                        <div className='user-info'>
                            <img src={userPic} alt='User' />
                            <h3>Fauzan Musyafa</h3>
                        </div>
                        <hr />
                        <a href='#' className='sub-menu-link'>
                            <img src={profileIcon} alt='Profile' />
                            <p>Edit Profile</p>
                            <span>{`>`}</span>
                        </a>
                        <a href='#' className='sub-menu-link'>
                            <img src={settingIcon} alt='Settings' />
                            <p>Settings & Privacy</p>
                            <span>{`>`}</span>
                        </a>
                        <a href='#' className='sub-menu-link'>
                            <img src={helpIcon} alt='Help' />
                            <p>Help & Support</p>
                            <span>{`>`}</span>
                        </a>
                        <a href='/' className='sub-menu-link' onClick={() => navigate('/')}>
                            <img src={logoutIcon} alt='Logout' />
                            <p>Logout</p>
                            <span>{`>`}</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default UserProfile;
