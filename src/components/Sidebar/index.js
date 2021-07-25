import React from 'react';
import {
    SidebarContainer,
    Icon,
    ClosedIcon,
    SidebarMenu,
    SidebarLink,
    SidebarWrapper,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <ClosedIcon />
            </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to="about/#" onClick={toggle}>about</SidebarLink>
                   <SidebarLink to="partnerships/#" onClick={toggle}>partnerships</SidebarLink>
               </SidebarMenu>
               <SideBtnWrap>
                   <SidebarRoute to='/signin/#'>
                       dashboard
                   </SidebarRoute>
               </SideBtnWrap>
           </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
