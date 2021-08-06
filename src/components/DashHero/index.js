import React, { useState } from 'react';
import Video from '../../assets/dash.mp4';
import CardGrid from '../CardGrid';
import { IconButton } from '@material-ui/core';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import { Link } from 'react-router-dom';

import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent
} from './DashHeroElements';

const DashHero = props => {
    const [isAdmin, setIsAdmin] = useState(true)

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <CardGrid expiration={props.expiration} license={props.license} email={props.email}/>
                { isAdmin ? 
                 <IconButton component={Link} to='/admindash' aria-label="delete" color="primary">
                    <FingerprintIcon />
                </IconButton>
                : null}
            </HeroContent>
        </HeroContainer>
    )
}


export default DashHero;
