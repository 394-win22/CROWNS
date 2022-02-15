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
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

import { all_types } from '../data/HairTypes';

const ResultsPage = ({hairType}) => {
    console.log("navigated to results page");

    // TODO: Remove this after dev
    if (!hairType) {
        hairType = all_types[0].subtypes[0];
        console.log("Fixed null");
    }

    const font = {
        color: '#db8ab4',
        fontFamily: 'Aileron',
    };

    const resourceButton = {
        m: "0.5rem",
        borderRadius: "0.5em"
    };


    return (
        <div className="ResultsPage" style={font}>
        <img src={hairType.exampleImage} alt={`Example of ${hairType.shortDescription}`} />
        <Typography variant="h6">Your Hair Type: </Typography>
        <Typography variant="h4" sx={{fontWeight: "bold"}}>{hairType.shortDescription}</Typography>
        <Typography variant="body1">{hairType.longDescription}</Typography>

        {/* const dividerStyle = {{
            backgroundColor: "#F1CCD3", 
            fontFamily: 'Aileron'
            }}; */}

       
        
        <Divider sx={{ my: "1rem" }}>
        <Chip label="Personalized Help" />
        </Divider>
        
        <Container sx={{maxWidth: "24rem"}}>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="stylists"
                id="stylists"
            >
            <Typography sx={{color: '#db8ab4',fontWeight: "bold"}}>Stylists</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton selected="True" sx={resourceButton} component="a" target="_blank" href="http://www.google.com">
                            <ListItemText primary="James Salon"  />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton selected="True" sx={resourceButton} component="a" target="_blank" href="http://www.northwestern.edu">
                            <ListItemText primary="We Do Hair"  />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton selected="True" sx={resourceButton} component="a" target="_blank" href="http://www.stackoverflow.com">
                            <ListItemText primary="Curls Boutique"  />
                        </ListItemButton>
                    </ListItem>
                </List>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="products"
                id="products"
            >
            <Typography sx={{color: '#db8ab4',fontWeight: "bold"}}>Products</Typography>
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
                aria-controls="resources"
                id="resources"
            >
            <Typography sx={{color: '#db8ab4',fontWeight: "bold"}}>Resources</Typography>
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