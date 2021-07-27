import React , {useState} from 'react';
import Footer from '../Footer';
import LoggedInNav from '../LoggedInNav';
import DashHero from '../DashHero';
import axios from 'axios';

import { HeroContainer } from '../DashHero/DashHeroElements';

// const passport = require('passport');
// const DiscordStrategy = require('passport-discord').Strategy

const DashPage = () => {
    
    const [userExists, setUserExists] = useState(localStorage.getItem('loggedIn'));

    let link = window.location.href;
    let code = link.substring(link.indexOf('code=') + 5);

    const params = new URLSearchParams();
    params.append('client_id', process.env.REACT_APP_CLIENT_ID);
    params.append('client_secret', process.env.REACT_APP_CLIENT_SECRET);
    params.append('grant_type', process.env.REACT_APP_AUTH_TYPE);
    params.append('code', code);
    params.append('redirect_uri', 'http://localhost:3000/dashboard');

    const getCode  = async() => {
        if(localStorage.getItem('loggedIn') !== true){
        await fetch('https://discord.com/api/oauth2/token', { method: 'POST', body: params })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem("code", code)                
                const getUserInfo = async() => {
                    if(localStorage.getItem("code") !== "undefined"){
                        await axios({
                            method: "post",
                            url:
                            "http://localhost:8000/discord/auth",
                            data: { Code: json.access_token, Key: process.env.REACT_APP_API_KEY },
                            headers: { "Content-Type": "application/json" }
                        }).then(response => {
                            if(response.data.found === true){
                                setUserExists(true);
                                localStorage.setItem("loggedIn", true)
                                localStorage.setItem("ethoskey", response.data.ethosKey)
                                localStorage.setItem("expiration", response.data.expiration)
                                localStorage.setItem("memberType", response.data.memberType)
                                localStorage.setItem("plan", response.data.plan)
                                localStorage.setItem("username", response.data.username)
                                if(response.data.avatar.indexOf('a_') > -1){
                                    localStorage.setItem("avatar", 
                                        'https://cdn.discordapp.com/avatars/' +
                                        response.data.userId + '/'+
                                        response.data.avatar + '.gif' 
                                    )
                                }else {
                                    localStorage.setItem("avatar", 
                                        'https://cdn.discordapp.com/avatars/' +
                                        response.data.userId + '/'+
                                        response.data.avatar + '.png' 
                                    )
                                }
                                console.log(response);
                            }
                        });
                    }
                }
                getUserInfo()
            });
        }
    }
    getCode()

    console.log(localStorage)

    return (
        <>
            <LoggedInNav avatar={localStorage.getItem('avatar')}/>
            {userExists ? <DashHero expiration={localStorage.getItem('expiration')} license={localStorage.getItem('ethoskey')}/> : <HeroContainer /> }
            <Footer />
        </>
    )
}

export default DashPage;
