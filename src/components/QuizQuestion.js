import { accordionStyle, gridStyle } from "../styles/quizStyling";
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
                <Button sx={{
                    ...gridStyle, 
              backgroundImage: answer.image ? "url(/images" + answer.image + ')' : null,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundColor: 'white',
                    border: '2px black'
                }}
              onClick={() => setResult(answer.id, answer.weights)}>
              <Grid container spacing={2} columns={2} sx={{flexFlow: "row", marginRight: "2rem"}}>
                {answer.subImage ? <Grid item xs={4}>
                  <div style={{
                     display: 'flex', justifyContent: 'center', alignItems: 'center',
                     paddingLeft: '1rem', height: '100%'
                  }}>
                    <img style={{ maxWidth: '12rem', width: '100%', maxHeight: '12rem', borderRadius: '50%', objectFit: 'cover'}} src={"/images" + answer.subImage} alt={answer.option} />
                  </div>
                </Grid> : null}
                <Grid item xs={answer.subImage ? 8 : 12}>
                  <div style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    flexFlow: 'column nowrap', height: '100%', width: '100%', paddingLeft: '1rem'
                  }}>
                                <Typography sx={{
                                    fontSize: '1.2rem', textTransform: "none", color: answer.image ? 'white' : 'black'}}>{answer.option}</Typography>
                                <Typography sx={{
                                    fontSize: '1rem', textTransform: "none", color: answer.image ? 'white' : 'black'}}>{answer.description}</Typography>
                  </div>
                </Grid>
              </Grid>
            </Button>
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
