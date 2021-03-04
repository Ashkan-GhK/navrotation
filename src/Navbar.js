import React, { useState } from 'react';
import './Navbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => {setIsOpen(!isOpen)};
    return (
        <div className="navbar">
            <div className= {`${isOpen ? 'navbar__container__open' : 'navbar__container'}`}>
            </div>
            <div className={`${isOpen ? 'navbar__list': ''}`}>
                    <ul>
                        <li>home</li>
                        <li>Portfolio</li>
                        <li>Games</li>
                        <li>Contact</li>
                    </ul> 

                </div>
            
            <div onClick={openMenu} className="navbar__icon__container">
            {isOpen ? <CloseIcon /> :
             <MenuIcon />}
            </div>
         
            
        </div>
        
    )
}

export default Navbar;

