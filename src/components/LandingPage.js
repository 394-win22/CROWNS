import React from "react";
import Stack  from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Logo from '../images/CROWNSLOGO.png';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "@fontsource/aileron";
import "@fontsource/caveat";

const LandingPage = () => {
    console.log("navigated to landing page");
    let navigate = useNavigate(); 


    const buttonStyle = {
        width: 300,
        color: 'white', 
        backgroundColor: "#F1CCD3", 
        fontFamily: 'Aileron',
        '&:hover': {
          backgroundColor: '#db8ab4',
          color: 'white',
        },
    };

    const headerStyle = {
        color: 'black',
        fontSize: '3rem',
        fontWeight: 'bold',
        fontFamily: 'Aileron',
      };

    return (
        <div className="LandingPage" style={{
            position: 'absolute', left: '50%', top: '45%',
            transform: 'translate(-50%, -50%)'
        }}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0}
            >
                <div style={headerStyle}> 
                   CROWNS
                </div>
                <div>
                    <img style={{maxWidth: '20rem'}} src={Logo} alt=''/>
                </div>
                <div style={{fontFamily: 'Caveat', fontSize: '1.5rem'}}>
                    Hey Girl! Are you ready to embrace <br></br>your hair and take back control?
                </div>

                <div>
                    <Button onClick={() => {navigate('/quiz'); }}variant="contained" size="large" defaultValue={30} sx={buttonStyle} > 
                        Find out my hair type! 
                    </Button>
                </div>
               
            </Stack>
        </div>
    );
  }
  
  export default LandingPage;