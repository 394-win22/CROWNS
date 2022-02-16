import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { all_types } from '../data/HairTypes';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import "@fontsource/aileron";
import "@fontsource/caveat";
import "@fontsource/raleway";


const HairSubtype = ({ hairSubtype, setHairType }) => {
  let navigate = useNavigate();

  const chooseHairType = (hairType) => {
    setHairType(hairType);
    navigate("/results");
  }

  const cardText = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    ['@media (max-width:430px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '1rem'
    }
  }

  return (
    <Card variant="outlined" onClick={() => chooseHairType(hairSubtype)}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            flexFlow: 'column nowrap', height: '100%', width: '100%', paddingLeft: '1rem'
          }}>
            <Typography sx={cardText}>{hairSubtype.shortDescription}</Typography>
            <Typography>{hairSubtype.longDescription}</Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            paddingLeft: '1rem'
          }}>
            <img style={{ maxWidth: '12rem', width: '100%' }} src={hairSubtype.exampleImage} alt={`Example of ${hairSubtype.shortDescription}`} />
          </div>
        </Grid>
      </Grid>
    </Card>
  )
}
const HairType = ({ hairType, setHairType }) => {

  const accordionStyle = {
    backgroundColor: "#B28181",
    fontFamily: 'Raleway',
    color: 'white',
    '&:hover': {
      backgroundColor: '#F2AFAF',
      color: 'white',
    },
    padding: '1rem',
    margin: '0.5rem 0rem',
    fontSize: '10rem'
  };
  return (
    <Accordion sx=
      {accordionStyle}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{
          fontSize: '2rem',
          fontWeight: '300'
        }}>
          {hairType.categoryDescription}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {hairType.subtypes.map(function(e, index) {return (<HairSubtype key={index.toString()} hairSubtype={e} setHairType={setHairType} />)})}
      </AccordionDetails>
    </Accordion>
  )
}

const HairQuiz = ({ setHairType }) => {
  return (
    <div style={{ maxWidth: 650, display: "inline-block"}}>
      <Typography align={'center'}  sx={{ fontSize: '2rem', fontFamily: 'Raleway', padding: '1rem', fontWeight: '900' }}>
        Choose the type that is most like your Hair
      </Typography>
      {all_types.map(function(e, index) {return (<HairType key={index.toString()} hairType={e} setHairType={setHairType} />)})}
    </div>
  );
}

export default HairQuiz;