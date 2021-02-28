import React from 'react';
import './App.css';
import {Button, Grid} from '@material-ui/core'
import {useEffect, useState} from 'react';
import AppMenu from './Components/AppMenu'
import getCricket from './Api/Api'
import Mycard from './Components/Mycard'
function App() {

  const[matches, setMatches] = useState([]);
  useEffect(() => {
    getCricket()
      .then((response) => {
                setMatches(response.matches);
                console.log(response.matches);
              }).catch()
  }, [])
  return (
    <div>
      <AppMenu/>
      <h1>Cricket Live Score</h1>
      <Button>Click</Button>
      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
        {
          matches.map((match) =>(
            <>
              {
                match.date > new Date(match["date"]) ?  
                <Mycard key={match.unique_id} match= {match}/>: <Mycard key={match.unique_id} match= {match}/>
                }
            </>
           
          ))
        }
        </Grid>
      </Grid>
      {/* <Button variant="contained" color="secondary" 
            onClick={() =>  
                getCricket()
                  .then((response) => console.log("data",response))
                    .catch()}> 
  Secondary
</Button>  */}



   </div>
  );
}

export default App;
