import { useEffect } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import "@fontsource/aileron";
import "@fontsource/caveat";
import "@fontsource/raleway";
import { signInWithGoogle, useUserState, useUser, signOut } from "../utilities/firebase"

export const headerStyle = {
    color: 'white',
    fontSize: '3rem',
    fontWeight: 'bold',
    fontFamily: 'Raleway',
    paddingTop: '4rem',
    paddingBottom: '3rem'
};

const LandingPage = ({ setUserData, userData, setHairType, hairType }) => {
    let navigate = useNavigate();
    const [user] = useUserState();
    const [data, , ] = useUser("users", user?.uid);

    useEffect(() => {
        if (data && data.hairType) {
            setHairType(data.hairType)
        }
    }, [data, setHairType])

    useEffect(() => {
        if (hairType) {
            navigate("/results")
        }
    }, [hairType, navigate])

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

    return (
        <div className="LandingPage" style={{
            backgroundImage: "url(./images/landing-page-background.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: '50%'
        }}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0}
                height="100vh"
            >
                <div style={headerStyle} data-cy="title">
                    CROWNS
                </div>
                <div style={{
                    fontFamily: 'Raleway', fontSize: '1.25rem', color: 'white', paddingBottom: '2rem', display: 'inline-block', margin: '10px 40px', maxWidth: '40rem'
                }}>
                    Are you ready to embrace your hair and take back control? Crowns recommends products, hairstyles, and stylists to guide you on your hair journey or strong healthy hair!
                </div>

                <div style={{ margin: '2rem 0rem' }}>
                    <Button onClick={() => { navigate('/quiz'); }} variant="contained" size="large" defaultValue={30} sx={buttonStyle} data-cy="quiz">
                        Find out my hair type!
                    </Button>
                </div>

                <div >
                    <Button onClick={() => { navigate('/selector'); }} variant="contained" size="large" defaultValue={30} sx={buttonStyle2} >
                        I know my type!
                    </Button>
                </div>

                <div style={{ margin: '2rem 0rem', display: 'flex' }}>

                    <Button onClick={user ? () => { signOut() } : () => { signInWithGoogle(); }} variant="contained" size="large" defaultValue={30} sx={buttonStyle3} data-cy="signIn">
                        {user ? "Sign Out" : "Login"}
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                </div>

            </Stack>
        </div>
    );
}

export default LandingPage;