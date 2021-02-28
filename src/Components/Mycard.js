import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';

const Mycard = ({match}) =>{

    const getMatchCard= ()=>{
        return(
            <Card style={{marginTop:15}}>
            <CardContent>
               <Grid container justify="center" spacing={3} alignItems="center">
                   <Grid item>
                       <Typography varient="h5">{match["team-1"]}</Typography>
                   </Grid>
                   <Grid item>
                       <Typography style={{ marginRight: 16 , marginLeft: 16}}> vs </Typography>
                   </Grid>
                   <Grid item>
                       <Typography varient="h5">{match["team-2"]}</Typography>
                   </Grid>
               </Grid>
            </CardContent>
            <CardActions>
              <Grid container justify="center" spacing={3}>
              <Button variant="contained" style={{marginRight:10}}>Show details</Button>
                <Button variant="contained" style={{marginLeft:10}}> Start time: {new Date(match["dateTimeGMT"]).toLocaleString()}</Button>
              </Grid>
            </CardActions>
        </Card>
        );
    }
    return getMatchCard();
}

export default Mycard;