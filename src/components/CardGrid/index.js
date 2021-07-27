import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton"
import { Typography } from "@material-ui/core";
import DiscordButton from '../../assets/discord.png'


<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 200,
      width: 300,
      background: 'black',
      borderRadius: 10,
      boxShadow: 'red',
      textAlign:'left',
      justifyContent: 'center'
    },
    control: {
      padding: theme.spacing(2)
    },
    typography: {
        display:'flex',
        color: 'gray',
        paddingTop:'25px',
        fontFamily: 'monospace',
        paddingLeft:'25px'
    },
    button: {
        justifyContent: 'center',
        paddingLeft: '70px',
        paddingTop: '20px',
    },
    props: {
        color: 'gray',
        paddingLeft: '25px',
        fontFamily: 'monospace',
        paddingBottom: '40px'
    }
}));


const PaperGrid = props => {

    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    return (
        <>
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={spacing}>
                    <Grid item>
                     <Paper elevation={6} className={classes.paper} >
                        <Typography className={classes.typography}>{props.license}</Typography>
                        <IconButton size='small' className={classes.button}>
                            <img src={DiscordButton}  alt='Join Discord' width="150" height="50" />
                        </IconButton>
                        <Typography className={classes.typography}>{props.expiration}</Typography>
                     </Paper>
                    </Grid>
                    <Grid item>
                     <Paper elevation={6} className={classes.paper} >
                     <Typography className={classes.typography}>TODO: Credit Card Component</Typography>
                     </Paper>
                    </Grid>
                    <Grid item>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default PaperGrid;





