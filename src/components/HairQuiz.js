import * as React from 'react';
import {useState, useCallback} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { all_types, type_mapping } from '../data/HairTypes';
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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalWeights, setTotalWeights] = useState({});
  const navigate = useNavigate();

  const finishQuiz = useCallback((weights) => {
    console.log("quiz finished");
    let maxWeight = -1
    let maxKey = null
    Object.keys(weights).forEach(key => {
      if (weights[key] >= maxWeight) {
        maxKey = key
        maxWeight = weights[key]
      }
    })
    setHairType(type_mapping[maxKey])
    navigate("/results")
  }, [totalWeights, navigate, setHairType]);

  const setResult = useCallback((res, weights) => {
    let temp2 = {...totalWeights}
    if (weights) {
      Object.keys(weights).forEach(key => {
        if (key in temp2) {
          temp2[key] += weights[key]
        } else {
          temp2[key] = weights[key]
        }
      })
    }
    setTotalWeights(temp2);

    if (currentQuestion === quizQuestions.length - 1) {
      finishQuiz(temp2)
    } else {
      setCurrentQuestion(currentQuestion + 1)
    }
  }, [totalWeights, currentQuestion, finishQuiz]);

  return (
    <div style={{ maxWidth: "40rem", width: '100%', display: "inline-block", paddingBottom: "60px"}}>
      <PlainQuizQuestion setResult = {setResult} question={quizQuestions[currentQuestion]}/>
      
      { /* all_types.map(function(e, index) {return (<HairType key={index.toString()} hairType={e} setHairType={setHairType} />)}) */}

    </div>
  );
}

export default HairQuiz;