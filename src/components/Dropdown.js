import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { products_info_data } from "../data/ProductsInfo";

const Dropdown = ( {hairType}) => { 
    const data = products_info_data[hairType];
    
    return (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="stylists"
            id="stylists"
          >
            <Typography sx={{ color: "#db8ab4", fontWeight: "bold" }}>
              Stylists
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={{ xs: 0.5}}>
                <Grid item xs={4} sm={4} md={4} key={0} >
                    <img style={{ width: `${100}%`, height: 'auto' }} src={""} alt={``} />
                </Grid>   
            </Grid>
          </AccordionDetails>
        </Accordion>
    )
}

export default Dropdown;