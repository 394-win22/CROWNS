import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { Box, ThemeProvider } from '@mui/system';
import Container from '@mui/material/Container';

const ResultsPage = ({hairType}) => {
    console.log("navigated to results page");


    return (
        <div className="ResultsPage">
        <img src={hairType.exampleImage} alt={`Example of ${hairType.shortDescription}`} />
        <Typography variant="h6">Your Hair Type: </Typography>
        <Typography variant="h4">{hairType.shortDescription}</Typography>
        <Typography variant="body1">{hairType.longDescription}</Typography>

        {/* const dividerStyle = {{
            backgroundColor: "#F1CCD3", 
            fontFamily: 'Aileron'
            }}; */}
        
        <Divider sx={{ my: "1rem" }}>
        <Chip label="Personalized Help" />
        </Divider>
        
        <Container sx={{maxWidth: "24rem"}}>
        <Accordion >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
            <Typography>Stylists</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
            <Typography>Products</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
            <Typography>Resources</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
        </Container>
        </div>
    );
  }
  
  export default ResultsPage;