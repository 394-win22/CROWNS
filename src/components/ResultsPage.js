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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import { grey } from '@mui/material/colors';
import Popover from '@mui/material/Popover';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

import { all_types } from '../data/HairTypes';
import { goals_info_data } from '../data/GoalsInfo'

const GoalGallery = ({ tiles }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [t, setT] = React.useState(null);
    const handleClick = (event, tempt) => {
        setAnchorEl(event.currentTarget);
        setT(tempt);
        console.log(t);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <ImageList variant="masonry" cols={2} sx={{ mx: "1rem" }} gap={8}>
        {tiles.map((tile, i) => 
            <ImageListItem rows={4} key={i} sx={{/* maxHeight: "24rem", minHeight: "20rem" /*maxWidth: "16rem"*/}}>
                {tile.image ? <img 
                    src={"./images/goals/" + tile.image}
                    alt={tile.title}
                    loading="lazy"
                /> : <Typography>{tile.moreInfo}</Typography>
                }
                
                <ImageListItemBar
                    title={tile.title}
                    subtitle={tile.moreInfo}
                    actionIcon={tile.link ? <IconButton sx={{ color: grey[300] }} target="_blank" href={tile.link}><OpenInNewOutlinedIcon /></IconButton> : null}
                    onClick={(e) => handleClick(e, tile)}
                />
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <Typography sx={{ p: 2 }}></Typography>
                  </Popover>
            </ImageListItem>)}
    </ImageList>);
}

const GoalGrid = ({ tiles }) => {
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };
    // const open = Boolean(anchorEl);
    // const id = open ? 'simple-popover' : undefined;

    return (
        <Grid container spacing={1} sx = {{px: "0.5rem"}}>
        {tiles.map((tile, i) => 
            <Grid item xs={6} sx={{/* maxHeight: "24rem", minHeight: "20rem" /*maxWidth: "16rem"*/}}>
            <Card sx={{ maxHeight: "24rem"}}>
                {tile.image ? <CardMedia  
                    component="img"
                    image={"./images/goals/" + tile.image}
                    alt={tile.title}
                    loading="lazy"
                /> : null }

                <CardContent> 
                    <Typography variant="h6"> {tile.title}</Typography>
                    <Typography variant="body1"> {tile.moreInfo}</Typography>
                    
                </CardContent>
                {tile.link? <CardActions>
                    <Button target="_blank" href={tile.link}>Learn More</Button>
                </CardActions> : null}
                {/* <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                  </Popover> */}
            </Card>
            </Grid>
            )}
    </Grid>);
}



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
        <img style={{maxHeight: 400}} src={hairType.exampleImage} alt={`Example of ${hairType.shortDescription}`} />
        <Typography variant="h6">Your Hair Type: </Typography>
        <Typography variant="h4" sx={{fontWeight: "bold"}}>{hairType.shortDescription}</Typography>
        <Typography variant="body1">{hairType.longDescription}</Typography>

        {/* const dividerStyle = {{
            backgroundColor: "#F1CCD3", 
            fontFamily: 'Aileron'
            }}; */}
        <Divider sx={{ my: "1rem" }}>
        <Chip label="Let's reach your goals" />
        </Divider>

        {Object.keys(goals_info_data).map(key => 
            <div key={key}>
                <Typography variant="h5">{key}</Typography>
                <Typography variant="h6">{goals_info_data[key].description}</Typography>
                {/* <GoalGallery tiles={goals_info_data[key].tiles}/>
                <Divider sx={{ my: "1rem" }}>
                <Chip label="diff components" />
                </Divider> */}
                <GoalGrid tiles={goals_info_data[key].tiles} />
            </div>
        )}
         {/*
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
        </Container> */}
        </div>
    );
  }
  
  export default ResultsPage;