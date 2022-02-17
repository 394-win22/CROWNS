import React from "react";
import Stack  from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Logo from '../images/CROWNSLOGO.png';
import { useNavigate } from "react-router-dom";
import "@fontsource/aileron";
import "@fontsource/caveat";
import "@fontsource/raleway";

const LandingPage = () => {
    console.log("navigated to landing page");
    let navigate = useNavigate(); 


    const buttonStyle = {
        width: 300,
        color: 'white', 
        backgroundColor: "#F2AFAF", 
        fontFamily: 'Raleway',
        '&:hover': {
          backgroundColor: '#B28181',
          color: 'white',
        },
    };

    const buttonStyle2 = {
        width: 300,
        color: 'white', 
        backgroundColor: "#B28181", 
        fontFamily: 'Raleway',
        '&:hover': {
          backgroundColor: '#F2AFAF',
          color: 'white',
        },
    };

    const headerStyle = {
        color: 'black',
        fontSize: '3rem',
        fontWeight: 'bold',
        fontFamily: 'Raleway',
        paddingTop: '4rem',
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
                    Hey Girl! Are you ready to embrace your <br></br> hair and take back control? CROWNS <br></br>recommends products, hairstyles, 
                    <br></br>and more to keep your hair healthy and strong!
                </div>

                <div style={{margin: '2rem 0rem'}}>
                    <Button onClick={() => {navigate('/quiz'); }}variant="contained" size="large" defaultValue={30} sx={buttonStyle} > 
                        Find out my hair type! 
                    </Button>
                </div>

                <div >
                    <Button onClick={() => {navigate('/selector'); }}variant="contained" size="large" defaultValue={30} sx={buttonStyle2} > 
                        I know my type!
                    </Button>
                </div>
               
            </Stack>
        </div>
    );
  }
  
  export default LandingPage;