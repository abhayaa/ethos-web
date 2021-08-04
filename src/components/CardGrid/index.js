import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";
import DiscordButton from '../../assets/discord.png';
import EditIcon from '@material-ui/icons/Edit';


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
    },
    control: {
      padding: theme.spacing(2)
    },
    typography: {
        display:'flex',
        color: '#D8D6DB',
        fontFamily: 'monospace',
        fontSize: '15px',
        paddingLeft:'10px'
    },
    button: {
        justifyContent: 'center',
        paddingLeft: '70px',
        paddingTop: '10px',
    },
    props: {
        color: 'gray',
        paddingLeft: '25px',
        fontFamily: 'monospace',
        paddingBottom: '40px'
    },
    labels: {
        display: 'flex',
        color: 'gray',
        fontSize:'10px',
        paddingLeft: '10px',
        paddingTop: '10px',
        fontFamily: 'monospace'
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
                        <Typography className={classes.labels}>License Key: </Typography>
                        <Typography className={classes.typography}>{props.license}</Typography>

                        <Typography className={classes.labels}>Expiration:  </Typography>
                        <Typography className={classes.typography}>{props.expiration} EST</Typography>

                        <Typography className={classes.labels}>Price:  </Typography>
                        <Typography className={classes.typography}>$xx.xx/mo</Typography>

                        <IconButton size='small' className={classes.button}>
                            <img src={DiscordButton}  alt='Join Discord' width="150" height="50" />
                        </IconButton>
                     </Paper>
                    </Grid>

                    <Grid item>
                     <Paper elevation={6} className={classes.paper} >
                        <Typography className={classes.labels}>Payment: </Typography>
                        <Typography className={classes.typography}></Typography>
                        
                        <Grid item xs={8}>
                            <EditIcon />
                        </Grid>
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





