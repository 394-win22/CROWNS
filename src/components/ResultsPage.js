import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { gridStyle } from '../styles/quizStyling'
import { ProductsDropdown, Dropdown, CompleteProfileGrid } from "./Dropdown";
import { signOut, useUserState, useUser } from '../utilities/firebase'
import { useNavigate } from "react-router-dom";
import { type_mapping } from "../data/HairTypes"
import { signInWithGoogle} from "../utilities/firebase"
import Button from '@mui/material/Button';
import Navbar from './Navbar';


const ResultsPage = ({ hairType, setHairType, selectedGoals, setSelectedGoals, selectedChallenges, setSelectedChallenges, selectedQuality, setSelectedQuality }) => {

  const navigate = useNavigate();
  const [user] = useUserState();
  const [data, loading, ] = useUser("users", user?.uid);

  if (data && !hairType) {
    hairType = data.hairType
  }

  if (typeof hairType === 'string' && hairType !== "") {
    hairType = type_mapping["_" + hairType]
  }

  if (!hairType) {
    if (!loading) {
      navigate("/")
      return null
    }
    else {
      return (
        <div>Loading . . .</div>
      )
    }
  }


  const font = {
    color: "#db8ab4",
    fontFamily: "Aileron",
  };

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

  return (
    <div>
      <Navbar hairTypeCode={hairType.code} />
      <Container className="ResultsPage" maxWidth="lg" style={font} sx={{ pb: '60px' }}>
        <Grid>
          <Typography sx={{ fontSize: "3rem", color: "black", fontWeight: "bold" }}>CROWNS</Typography>
        </Grid>
        {user && <Grid sx={{ position: "absolute", right: 0, top: 0, paddingRight: "0.5rem", cursor: "pointer" }} onClick={() => { signOut(navigate); setHairType(null) }}>
          <div style={{ float: "right", color: "black" }}>
            <img src={"../images/goals/type4/goals/Crown Icon.png"}
              style={{ width: "3rem" }} 
              alt="Sign Out"/>
            <div style={{ width: "5rem" }}>
              Sign Out
            </div>
          </div>
        </Grid>}
        <Grid sx={{ ...gridStyle, backgroundColor: "#f9b792" }}>
        <Typography data-cy="hairtypeTitle" sx={{ fontSize: "2rem" }}>Your hair type is {hairType.code}</Typography>
        </Grid>
        <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "center", border: 3, borderColor: "black", padding: 1 }}>
          <Grid item xs={5}>
            <img
              style={{ maxHeight: "40vh", maxWidth: "100%" }}
              src={hairType.exampleImage}
              alt={`Example of ${hairType.shortDescription}`}
            />
          </Grid>
          <Grid item xs={7} sx={{ marginLeft: 2 }}>
            <Typography sx={{ color: "black", fontSize: "0.8rem" }}>{hairType.longDescription}</Typography>
          </Grid>
        </Grid>

        {!user && <Grid>
          <Button data-testid="joinButton" onClick={() => { signInWithGoogle(); }} variant="contained" size="large" defaultValue={30} sx={accountButtonStyle} >
            {"Join Our Community!"}
          </Button>
        </Grid>}

        {data && <Dropdown title={"Complete Your Profile"}>
          <CompleteProfileGrid user={user} selectedGoals={selectedGoals} setSelectedGoals={setSelectedGoals}
            selectedChallenges={selectedChallenges} setSelectedChallenges={setSelectedChallenges}
            selectedQuality={selectedQuality} setSelectedQuality={setSelectedQuality} />
        </Dropdown>}
        <ProductsDropdown hairType={"_" + hairType.code} category=""/>

        <Dropdown title={"Stylists"} bgcolor={"lightGray"}>
          <Typography sx={{ fontWeight: "bold", color: "#333333", fontFamily: "Raleway", fontStyle: "italic" }}>Coming Soon...</Typography>
        </Dropdown>

        <Dropdown title={"Hairstyles"} bgcolor={"lightGray"}>
          <Typography sx={{ fontWeight: "bold", color: "#333333", fontFamily: "Raleway", fontStyle: "italic" }}>Coming Soon...</Typography>
        </Dropdown>
      </Container>
    </div>
  );
};

export default ResultsPage;
