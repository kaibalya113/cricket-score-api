import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react';

const AppMenu = () =>{
    return(
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit">
                        <MenuIcon/>
                    </IconButton>
                    <Typography>Live</Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default AppMenu;