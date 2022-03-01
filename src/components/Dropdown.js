import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { products } from "../data/Products";
import "@fontsource/raleway";
import { makeStyles } from "@material-ui/core/styles";
import { crownsPink } from "../styles/quizStyling";

const formattedKeyNames = {
  conditioners: "Conditioners",
  leaveIns: "Leave Ins",
  shampoos: "Shampoos"
}

const InnerGrid = ({ data, subsection }) => {
  if (data[subsection].length === 0) return null
  return (
    <Grid container>
      <Grid item xs={12} sx={{alignItems: 'flex-end'}}>
        <Typography variant="h6">
          {formattedKeyNames[subsection]}
        </Typography>
      </Grid>
      {data[subsection].map((e, index) => {
        return (
          <Grid item xs={6} sm={6} md={4} key={index} sx={{ p: 1.5 }}>
            <img
              style={{ width: `${100}%`, height: "auto" }}
              src={"./images/goals/" + e.image}
              alt={``}
            />
            <Typography
              sx={{
                color: "black",
                fontWeight: "300",
                fontSize: "0.8rem",
              }}
            >
              {e.title}
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontWeight: "bold",
                fontSize: "0.8rem",
              }}
            >
              By: {e.brand}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}

const ProductsCategory = ({ data }) => {
  const subsections = Object.keys(data);

  return <>
    <Typography variant="h5">
      {data["description"]}
    </Typography>
    {
      subsections.map(ss =>
        Array.isArray(data[ss]) ? <InnerGrid data={data} subsection={ss} /> : null)
    }
  </>
}

const Dropdown = ({ category, hairType, content }) => {



  const useStyles = makeStyles({
    content: {
      justifyContent: "center"
    }
  });
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        aria-controls="products"
        id="products"
        classes={{ content: classes.content }}
        sx={{
          backgroundColor: crownsPink,
        }}
      >
        <ExpandMoreIcon sx={{ color: crownsPink }} />
        <Typography
          variant="h5"
          sx={{ color: "white", fontFamily: "Raleway" }}
        >
          Products
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{ border: 4, borderTop: 0, borderColor: crownsPink }}
      >
        {content}
      </AccordionDetails>
    </Accordion>
  );
}

const ProductsDropdown = ({ category, hairType }) => {
  const data = products[hairType];
  if (!data) return null
  const content = <ProductsCategory data={data} />;

  return <Dropdown category={category} hairType={hairType} content={content} />;
}

export { Dropdown, ProductsDropdown };