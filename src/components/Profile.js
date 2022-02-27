import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import "@fontsource/raleway";
import { crownsPinkLight, crownsPink } from "../styles/quizStyling";

const Profile = () => {
    return (<Container maxWidth="sm" >
        <Typography variant="h3" fontWeight="bold" sx={{fontFamily: "Raleway", my:4}}>Profile</Typography>
        <Card sx={{m: 1, border: 4, borderColor: crownsPink, backgroundColor: crownsPinkLight }}>
            <CardContent>
                <CardMedia component="img" src="./images/hairTypes/2B.jpeg" alt="your profile picture" loading="lazy" 
                sx={{width: 'auto', maxHeight: '40vh', objectFit: "contain", mb: 1, mx: 'auto', border: 2, borderColor: crownsPink}}/>
                <Typography variant="h5" fontWeight="bold" sx={{fontFamily: "Raleway"}}>Your Name</Typography>
                <Typography variant="h5" sx={{fontFamily: "Raleway"}}>Your Hair Type: {"4C"}</Typography>
            </CardContent>
        </Card>
    </Container>)

}

export default Profile;