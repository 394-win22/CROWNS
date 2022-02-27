import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import IconButton from '@mui/material/IconButton';
import { crownsPink, crownsPinkLight } from '../styles/quizStyling';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";


const Navbar = () => {

    let navigate = useNavigate();

    return (
        <AppBar position="fixed"  sx={{ top: 'auto', bottom: 0 , backgroundColor: crownsPinkLight, justifyContent: "space-around"}}>
            <Toolbar>
                <Box sx={{ flexGrow: 0.5 }} />
                <IconButton size = 'large' onClick={() => { navigate('/quiz'); }}>
                    <AccountCircleIcon fontSize = 'inherit'/>
                </IconButton>
                <Box sx={{ flexGrow: 1}} />
                <IconButton onClick={() => { navigate('/results'); }}>
                    <Avatar sx={{ bgcolor: crownsPink }}>4A</Avatar>
                </IconButton>
                <Box sx={{ flexGrow: 1}} />
                <IconButton size='large' onClick={() => { navigate('/quiz'); }}>
                    <ConnectWithoutContactIcon fontSize = 'inherit'/>
                </IconButton>
                <Box sx={{ flexGrow: 0.5 }} />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;