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
import { red, orange, yellow, green, blue, purple } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import "@fontsource/raleway";
import { crownsPinkLight, crownsPink } from "../styles/quizStyling";
import Grid from '@mui/material/Grid';
import { products } from "../data/Products";
import "@fontsource/raleway";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@mui/material/Container';
import post_data from '../data/Post';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


const colors = [red[500], orange[500], yellow[500], green[500], blue[500], purple[500],
                red[200], orange[300], yellow[800], green[200], blue[300], purple[700]];


const DiscussionCard = ({ data, index }) => {

    return (
        <Card sx={{ marginTop: "1rem", border: 1, borderColor: "lightgrey"}}>
            <CardHeader
                sx={{ textAlign: "left" }}
                avatar={
                    <Avatar sx={{ bgcolor: colors[index % colors.length] }} aria-label="recipe">
                        {data.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={<b>{data.title}</b>}
                subheader={data.date}
            />
            {/*<CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="How to better style my hair, pls help!!"
            />*/}
            
            <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="body2" color="text.secondary">
                    {data.content}
                </Typography>
            </CardContent>
            {data.tags && 
            <Stack direction="row" spacing={0} sx={{px: 2, alignItems: 'flex-start', flexWrap: "wrap"}}>
                {data.tags.map((tag, i) => {
                    return (<Chip label={tag} key={i} sx={{m: 0.5}}/>)
                })}
            </Stack>
            }
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <CommentIcon />
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
    console.log(post_data);
    return (

        <Container sx={{pb: '65px'}}>

        <Typography variant="h3" fontWeight="bold" sx={{fontFamily: "Raleway", my:4}}>Community Board</Typography>
            <Container maxWidth="sm">
                <Grid columns={1} sx={{ alignItems: "center" }}>
                    {
                        post_data.map((data, index) =>
                        {
                            return (
                            <Grid item key={index}>
                                <DiscussionCard data={data} index={index}></DiscussionCard>
                                </Grid>)
                        }
                        )
                    
                    }
                   
                </Grid>
        </Container>
        </Container>
    )
}

export default Community;