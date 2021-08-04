import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles, alpha } from '@material-ui/core';
import axios from 'axios';

const useStylesReddit = makeStyles((theme) => ({
    root: {
      width: '175px',
      border: '1px solid white',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: 'transparent',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#D5BBEB',
      },
      '&$focused': {
        backgroundColor: '#D5BBEB ',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0`,
        borderColor: theme.palette.primary.main,
      },
      "& input::placeholder":{
          fontSize:"10px",
          textAlign: "center"
      },
      "& input" : {
          fontSize: "10px",
          fontFamily: "monospace"
      }
    },
    focused: {},
  }));


const KeyActivate = props => {

    const [key, setKey] = useState('');

    const activateKey = async() => {
        await axios({
            method: "post",
            url: "http://localhost:8000/users/activate",
            data: { AccessToken: localStorage.getItem("access_token") , 
                    RefreshToken: localStorage.getItem("refresh_token"), 
                    EthosKey: key,
                    Key: process.env.REACT_APP_API_KEY    
                },
            headers: { "Content-Type" : "application/json" }
        }).then(response => {
            console.log(response);
            if(response.data.activated === true){
                localStorage.setItem('userExists', true);
                localStorage.setItem('keyActive', true);
                window.location.reload();
            }
            if(response.data.activated === false){
                window.alert("error");
            }
        })
    }



   const classes = useStylesReddit();

    return (
        <>
            <TextField
                value={key}
                onChange={(event) => {setKey(event.target.value)}}
                InputProps={{
                    className: classes.root
                  }}
                id="outlined-full-width"
                label=""
                style={{ margin: 8 }}
                placeholder="xxxxx-xxxxx-xxxxx-xxxxx"
                helperText="  "
                fullWidth
                size="small"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                color="primary"
                />

            <Button variant="outlined" color="primary" size="small" onClick={activateKey} paddingRight="100px" >
                Activate
            </Button>
        </>
    )
}


export default KeyActivate;
