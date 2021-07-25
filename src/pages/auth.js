import React from 'react';
import { Route } from 'react-router-dom';



require('dotenv').config()


const Auth = () => {

    return (
        <>
            <Route path='/auth' component={() => { 
                window.location.href="https://discord.com/api/oauth2/authorize?client_id=859159867469332521&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdashboard&response_type=code&scope=identify%20email%20guilds%20guilds.join"; 
                return null;
            }}/>
        </>
    )
}

export default Auth;
