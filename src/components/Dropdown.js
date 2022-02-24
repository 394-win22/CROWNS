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
            aria-controls="products"
            id="products"
          >
            <Typography sx={{ color: "#db8ab4", fontWeight: "bold" }}>
              Products
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
                <Grid container>
                    {data.shampoos.map((e, index) => {
                        return (
                            <Grid item xs={6} sm={6} md={4} key={index} sx={{ p: 1.5 }} >
                                <img style={{ width: `${100}%`, height: 'auto' }} src={"./images/goals/" + e.image} alt={``} />
                                <Typography sx={{ color: "black", fontWeight: "300", fontSize: "0.6rem"}}>
                                    {e.title}
                                </Typography>
                                <Typography sx={{ color: "black", fontWeight: "bold", fontSize: "0.6rem" }}>
                                    By: {e.brand}
                                </Typography>
                            </Grid>)
                    })}
                </Grid>
                <Grid container spacing={{ xs: 0.5 }}>
                    {data.conditioners.map((e, index) => {
                        return (
                            <Grid item xs={6} sm={6} md={4} key={index} >
                                <img style={{ width: `${100}%`, height: 'auto' }} src={"./images/goals/" + e.image} alt={``} />
                            </Grid>)
                    })}
                </Grid>
                <Grid container spacing={{ xs: 0.5 }}>
                    {data.leaveIns.map((e, index) => {
                        return (
                            <Grid item xs={6} sm={6} md={4} key={index} >
                                <img style={{ width: `${100}%`, height: 'auto' }} src={"./images/goals/" + e.image} alt={``} />
                            </Grid>)
                    })}
                </Grid>
          </AccordionDetails>
        </Accordion>
    )
}

export default Dropdown;