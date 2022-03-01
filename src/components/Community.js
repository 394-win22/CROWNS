import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "@fontsource/raleway";
import { crownsPinkLight, crownsPink } from "../styles/quizStyling";
import Grid from '@mui/material/Grid';
import { products } from "../data/Products";
import "@fontsource/raleway";
import { makeStyles } from "@material-ui/core/styles";


const DiscussionCard = () => {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Clara"
                subheader="March 1, 2022"
            />
            <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="How to better style my hair, pls help!!"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Hi all! I am trying to style my hair in better curls, any tips?
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
            </Card>
    )
}

const Community = () => {

  const useStyles = makeStyles({
    content: {
      justifyContent: "center"
    }
  });
  const classes = useStyles();

    return (

        <div>

        <Typography variant="h3" fontWeight="bold" sx={{fontFamily: "Raleway", my:4}}>Community Board</Typography>

        <Grid columns={1}>
           <Grid item>
                <DiscussionCard></DiscussionCard>
            </Grid>
           <Grid item>
                 <DiscussionCard></DiscussionCard>
            </Grid>
           <Grid item>
                <DiscussionCard></DiscussionCard>
            </Grid>
        </Grid>

        </div>
    )
}

export default Community;