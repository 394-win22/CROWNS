import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import IconButton from '@mui/material/IconButton';
import { crownsPink, crownsPinkLight } from '../styles/quizStyling';
import Avatar from '@mui/material/Avatar';

const Navbar = () => { 
    return (
        <AppBar position="fixed"  sx={{ top: 'auto', bottom: 0 , backgroundColor: crownsPinkLight, justifyContent: "space-around"}}>
            <Toolbar>
                <Box sx={{ flexGrow: 0.5 }} />
                <IconButton >
                    <AccountCircleIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1}} />
                <IconButton>
                    <Avatar sx={{ bgcolor: crownsPink }}>4C</Avatar>
                </IconButton>
                <Box sx={{ flexGrow: 1}} />
                <IconButton>
                    <ConnectWithoutContactIcon />
                </IconButton>
                <Box sx={{ flexGrow: 0.5 }} />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;