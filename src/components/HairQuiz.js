import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { all_types } from '../data/HairTypes';
import Card from '@mui/material/Card'
import { useNavigate } from 'react-router-dom';


const HairSubtype = ({ hairSubtype, setHairType }) => {
  let navigate = useNavigate(); 
  return (
    <Card variant = "outlined" onClick = {() => {
      setHairType(hairSubtype);
      navigate("/results");
    }}>
      <Typography variant="h6">{hairSubtype.shortDescription}</Typography>
      <Typography>{hairSubtype.longDescription}</Typography>
      <img src={hairSubtype.exampleImage} alt={`Example of ${hairSubtype.shortDescription}`} />
    </Card>
  )
}
const HairType = ({ hairType, setHairType }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography >
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
    <div>
      <Typography align={'center'} variant='h4'>
        Choose the type that is most like your Hair
      </Typography>
      {all_types.map((e) => <HairType hairType={e} setHairType = {setHairType} />)}
    </div>
  );
}

export default HairQuiz;