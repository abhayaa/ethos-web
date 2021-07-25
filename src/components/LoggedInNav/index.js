import React, {useState, useEffect} from 'react';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavMenu, 
    NavBtn,
    NavBtnLink, 
    NavItem
} from './NavbarElements';

import { Avatar } from '@material-ui/core';


const LoggedInNav = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = ()=> {
        if(window.scrollY >= 80){
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
       <>
       <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo onClick={toggleHome}>ethos</NavLogo>
                    <NavMenu>
                    <NavItem> 
                    <Avatar alt="Remy Sharp" src="https://media.giphy.com/media/OkhbcKxPDCKli/giphy.gif" />
                    </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/#">logout</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
       </>
    );
};

export default LoggedInNav;
