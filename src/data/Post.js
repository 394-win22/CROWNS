const tile_schema = {
    title: "string",
    name: "string",
    userID: "string",
    image: "string",
    content: "string",
    date: "string",
    comments: [],
    tags: []
}

const post_data = [
    {
        title: "My hair recommendation",
        name: "clara",
        userID: "test",
        image: null,
        content: "Hi all! I am trying to style my hair in better curls, any tips?",
        date: "March 1, 2022",
        comments: [],
        tags: ["4C", "Hairstyles"]
    },
    {
        title: "My hair recommendation",
        name: "Bob",
        userID: "test",
        image: null,
        content: "Really long text with extrasuperfloruous words Really long text with extrasuperfloruous words Really long text with extrasuperfloruous words Really long text with extrasuperfloruous words Really long text with extrasuperfloruous words",
        date: "February 27, 2022",
        comments: [],
        tags: ["Products", "Stylists"]
    },
    {
        title: "My hair recommendation",
        name: "Denise",
        userID: "test",
        image: null,
        content: "Looking for shampoo",
        date: "March 1, 2022",
        comments: [],
        tags: ["2B", "Products", "Chicago", "IReallyLikeHairAndHairstyles", "News"]
    },
]

export default post_data;
    


