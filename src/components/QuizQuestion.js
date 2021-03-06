import { gridStyle } from "../styles/quizStyling";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "@fontsource/raleway";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";


const questionTextStyle = {
  fontSize: "2rem",
  fontFamily: "Raleway",
  padding: "1rem",
  fontWeight: "900",
};

// Unused but potentially useful in the future
const PlainQuizQuestion = ({ question, setResult }) => {
  return (
    <Box sx={{ margin: '2rem' }}>
      <Typography align={"center"} sx={questionTextStyle}>
        {question.question}
      </Typography>
      <Grid columns={1}>
        {question.header ? <Grid sx={{
          ...gridStyle,
          backgroundImage: question.header.image ? "url(/images" + question.header.image + ')' : null,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>{question.header.text}</Grid> : null}
        {question.answers.map((answer) => (
          <Grid key={answer.id} item>
            <Button sx={{
              ...gridStyle,
              backgroundImage: answer.image ? "url(/images" + answer.image + ')' : null,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundColor: 'white',
              border: 1,
              borderColor: "black",
              boxShadow: 5
            }}
              onClick={() => setResult(answer.id, answer.weights)}>
              <Grid container spacing={2} columns={2} sx={{ flexFlow: "row", marginRight: "2rem" }}>
                {answer.subImage ? <Grid item xs={4}>
                  <div style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    paddingLeft: '1rem', height: '100%'
                  }}>
                    <img style={{ maxWidth: '12rem', width: '100%', maxHeight: '12rem', borderRadius: '50%', objectFit: 'cover' }} src={"/images" + answer.subImage} alt={answer.option} />
                  </div>
                </Grid> : null}
                <Grid item xs={answer.subImage ? 8 : 12}>
                  <div style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    flexFlow: 'column nowrap', height: '100%', width: '100%', paddingLeft: '1rem'
                  }}>
                    <Typography sx={{
                      fontSize: answer.description ? '1.2rem' : '2rem', textTransform: "none", color: answer.image ? 'white' : 'black'
                    }}>{answer.option}</Typography>
                    <Typography sx={{
                      fontSize: '1rem', textTransform: "none", color: answer.image ? 'white' : 'black'
                    }}>{answer.description}</Typography>
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

const DropdownQuizQuestion = ({ question, setResult, allQuestions }) => {
  return (
    <Box sx={{ margin: '2rem' }}>
      <Typography align={"center"} sx={questionTextStyle}>
        {question.question}
      </Typography>
      <Grid columns={1}>
        {question.header ? <Grid sx={{
          ...gridStyle,
          backgroundImage: question.header.image ? "url(/images" + question.header.image + ')' : null,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>{question.header.text}</Grid> : null}

        {question.answers.map((answer, i) => {
          return (<span key={i}>
            <Grid key={answer.id} item>
              <Accordion>
                <AccordionSummary data-cy={answer.option}
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="products"
                  id="products"
                  sx={{
                    ...gridStyle,
                    backgroundImage: answer.image ? "url(/images" + answer.image + ')' : null,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundColor: 'white',
                    border: 1,
                    borderColor: "black",
                    boxShadow: 5
                  }}
                >
                  <ExpandMoreIcon sx={{ opacity: 0 }} />
                  <Typography sx={{ fontSize: '2rem', textTransform: "none", color: 'white' }}>

                    {answer.option}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {allQuestions[1 + i].answers.map((answer, i) => {
                    return (
                      <Button data-cy={answer.option} key={i}
                        sx={{
                        ...gridStyle,
                        backgroundImage: answer.image ? "url(/images" + answer.image + ')' : null,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundColor: 'white',
                        border: 1,
                        borderColor: "black",
                        boxShadow: 5
                      }}
                        onClick={() => setResult(answer.id, answer.weights)}>
                        <Grid container spacing={2} columns={2} sx={{ flexFlow: "row", marginRight: "2rem" }}>
                          {answer.subImage ? <Grid item xs={4}>
                            <div style={{
                              display: 'flex', justifyContent: 'center', alignItems: 'center',
                              paddingLeft: '1rem', height: '100%'
                            }}>
                              <img style={{ maxWidth: '12rem', width: '100%', maxHeight: '12rem', borderRadius: '50%', objectFit: 'cover' }} src={"/images" + answer.subImage} alt={answer.option} />
                            </div>
                          </Grid> : null}
                          <Grid item xs={answer.subImage ? 8 : 12}>
                            <div style={{
                              display: 'flex', justifyContent: 'center', alignItems: 'center',
                              flexFlow: 'column nowrap', height: '100%', width: '100%', paddingLeft: '1rem'
                            }}>
                              <Typography sx={{
                                fontSize: answer.description ? '1.2rem' : '2rem', textTransform: "none", color: answer.image ? 'white' : 'black'
                              }}>{answer.option}</Typography>
                              <Typography sx={{
                                fontSize: '1rem', textTransform: "none", color: answer.image ? 'white' : 'black'
                              }}>{answer.description}</Typography>
                            </div>
                          </Grid>
                        </Grid>
                      </Button>
                    );
                  }
                  )}

                </AccordionDetails>
              </Accordion>
            </Grid>
          </span>);
        })}

      </Grid>
    </Box>
  );
};

export { PlainQuizQuestion, DropdownQuizQuestion };
