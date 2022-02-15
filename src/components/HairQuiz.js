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


const HairSubtype = ({ hairSubtype, setHairType }) => {
  let navigate = useNavigate(); 

  const chooseHairType = (hairType) => {
    setHairType(hairType);
    navigate("/results");
  }

  return (
    <Card variant="outlined" onClick={() => chooseHairType(hairSubtype)}>
          <Grid container spacing={2}>
              <Grid item xs={6}>
                  <div style={{
                      display: 'flex', justifyContent: 'center', alignItems: 'center',
                      flexFlow: 'column nowrap', height: '100%', width: '100%', paddingLeft: '1rem'
                  }}>
            <Typography variant="h6"><b>{hairSubtype.shortDescription}</b></Typography>
            <Typography>{hairSubtype.longDescription}</Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
                  <div style={{
                      display: 'flex', justifyContent: 'center', alignItems: 'center',
                     paddingLeft: '1rem'
                  }}>
            <img style={{maxWidth: '12rem'}} src={hairSubtype.exampleImage} alt={`Example of ${hairSubtype.shortDescription}`} />
          </div>
        </Grid>
      </Grid>
    </Card>
  )
}
const HairType = ({ hairType, setHairType }) => {

    const accordionStyle = {
        backgroundColor: "#B28181",
        fontFamily: 'Aileron',
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
                <Typography sx={{ fontSize: '2rem' }}>
          {hairType.categoryDescription}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {hairType.subtypes.map((e) => <HairSubtype hairSubtype={e} setHairType = {setHairType} />)}
      </AccordionDetails>
    </Accordion>
  )
}

const HairQuiz = ({ setHairType }) => {
  return (
    <div style={{maxWidth: 650, display: "inline-block"}}>
      <Typography align={'center'} variant='h4'>
        Choose the type that is most like your Hair
      </Typography>
      {all_types.map((e) => <HairType hairType={e} setHairType = {setHairType} />)}
    </div>
  );
}

export default HairQuiz;