import React from 'react';
import Video from '../../assets/dash.mp4';
import CardGrid from '../CardGrid';


import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent
} from './DashHeroElements';


const DashHero = () => {

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <CardGrid />
            </HeroContent>
        </HeroContainer>
    )
}


export default DashHero;
