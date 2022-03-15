/* eslint-disable */

const post_schema = {
    title: "string",
    name: "string",
    userID: "string",
    content: "string",
    date: "string",
    tags: [] // list of strings
}

/* eslint-enable */

const post_data = [
    {
        title: "Looking for help with curls",
        name: "Clara Jones",
        userID: "test",
        content: "Hi all! I am trying to style my hair in better curls, any tips?",
        date: "March 1, 2022",
        tags: ["4C", "Hairstyles"]
    },
    {
        title: "Frizzy hair",
        name: "Bob James",
        userID: "test",
        content: "With all this humid weather my hair usually is really frizzy. I've been using Dove No-Frizz Conditioner to help with that, but I wondering if anyone had any recs for other products",
        date: "March 4, 2022",
        tags: ["3A", "Products", "Hairstyles", "News"]
    },
    {
        title: "New Salon Open!",
        name: "Denise",
        userID: "test",
        content: "Hi everyone! I just opened my new styling business! Please email me at denise@denisedoeshair.com to get info on pricing and to make appointments",
        date: "March 5, 2022",
        tags: ["Stylists", "Chicago", "News"]
    },
]

export default post_data;
    


