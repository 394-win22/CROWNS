import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ToggleButton from '@mui/material/ToggleButton';
import Button from '@mui/material/Button';
import { products } from "../data/Products";
import "@fontsource/raleway";
import { makeStyles } from "@material-ui/core/styles";
import { crownsPink } from "../styles/quizStyling";

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { setUser, useUser } from "../utilities/firebase"


const InnerGrid = ({ data, subsection }) => {
  if (data[subsection].length === 0) return null
  return (
    <Grid container>
      {data[subsection].map((e, index) => {
        return (
          <Grid item xs={6} sm={6} md={4} key={index} sx={{ p: 1.5 }}>
            <img data-cy="product_image"
              style={{ width: "50%", height: "auto" }}
              src={"./images/goals/productImages/" + e.image}
              alt={``}
            />
            <Typography
              sx={{
                color: "black",
                fontWeight: "300",
                fontSize: "0.8rem",
              }}
            >
              {e.title}
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontWeight: "bold",
                fontSize: "0.8rem",
              }}
            >
              {e.price}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}

const CompleteProfileGrid = ({ user, selectedGoals, setSelectedGoals, selectedChallenges, setSelectedChallenges, selectedQuality, setSelectedQuality }) => {
  const subsections = ["Goals", "Challenges", "Quality"];
  const sectionItems = {
    "Goals": ["Strength", "Softness", "Growth", "Hydration", "Volume", "Tame my frizz", "Shine"],
    "Challenges": ["Color damage", "Very dry", "Breakage", "Split ends", "Tangles easily"],
    "Quality": ["Color damage", "Breakage", "Tangles easily"]
  }

  const [data, , ] = useUser("users", user?.uid);

  const [uploadAlert, setUploadAlert] = useState(false);

  useEffect(() => {
    if (data) {
      if (data.goals) setSelectedGoals(data.goals);
      if (data.challenges) setSelectedChallenges(data.challenges);
      if (data.quality) setSelectedQuality(data.quality);
    }
  }, [data, setSelectedGoals, setSelectedChallenges, setSelectedQuality])

  const onSubmit = async () => {
    if (user) {
      setUploadAlert(true);
      
      const newUserData = {
        goals: selectedGoals,
        challenges: selectedChallenges,
        quality: selectedQuality,
      }
      setUser(user.uid, newUserData)
    }
  };


  const handleToggle = (subsection, name) => {
    switch (subsection) {
      case "Goals":
        if (selectedGoals.includes(name)) {
          setSelectedGoals(selectedGoals.filter(e => e !== name));
        } else {
          setSelectedGoals(selectedGoals.concat([name]));
        }
        break;
      case "Challenges":
        if (selectedChallenges.includes(name)) {
          setSelectedChallenges(selectedChallenges.filter(e => e !== name));
        } else {
          setSelectedChallenges(selectedChallenges.concat([name]));
        }
        break;
      case "Quality":
        if (selectedQuality.includes(name)) {
          setSelectedQuality(selectedQuality.filter(e => e !== name));
        } else {
          setSelectedQuality(selectedQuality.concat([name]));
        }
        break;
      default:
        return;
    }
  }

  const checkIfToggled = (subsection, name) => {
    switch (subsection) {
      case "Goals":
        return selectedGoals.includes(name);
      case "Challenges":
        return selectedChallenges.includes(name);
      case "Quality":
        return selectedQuality.includes(name);
      default:
        return;
    }
  }
  const buttonStyle = {
    width: '10rem',
    color: 'white',
    backgroundColor: "#F2AFAF",
    fontFamily: 'Raleway',
    '&:hover': {
      backgroundColor: '#B28181',
      color: 'white',
    },
  };



  return (
    <>
      <Grid container>
        {subsections.map((subsection, i) => {
          return (
            <span key={i}>
              <Grid item xs={12} sx={{ alignItems: 'flex-end' }}>
                <Typography variant="h6">
                  {subsection}
                </Typography>
              </Grid>
              {sectionItems[subsection].map((name, i) => {
                return (

                  <Grid item xs={4} key={i} sx={{ padding: '0.5rem 0rem' }}>
                    <ToggleButton
                      value="check"
                      size="small"
                      sx={{ width: '6rem', height: '3rem' }}
                      selected={checkIfToggled(subsection, name)}
                      onClick={() => handleToggle(subsection, name)}
                    >
                      {name}
                    </ToggleButton>
                  </Grid>
                );
              })}

            </span>);
        })}
        <Snackbar open={uploadAlert} onClose={() => setUploadAlert(false)} autoHideDuration={2000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity="success" >Profile upload successful</Alert>
        </Snackbar>
        <Grid item xs={12} sx={{ alignItems: 'flex-end', paddingTop: "10px" }}>
          <Button variant="contained" sx={buttonStyle} onClick={onSubmit}>Submit</Button>
        </Grid>
      </Grid>
    </>
  );
}

const ProductsCategory = ({ data }) => {
  const subsections = Object.keys(data);

  return <>
    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
      {data["description"]}
    </Typography>
    {
      subsections.map((ss, i) =>
        Array.isArray(data[ss]) ? <InnerGrid data={data} subsection={ss} key={i} /> : null)
    }
  </>
}

const Dropdown = ({ category, hairType, content, title, bgcolor, children }) => {
  const useStyles = makeStyles({
    content: {
      justifyContent: "center"
    }
  });
  const classes = useStyles();

  return (
    <Accordion data-cy="dropdowns">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        aria-controls="products"
        id="products"
        classes={{ content: classes.content }}
        sx={{
          backgroundColor: crownsPink,
        }}
      >
        <ExpandMoreIcon sx={{ color: crownsPink }} />
        <Typography
          variant="h5"
          sx={{ color: "white", fontFamily: "Raleway" }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{ border: 4, borderTop: 0, borderColor: crownsPink, backgroundColor: bgcolor ?? 'white' }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  );
}

const ProductsDropdown = ({ category, hairType }) => {
  const data = products[hairType];
  if (!data) return null

  return <Dropdown category={category} hairType={hairType} title={"Products"}><ProductsCategory data={data} /></Dropdown>;
}

export { Dropdown, ProductsDropdown, CompleteProfileGrid };