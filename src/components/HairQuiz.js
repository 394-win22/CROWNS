import * as React from 'react';
import { useState, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import { type_mapping } from '../data/HairTypes';
import { useNavigate } from 'react-router-dom';
import { quizQuestions } from "../data/Questions"
import { DropdownQuizQuestion } from './QuizQuestion';
import "@fontsource/aileron";
import "@fontsource/caveat";
import "@fontsource/raleway";
import { useUserState, setUser } from '../utilities/firebase.js'
import { headerStyle } from './LandingPage';

const HairQuiz = ({ setHairType }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalWeights, setTotalWeights] = useState({});
  const navigate = useNavigate();
  const [user] = useUserState();


  const finishQuiz = useCallback((weights) => {
    let maxWeight = -1
    let maxKey = null
    Object.keys(weights).forEach(key => {
      if (weights[key] >= maxWeight) {
        maxKey = key
        maxWeight = weights[key]
      }
    })
    setHairType(type_mapping[maxKey])
    
    if (user) setUser(user.uid, { hairType: maxKey.substring(1) })
    navigate("/results")
  }, [navigate, setHairType, user]);

  const setResult = useCallback((res, weights) => {
    let temp2 = { ...totalWeights }
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
    let nextQuestion = 0;

    if (!nextQuestion) {
      finishQuiz(temp2)
    } else {
      setCurrentQuestion(nextQuestion)
    }

  }, [totalWeights, finishQuiz]);

  return (
    <div>
      <Typography sx={{ ...headerStyle, color: 'black' }}>CROWNS</Typography>

      <div style={{ maxWidth: "40rem", width: '100%', display: "inline-block" }} data-cy="quizQuestion">
        <DropdownQuizQuestion setResult={setResult} question={quizQuestions[currentQuestion]} allQuestions={quizQuestions} />
      </div>
    </div>
  );
}

export default HairQuiz;