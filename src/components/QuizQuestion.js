import { accordionStyle } from "../styles/quizStyling";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "@fontsource/raleway";
import Grid from "@mui/material/Grid";

const questionTextStyle = {
  fontSize: "2rem",
  fontFamily: "Raleway",
  padding: "1rem",
  fontWeight: "900",
};

const PlainQuizQuestion = ({ question, setResult }) => {
  console.log("Quiz");
  return (
    <Box>
      <Typography align={"center"} sx={questionTextStyle}>
        {question.question}
      </Typography>
      <Grid columns={1}>
        {question.answers.map((answer) => (
          <Grid key={answer.id} item>
            <Button sx={{...accordionStyle, 
              backgroundImage: answer.image ? "url(/images" + answer.image + ')' : null,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'}}
              onClick={() => setResult(answer.id)}>{answer.option}</Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const ImageQuizQuestion = ({ question }) => {
  console.log("Quiz");
  return (
    <Box>
      <Typography align={"center"} sx={questionTextStyle}>
        {question.question}
      </Typography>
      <Grid columns={1}>
        {question.answers.map((answer) => (
          <Grid item>
            <Button sx={accordionStyle}>{answer.option}</Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export { PlainQuizQuestion, ImageQuizQuestion };
