import React from 'react';
import Video from '../../assets/dash.mp4';
import KeyActivate from '../KeyActivate';


import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent
} from './DashHeroElements';


const DashHero = props => {

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <KeyActivate />
            </HeroContent>
        </HeroContainer>
    )
}


export default DashHero;
