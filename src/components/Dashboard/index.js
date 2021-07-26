import React , {useState} from 'react';
import Footer from '../Footer';
import LoggedInNav from '../LoggedInNav';
import DashHero from '../DashHero';
import axios from 'axios';

import { HeroContainer } from '../DashHero/DashHeroElements';

// const passport = require('passport');
// const DiscordStrategy = require('passport-discord').Strategy

const DashPage = () => {
    
    const [userExists, setUserExists] = useState(false);

    let link = window.location.href;
    let code = link.substring(link.indexOf('code=') + 5);
    console.log(code);

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
                console.log(localStorage)
                
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
                                console.log(response);
                                setUserExists(true);
                                localStorage.setItem("loggedIn", true)
                            }
                        });
                    }
                }
                getUserInfo()
            });
        }
    }
    getCode()

    return (
        <>
            <LoggedInNav />
            {userExists ? <DashHero /> : <HeroContainer /> }
            <Footer />
        </>
    )
}

export default DashPage;
