import React from "react";
import Stack  from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Logo from '../images/CROWNSLOGO.png';
//import Background from '../images/landing-page-background.jpg';
import { useNavigate } from "react-router-dom";
import "@fontsource/aileron";
import "@fontsource/caveat";
import "@fontsource/raleway";
import { CoverageMap } from "istanbul-lib-coverage";
import { signInWithGoogle, uploadUser, useUserState } from "../utilities/firebase"


const SignIn = () =>{
    signInWithGoogle();
}

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

    const buttonStyle3 = {
        width: 150,
        color: 'white',
        backgroundColor: "#D2691E",
        fontFamily: 'Raleway',
        '&:hover': {
            backgroundColor: '#F2AFAF',
            color: 'white',
        },
    };

    const headerStyle = {
        color: 'white',
        fontSize: '3rem',
        fontWeight: 'bold',
        fontFamily: 'Raleway',
        //paddingTop: '2rem',
        //paddingBottom: '20rem',
        paddingTop: '4rem',
        paddingBottom: '3rem'
      };

    return (
        <div className="LandingPage" style={{
            // position: 'absolute', left: '50%', top: '45%',
            // transform: 'translate(-50%, -50%)'
            backgroundImage: "url(./images/landing-page-background.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            //height: "100%"
            backgroundPosition: '50%'
        }}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0}
                height="100vh"
            >
                <div style={headerStyle}>
                    CROWNS
                </div>
                {/* <div>
                    <img style={{maxWidth: '20rem'}} src={Logo} alt=''/>
                </div> */}
                <div style={{
                    fontFamily: 'Raleway', fontSize: '1.25rem', color: 'white', paddingBottom: '2rem', display: 'inline-block', margin: '10px 15px', maxWidth: '40rem'}}>
                    Are you ready to embrace your hair and take back control? Crowns recommends products, hairstyles, and stylists to guide you on your hair journey to strong,
                    healthy hair! Share your experiences alongside our Crown community. Join our community today.
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
                <div style={{ margin: '2rem 0rem', display: 'flex' }}>
                    <Button onClick={() => { SignIn(); }} variant="contained" size="large" defaultValue={30} sx={buttonStyle3} >
                        Login
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button onClick={() => { SignIn(); }} variant="contained" size="large" defaultValue={30} sx={buttonStyle3} >
                        Create Account
                    </Button>
                </div>
               
            </Stack>
        </div>
    );
  }
  
  export default LandingPage;