import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { all_types } from '../data/HairTypes';


const HairSubtype = ({ hairSubtype }) => {
  return (
    <div>
      <Typography variant="h6">{hairSubtype.shortDescription}</Typography>
      <Typography>{hairSubtype.longDescription}</Typography>
      <img src={hairSubtype.exampleImage} alt={`Example of ${hairSubtype.shortDescription}`} />
    </div>
  )
}
const HairType = ({ hairType }) => {
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
        {hairType.subtypes.map((e) => <HairSubtype hairSubtype={e} />)}
      </AccordionDetails>
    </Accordion>
  )
}

const HairQuiz = () => {
  return (
    <div>
      <Typography align={'center'} variant='h4'>
        Determine Your Hair Type
      </Typography>
      {all_types.map((e) => <HairType hairType={e} />)}
    </div>
  );
}

export default HairQuiz;