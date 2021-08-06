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

const LoggedInNav = props => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = ()=> {
        if(window.scrollY >= 80){
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    const logout = () => {
        localStorage.clear();
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
                    <Avatar alt={props.text} src={props.avatar} />
                    </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/#" onClick={logout}>logout</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
       </>
    );
};

export default LoggedInNav;
