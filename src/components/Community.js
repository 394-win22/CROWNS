import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, orange, yellow, green, blue, purple } from '@mui/material/colors';
import CommentIcon from '@mui/icons-material/Comment';
import "@fontsource/raleway";
import { crownsPinkLight } from "../styles/quizStyling";
import Grid from '@mui/material/Grid';
import "@fontsource/raleway";
import Container from '@mui/material/Container';
import post_data from '../data/Post';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Navbar from './Navbar';
import { useUserState, useUser } from '../utilities/firebase';


const colors = [red[500], orange[500], yellow[500], green[500], blue[500], purple[500],
red[200], orange[300], yellow[800], green[200], blue[300], purple[700]];


const DiscussionCard = ({ data, index }) => {

    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setOpen(!open);
    };

    return (
        <Card data-cy="post-card" sx={{ marginTop: "1rem", border: 3, borderColor: "black" }}>
            <CardHeader
                sx={{ textAlign: "left" }}
                avatar={
                    <Avatar sx={{ bgcolor: colors[index % colors.length] }} aria-label="recipe">
                        {data.name.charAt(0).toUpperCase()}
                    </Avatar>
                }

                title={<b>{data.title}</b>}
                subheader={data.date}
            />

            <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="body2" color="text.secondary">
                    {data.content}
                </Typography>
            </CardContent>
            {data.tags &&
                <Stack direction="row" spacing={0} sx={{ px: 2, alignItems: 'flex-start', flexWrap: "wrap" }}>
                    {data.tags.map((tag, i) => {
                        return (<Chip label={tag} key={i} sx={{ m: 0.5 }} />)
                    })}
                </Stack>
            }
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" data-cy="comment-button" onClick={handleClick}>
                    <CommentIcon />
                </IconButton>
                <Popper id={'pop'} open={open} placement={'right'} anchorEl={anchorEl} transition sx={{ p: 0 }}>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper sx={{ backgroundColor: 'lightGray' }}>
                                <Typography sx={{ p: 0.5, color: '#111111', fontSize: '0.75rem' }}>Comments Coming Soon...</Typography>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </CardActions>
        </Card>
    )
}

const CommunityFilters = ({ setFilter }) => {
    const filters = ["Hairstyles", "Products", "Stylists", "News", "All"]
    return (
        <Container disableGutters sx={{ textAlign: "left", display: 'flex', flexWrap: 'wrap' }}>
            {filters.map((e, i) => { return <Chip key={i} onClick={() => setFilter(e === 'All' ? false : e)} label={e} sx={{ backgroundColor: "white", ml: 0.5, border: 1, borderColor: "black", fontFamily: "Raleway" }} /> })}
        </Container>
    )
}


const Community = ({ hairType }) => {
    const [user] = useUserState();
    const [data,,] = useUser("users", user?.uid);


    const [currentFilter, setCurrentFilter] = useState("")
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setOpen(!open);
    };

    return (
        <>
            <Container sx={{ pb: '65px' }} disableGutters>

                <Typography variant="h3" fontWeight="bold" sx={{ fontFamily: "Raleway", my: 4 }}>Community Board</Typography>
                <Chip onClick={handleClick} label={'Create Post'} sx={{ backgroundColor: "grey", border: 1, borderColor: "black", fontFamily: "Raleway", fontWeight: 'bold', mb: 4 }} />
                <Popper id={'pop'} open={open} placement={'bottom'} anchorEl={anchorEl} transition sx={{ p: 0 }}>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper sx={{ backgroundColor: 'lightGray' }}>
                                <Typography sx={{ p: 0.5, color: '#111111', fontSize: '0.75rem' }}>Coming Soon...</Typography>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
                <Container sx={{
                    mx: 0, py: 2, backgroundColor: crownsPinkLight
                }}>
                    <CommunityFilters setFilter={setCurrentFilter} />
                    <Grid columns={1} sx={{ alignItems: "center" }}>
                        {
                            post_data.filter(data => currentFilter ? data.tags.includes(currentFilter) : true).map((data, index) => {
                                return (
                                    <Grid item key={index}>
                                        <DiscussionCard data={data} index={index}></DiscussionCard>
                                    </Grid>)
                            }
                            )

                        }
                    </Grid>
                </Container>
                <Navbar hairTypeCode={data ? data.hairType : hairType?.code} />
            </Container>

        </>
    )
}

export default Community;