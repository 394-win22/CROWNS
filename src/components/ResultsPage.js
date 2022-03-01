import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { accordionStyle, gridStyle} from '../styles/quizStyling'
import { ProductsDropdown, Dropdown } from "./Dropdown";
import {signOut, useUserState, useUser} from '../utilities/firebase'
import { useNavigate } from "react-router-dom";
import {type_mapping} from "../data/HairTypes"

// const GoalGallery = ({ tiles }) => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [t, setT] = React.useState(null);
//   const handleClick = (event, tempt) => {
//     setAnchorEl(event.currentTarget);
//     setT(tempt);
//     console.log(t);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;

//   return (
//     <ImageList variant="masonry" cols={2} sx={{ mx: "1rem" }} gap={8}>
//       {tiles.map((tile, i) => (
//         <ImageListItem
//           rows={4}
//           key={i}
//           sx={
//             {
//               /* maxHeight: "24rem", minHeight: "20rem" /*maxWidth: "16rem"*/
//             }
//           }
//         >
//           {tile.image ? (
//             <img
//               src={"./images/goals/" + tile.image}
//               alt={tile.title}
//               loading="lazy"
//             />
//           ) : (
//             <Typography>{tile.moreInfo}</Typography>
//           )}

//           <ImageListItemBar
//             title={tile.title}
//             subtitle={tile.moreInfo}
//             actionIcon={
//               tile.link ? (
//                 <IconButton
//                   sx={{ color: grey[300] }}
//                   target="_blank"
//                   href={tile.link}
//                 >
//                   <OpenInNewOutlinedIcon />
//                 </IconButton>
//               ) : null
//             }
//             onClick={(e) => handleClick(e, tile)}
//           />
//           <Popover
//             id={id}
//             open={open}
//             anchorEl={anchorEl}
//             onClose={handleClose}
//             anchorOrigin={{
//               vertical: "bottom",
//               horizontal: "left",
//             }}
//           >
//             <Typography sx={{ p: 2 }}></Typography>
//           </Popover>
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// };

// const GoalGrid = ({ tiles }) => {
//   // const [anchorEl, setAnchorEl] = React.useState(null);
//   // const handleClick = (event) => {
//   //     setAnchorEl(event.currentTarget);
//   // };
//   // const handleClose = () => {
//   //     setAnchorEl(null);
//   // };
//   // const open = Boolean(anchorEl);
//   // const id = open ? 'simple-popover' : undefined;

//   return (
//     <Grid container spacing={1} sx={{ px: "0.5rem" }}>
//       {tiles.map((tile, i) =>
//         <Grid item key={i} xs={6}>
//           <Card sx={{ height: "100%" }}>
//             {tile.image ? (
//               <CardMedia
//                 component="img"
//                 image={"./images/goals/" + tile.image}
//                 alt={tile.title}
//                 sx={{ objectFit: "cover", height: "25vh" }}
//                 loading="lazy"
//               />
//             ) : null}

//             <CardContent>
//               <Typography variant="h6"> {tile.title}</Typography>
//               <Typography variant="body1"> {tile.moreInfo}</Typography>
//             </CardContent>
//             {tile.link ? (
//               <CardActions>
//                 <Button target="_blank" href={tile.link}>
//                   Learn More
//                 </Button>
//               </CardActions>
//             ) : null}
//             </Card>
//             </Grid>
//             )}
//     </Grid>
//     );
// };


// const GoalGridPopover = ({ tiles }) => {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const [t, setT] = React.useState(null);
//     const handleClick = (event, tempt) => {
//         setAnchorEl(event.currentTarget);
//         setT(tempt);
//         console.log(t);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     };
//     const open = Boolean(anchorEl);
//     const id = open ? 'simple-popover' : undefined;

//     return (
//         <Grid container spacing={1} sx={{ px: "0.5rem" }}>
//             {tiles.map((tile, i) =>
//                 <Grid item xs={6} sx={{/* maxHeight: "24rem", minHeight: "20rem" /*maxWidth: "16rem"*/ }} >
//                     <Card sx={{ maxHeight: "24rem" }}>
//                         {tile.image ? <CardMedia
//                             component="img"
//                             image={"./images/goals/" + tile.image}
//                             alt={tile.title}
//                             loading="lazy"
//                         /> : null}

//                         <CardContent onClick={(e) => handleClick(e, tile)}>
//                             <Typography variant="h6"> {tile.title}</Typography>
//                             <Typography variant="body1" > {tile.moreInfo}</Typography>

//                         </CardContent>
//                         {tile.link ? <CardActions>
//                             <Button target="_blank" href={tile.link}>Learn More</Button>
//                         </CardActions> : null}
//                         { <Popover
//                     id={id}
//                     open={open}
//                     anchorEl={anchorEl}
//                     onClose={handleClose}
//                     anchorOrigin={{
//                       vertical: 'bottom',
//                       horizontal: 'left',
//                     }}
//                   >
//                             <Typography sx={{ p: 2 }}>{t==null? "" : t.moreInfo}</Typography>
//                   </Popover> }
//                     </Card>
//                 </Grid>
//             )}
//         </Grid>);
// };


const ResultsPage = ({ hairType, setHairType }) => {
  console.log("navigated to results page");
  const navigate = useNavigate();
  const [user] = useUserState();
  const [data, loading, error] = useUser("users", user?.uid);

  if (data && !hairType) {
    hairType = data.hairType
  }

  if (typeof hairType === 'string' && hairType !== "") {
    hairType = type_mapping["_" + hairType]
  }

  // TODO: Remove this after dev
  if (!hairType) {
    return (
      <div>Loading . . .</div>
    )
  }
  console.log(hairType);

  const font = {
    color: "#db8ab4",
    fontFamily: "Aileron",
  };

  const resourceButton = {
    m: "0.5rem",
    borderRadius: "0.5em",
  };

  return (
    <Container className="ResultsPage" maxWidth="lg" style={font} sx={{pb: '60px'}}>
      <Grid sx={{position: "absolute", right: 0, top: 0, paddingRight: "1rem", background: "white", cursor: "pointer"}} onClick={() => {signOut(navigate); setHairType(null)}}>
        <div style={{float: "right", color: "black"}}>
          <img src={"../images/goals/type4/goals/Crown Icon.png"}
              style={{ width: "3rem"}} />
          <div style={{ width: "5rem"}}>
            Sign Out
          </div>
        </div>
      </Grid>
      <Grid>
        <Typography sx={{fontSize: "3rem", color: "black", fontWeight: "bold"}}>CROWNS</Typography>
      </Grid>
          <Grid sx={{ ...gridStyle, backgroundColor: "#f9b792"}}>
        <Typography sx={{fontSize: "2rem"}}>Your hair type is {hairType.code}</Typography>
      </Grid>
      <Grid sx={{display: "flex", alignItems: "center", justifyContent: "center", border: 3, borderColor: "black", padding: 1}}>
        <Grid item xs={5}>
            <img
            style={{ maxHeight: "40vh", maxWidth: "100%" }}
            src={hairType.exampleImage}
            alt={`Example of ${hairType.shortDescription}`}
          />
        </Grid>
        <Grid item xs={7} sx={{marginLeft: 2}}>
          <Typography sx={{color: "black", fontSize: "0.8rem"}}>{hairType.longDescription}</Typography>
        </Grid>
          </Grid>
      <ProductsDropdown hairType={"_" + hairType.code} category=""/>
      
     {/* <Grid>
              <Accordion>
                  <AccordionSummary
                      aria-controls="products"
                      id="products"
                      sx={{ ...accordionStyle, marginTop: "1rem", flexFlow: "column" }}
                  >
                      <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
                          Goals
                       </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                      
                  </AccordionDetails>
              </Accordion>
    </Grid> */}

    
      
      {/* 
      Divider
      <Divider sx={{ my: "1rem" }}>
        <Chip label="Let's reach your goals" />
      </Divider> 

      {Object.keys(goals_info_data).map((key) => (
        <Box key={key} sx={{ my: "1rem" }}>
          <Typography variant="h5">{key}</Typography>
          <Typography variant="h6" sx={{ mb: "0.5rem" }}>
            {goals_info_data[key].description}
          </Typography>
          <GoalGallery tiles={goals_info_data[key].tiles}/>
                <Divider sx={{ my: "1rem" }}>
                <Chip label="diff components" />
                </Divider> 
          <GoalGrid tiles={goals_info_data[key].tiles} />
        </Box>
      ))}

      <Divider sx={{ my: "1rem" }}>
        <Chip label="Here's some more resources" />
      </Divider>

      <Container sx={{ maxWidth: "24rem" }}>
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
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  selected="True"
                  sx={resourceButton}
                  component="a"
                  target="_blank"
                  href="http://www.google.com"
                >
                  <ListItemText primary="James Salon" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  selected="True"
                  sx={resourceButton}
                  component="a"
                  target="_blank"
                  href="http://www.northwestern.edu"
                >
                  <ListItemText primary="We Do Hair" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  selected="True"
                  sx={resourceButton}
                  component="a"
                  target="_blank"
                  href="http://www.stackoverflow.com"
                >
                  <ListItemText primary="Curls Boutique" />
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
            <Typography sx={{ color: "#db8ab4", fontWeight: "bold" }}>
              Products
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="resources"
            id="resources"
          >
            <Typography sx={{ color: "#db8ab4", fontWeight: "bold" }}>
              Resources
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
              </Accordion>
              </Container>
              */}
      
      </Container>
  );
};

export default ResultsPage;
