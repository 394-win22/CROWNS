import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import "@fontsource/raleway";
import { crownsPinkLight, crownsPink } from "../styles/quizStyling";
import { signOut, useUserState, useUser } from '../utilities/firebase';
import { signInWithGoogle, setUser } from "../utilities/firebase";
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

const accountButtonStyle = {
    width: "100%",
    color: 'white',
    backgroundColor: "#D2691E",
    fontFamily: 'Raleway',
    margin: "1rem 0",
    '&:hover': {
        backgroundColor: '#F2AFAF',
        color: 'white',
    },
};

const style = {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "480px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

const Profile = ({ hairType, setHairType }) => {
    const [open, setOpen] = useState(false);
    const [user] = useUserState();
    const [data, loading, ] = useUser("users", user?.uid);
    const [name, setName] = useState(data?.userName);

    useEffect(() => {
        if (data) setName(data.userName)
    }, [data])

    const navigate = useNavigate();

    const onSubmit = async () => {
        const newUserData = {
            userName: name,
        }

        setUser(user.uid, newUserData)
    };

    const onRequiz = async () => {
        const resetUserData = {
            hairType: "",
        }
        setHairType(null)
        await setUser(user.uid, resetUserData)
        navigate("/")
    }


    if (!data && !loading)
        return (<Container maxWidth="sm" sx={{ pb: '60px', alignItems: 'center', height: "100%" }}>
            <Navbar hairTypeCode={hairType?.code} />

            <Typography variant="h3" fontWeight="bold" sx={{ fontFamily: "Raleway", my: 4 }}>Profile</Typography>
            <Typography>Please login to view your profile</Typography>
            <Button onClick={() => { signInWithGoogle(); }} variant="contained" size="large" defaultValue={30} sx={accountButtonStyle} >
                {"Join Our Community!"}
            </Button>
        </Container>)
    else
        return (<Container maxWidth="sm" sx={{ pb: '60px' }}>
            <Navbar hairTypeCode={data?.hairType} />
            {user && <Grid sx={{ position: "absolute", right: 0, top: 0, paddingRight: "0.5rem", cursor: "pointer" }} onClick={() => { signOut(navigate); setHairType(null) }}>
                <div style={{ float: "right", color: "black" }}>
                    <img src={"../images/goals/type4/goals/Crown Icon.png"}
                        style={{ width: "3rem" }}
                        alt={"Sign Out"} />
                    <div style={{ width: "5rem" }}>
                        Sign Out
                    </div>
                </div>
            </Grid>}
            <Typography variant="h3" fontWeight="bold" sx={{ fontFamily: "Raleway", my: 4 }}>Profile</Typography>
            <Card sx={{ m: 1, border: 4, borderColor: crownsPink, backgroundColor: crownsPinkLight }}>
                <CardContent>
                    <CardMedia component="img" src={user?.photoURL} alt="your profile picture" loading="lazy"
                        sx={{ width: 'auto', maxHeight: '40vh', objectFit: "contain", mb: 1, mx: 'auto', border: 2, borderColor: crownsPink }} />
                    <Typography variant="h5" fontWeight="bold" data-testid="name-str" sx={{ fontFamily: "Raleway" }}>{name}</Typography>
                    <Typography variant="h5" sx={{ fontFamily: "Raleway" }}>Your Hair Type: {data?.hairType}</Typography>
                </CardContent>
            </Card>
            <Button onClick={() => { setOpen(true) }} variant="contained" size="large" defaultValue={30} sx={accountButtonStyle} >
                {"Edit Your Profile"}
            </Button>

            <Button onClick={() => { onRequiz() }} variant="contained" size="large" defaultValue={30} sx={accountButtonStyle} >
                {"Take the Quiz Again"}
            </Button>

            <Modal open={open} onClose={() => { setOpen(false); setName(data?.userName) }} sx={{ margin: "auto" }} >
                <Grid container spacing={1} sx={style}>
                    <Grid item xs={8}>
                        <h1>Edit Profile</h1>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            label="Username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Button onClick={() => { onSubmit(); setOpen(false) }} sx={accountButtonStyle}>Submit Changes</Button>
                    </Grid>
                </Grid>
            </Modal>
        </Container>)
}

export default Profile;