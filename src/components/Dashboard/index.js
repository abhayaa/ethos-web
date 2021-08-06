import React , {useState} from 'react';
import Footer from '../Footer';
import LoggedInNav from '../LoggedInNav';
import DashHero from '../DashHero';
import DashKeyActive from '../DashKeyActive'
import axios from 'axios';
import { Button } from '@material-ui/core';

import { Link } from 'react-router-dom';

const DashPage = () => {
    console.log(localStorage)
    const [userExists, setUserExists] = useState(localStorage.getItem('userExists'));
    const [avatarLink, setAvatarLink] = useState(localStorage.getItem('avatarLink'));
    const [isAdmin, setIsAdmin] = useState(true);


    let link = window.location.href;
    let code = link.substring(link.indexOf('code=') + 5);

    const params = new URLSearchParams();
    params.append('client_id', process.env.REACT_APP_CLIENT_ID);
    params.append('client_secret', process.env.REACT_APP_CLIENT_SECRET);
    params.append('grant_type', process.env.REACT_APP_AUTH_TYPE);
    params.append('code', code);
    params.append('redirect_uri', 'http://localhost:3000/dashboard');

    const getCode  = async() => {
        if(localStorage.getItem('loggedIn') !== "true" && localStorage.getItem('keyActive') !== "true"){
            await fetch('https://discord.com/api/oauth2/token', { method: 'POST', body: params })
                .then(res => res.json())
                .then(json => {
                    localStorage.setItem("code", code)
                    const getUserInfo = async() => {
                        if(localStorage.getItem("code") !== "undefined"){
                            localStorage.setItem("loggedIn", true)
                            await axios({
                                method: "post",
                                url:
                                "http://localhost:8000/discord/auth",
                                data: { AccessToken: json.access_token, RefreshToken: json.refresh_token, Key: process.env.REACT_APP_API_KEY },
                                headers: { "Content-Type": "application/json" }
                            }).then(response => {
                                if(response.data.found === true){
                                    localStorage.setItem('userExists', true);
                                    setUserExists(true);
                                    localStorage.setItem("loggedIn", true)
                                    localStorage.setItem("ethoskey", response.data.ethosKey)
                                    localStorage.setItem("expiration", response.data.expiration)
                                    localStorage.setItem("memberType", response.data.memberType)
                                    localStorage.setItem("plan", response.data.plan)
                                    localStorage.setItem("username", response.data.username)
                                    localStorage.setItem('userId', response.data.userId)
                                    localStorage.setItem('avatar', response.data.avatar)
                                    if(response.data.avatar.indexOf('a_') > -1){
                                        localStorage.setItem("avatarLink", 
                                                'https://cdn.discordapp.com/avatars/' +
                                                localStorage.getItem('userId') + '/'+
                                                localStorage.getItem('avatar') + '.gif' 
                                        )
                                    }else {
                                        localStorage.setItem("avatarLink", 
                                            'https://cdn.discordapp.com/avatars/' +
                                            localStorage.getItem('userId') + '/'+
                                            localStorage.getItem('avatar') + '.png'  
                                        )
                                    }
                                    setAvatarLink(localStorage.getItem('avatarLink'));
                                } else {
                                    localStorage.setItem("access_token", json.access_token);
                                    localStorage.setItem("refresh_token", json.refresh_token);
                                    if(localStorage.getItem("avatar") === null) {
                                        localStorage.setItem('userId', response.data.userId)
                                        localStorage.setItem('avatar', response.data.avatar)
                                        if(localStorage.getItem('avatar') !== 'undefined' && localStorage.getItem('avatarLink') !== 'undefined'){ 
                                            if(localStorage.getItem('avatar').indexOf('a_') > -1){
                                                localStorage.setItem("avatarLink", 
                                                    'https://cdn.discordapp.com/avatars/' +
                                                    localStorage.getItem('userId') + '/'+
                                                    localStorage.getItem('avatar') + '.gif' 
                                                )
                                            }else {
                                                localStorage.setItem("avatarLink", 
                                                    'https://cdn.discordapp.com/avatars/' +
                                                    localStorage.getItem('userId') + '/'+
                                                    localStorage.getItem('avatar') + '.png' 
                                                )
                                            }
                                        }
                                    }
                                    setAvatarLink(localStorage.getItem('avatarLink'));
                                }
                            });
                        }
                    }
                    getUserInfo();
                });
        } else if(localStorage.getItem('keyActive') === "true") {
            await axios({
                method: "post",
                url:
                "http://localhost:8000/discord/auth",
                data: { AccessToken: localStorage.getItem('access_token'), RefreshToken: localStorage.refresh_token, Key: process.env.REACT_APP_API_KEY },
                headers: { "Content-Type": "application/json" }
            }).then(response => {
                if(response.data.found === true){
                    localStorage.setItem('userExists', true);
                    setUserExists(true);
                    localStorage.setItem("loggedIn", true)
                    localStorage.setItem("ethoskey", response.data.ethosKey)
                    localStorage.setItem("expiration", response.data.expiration)
                    localStorage.setItem("memberType", response.data.memberType)
                    localStorage.setItem("plan", response.data.plan)
                    localStorage.setItem("username", response.data.username)
                    localStorage.setItem('userId', response.data.userId)
                    localStorage.setItem('avatar', response.data.avatar)
                    if(response.data.avatar.indexOf('a_') > -1){
                        localStorage.setItem("avatarLink", 
                                'https://cdn.discordapp.com/avatars/' +
                                localStorage.getItem('userId') + '/'+
                                localStorage.getItem('avatar') + '.gif' 
                        )
                    }else {
                        localStorage.setItem("avatarLink", 
                            'https://cdn.discordapp.com/avatars/' +
                            localStorage.getItem('userId') + '/'+
                            localStorage.getItem('avatar') + '.png'  
                        )
                    }
                    setAvatarLink(localStorage.getItem('avatarLink'));
                }
            });
        }
    }
    getCode();

    return (
        <>
            <LoggedInNav avatar={avatarLink}/>
            {userExists ? <DashHero expiration={localStorage.getItem('expiration')} license={localStorage.getItem('ethoskey')}/> :<DashKeyActive />}
            <Footer />
        </>
    )
}

export default DashPage;
