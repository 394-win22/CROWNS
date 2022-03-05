import React, { useState } from "react";
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
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';



const colors = [red[500], orange[500], yellow[500], green[500], blue[500], purple[500],
red[200], orange[300], yellow[800], green[200], blue[300], purple[700]];


const DiscussionCard = ({ data, index }) => {

    return (
        <Card sx={{ marginTop: "1rem", border: 3, borderColor: "black" }}>
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
                <Stack direction="row" spacing={0} sx={{ px: 2, alignItems: 'flex-start', flexWrap: "wrap" }}>
                    {data.tags.map((tag, i) => {
                        return (<Chip label={tag} key={i} sx={{ m: 0.5 }} />)
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

const CommunityFilters = ({ setFilter }) => {
    const filters = ["Hairstyles", "Products", "Stylists", "News", "All"]
    return (
        <Container disableGutters sx={{ textAlign: "left" }}>
            {filters.map(e => { return <Chip onClick={() => setFilter(e === 'All' ? false : e)} label={e} sx={{ backgroundColor: "white", ml: 0.5, border: 1, borderColor: "black", fontFamily: "Raleway" }} /> })}
        </Container>
    )
}

const PostModal = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <>
            <Button type="button" onClick={handleOpen}>Add Post</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{}}>
                    <Stack spacing={2}>
                        <TextField label="Title" variant="outlined" />
                        <TextField label="Description" variant="outlined" />
                        <TextField label="Title" variant="outlined" />
                        {/* <Autocomplete
                            multiple
                            id="fixed-tags-demo"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue([
                                    ...fixedOptions,
                                    ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
                                ]);
                            }}
                            options={top100Films}
                            getOptionLabel={(option) => option.title}
                            renderTags={(tagValue, getTagProps) =>
                                tagValue.map((option, index) => (
                                    <Chip
                                        label={option.title}
                                        {...getTagProps({ index })}
                                        disabled={fixedOptions.indexOf(option) !== -1}
                                    />
                                ))
                            }
                            style={{ width: 500 }}
                            renderInput={(params) => (
                                <TextField {...params} label="Fixed tag" placeholder="Favorites" />
                            )}
                        /> */}
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}

const Community = () => {
    const [currentFilter, setCurrentFilter] = useState("")
    const useStyles = makeStyles({
        content: {
            justifyContent: "center"
        }
    });
    const classes = useStyles();
    console.log(post_data);
    return (

        <Container sx={{ pb: '65px' }} disableGutters>

            <Typography variant="h3" fontWeight="bold" sx={{ fontFamily: "Raleway", my: 4 }}>Community Board</Typography>
            {/* <PostModal /> */}
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
        </Container>
    )
}

export default Community;