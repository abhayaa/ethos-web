import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    //FooterLinkTitle,
    FooterLinkItems,
    //FooterLink
    SocialMedia,
    SocialLogo,
    WebsiteRights,
    //SocialIcons,
    SocialMediaWrap,
    SocialIconLink
} from './FooterElements'

import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            {/* <FooterLinkTitle> Ethos </FooterLinkTitle> */}
                                {/* <FooterLink to='/dashboard'>Home</FooterLink>
                                <FooterLink to='/dashboard'>About</FooterLink>
                                <FooterLink to='/dashboard'>Partnerships</FooterLink>
                                <FooterLink to='/dashboard'>Dashboard</FooterLink> */}
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            ethos
                        </SocialLogo>
                        <WebsiteRights>ethos © {new Date().getFullYear()}.
                            All rights reserved.
                        </WebsiteRights>
                            <SocialIconLink href="//www.twitter.com/EthosPrivate" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>

                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
