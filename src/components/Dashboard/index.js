import React , {useState} from 'react';
import Footer from '../Footer';
import LoggedInNav from '../LoggedInNav';
import DashHero from '../DashHero';
import axios from 'axios';
import Navbar from '../Navbar';

// const passport = require('passport');
// const DiscordStrategy = require('passport-discord').Strategy

const DashPage = () => {
    
    //let userId, email, access, refresh, avi;

    const [userExists, setUserExists] = useState(false);

    let link = window.location.href;
    let code = link.substring(link.indexOf('code=') + 5);

    const params = new URLSearchParams();
    params.append('client_id', process.env.REACT_APP_CLIENT_ID);
    params.append('client_secret', process.env.REACT_APP_CLIENT_SECRET);
    params.append('grant_type', process.env.REACT_APP_AUTH_TYPE);
    params.append('code', code);
    params.append('redirect_uri', 'http://localhost:3000/dashboard');


    if(localStorage.getItem('accessToken') === 'undefined'){
    fetch('https://discord.com/api/oauth2/token', { method: 'POST', body: params })
        .then(res => res.json())
        .then(json => {
            //access = json.access_token;
            //refresh = json.refresh_token;
            localStorage.setItem('accessToken', json.access_token)
        });
    }
    console.log(localStorage)

    let token = "Bearer " + localStorage.getItem('accessToken');
    const authParams = new URLSearchParams();
    authParams.append("Authorization", token);
    authParams.append("Content-Type", "application/x-www-form-urlencoded")
    
    
    // fetch('https://discord.com/api/users/@me', { method: 'PATCH', body: authParams })
    //     .then(res => res.json())
    //     .then(json => {
    //         console.log(json);
    //     });

    

    const stuff = new URLSearchParams();
    stuff.append('Id', "dsdsdsd" );
    stuff.append('Key', process.env.REACT_APP_API_KEY);
    axios({
        method: "post",
        url:
          "http://localhost:8000/users/usercheck",
        data: { Id: "", Key: process.env.REACT_APP_API_KEY },
        headers: { "Content-Type": "application/json" }
      }).then(response => {
        if(response.data.found === true){
            setUserExists(true);
        }
    });

    return (
        <>
            { userExists? <LoggedInNav /> : <Navbar /> }
            <DashHero />
            <Footer />
        </>
    )
}

export default DashPage;
