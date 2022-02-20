import * as React from 'react';
import {useState, useCallback} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { all_types } from '../data/HairTypes';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { quizQuestions } from "../data/Questions"
import { PlainQuizQuestion, ImageQuizQuestion } from './QuizQuestion';
import {accordionStyle} from "../styles/quizStyling"
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
          <img style={{ maxWidth: '12rem', width: '100%',  height: '10rem' }} src={hairSubtype.exampleImage} alt={`Example of ${hairSubtype.shortDescription}`} />
          </div>
        </Grid>
      </Grid>
    </Card>
  )
}



const HairType = ({ hairType, setHairType }) => {
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
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const setResult = useCallback((res) => {
    let temp = [...results, res];
    setResults(temp);
    if (temp.length === quizQuestions.length) {
      finishQuiz()
    } else {
      setCurrentQuestion(currentQuestion + 1)
    }
  }, [results]);
  
  const finishQuiz = useCallback(() => {
    console.log("quiz finished");
    console.log(results);
    setHairType(all_types[3].subtypes[2])
    navigate("/results")
  }, [results]);

  return (
    <div style={{ maxWidth: "40rem", width: '100%', display: "inline-block"}}>
      <PlainQuizQuestion setResult = {setResult} question={quizQuestions[currentQuestion]}/>
      
      { /* all_types.map(function(e, index) {return (<HairType key={index.toString()} hairType={e} setHairType={setHairType} />)}) */}

    </div>
  );
}

export default HairQuiz;