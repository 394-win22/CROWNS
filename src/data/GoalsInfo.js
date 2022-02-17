const tile_schema = {
    title: "Test",
    moreInfo: "Longer text",
    image: "./images/goals/tileid.png",
    link: "https://example.com"
}


const goals_info_data = {
    Health: {
        description: "Keep your hair healthy",
        tiles: [
            {
                title: "Recommended Products",
                moreInfo: "Check out some products we recommend to keep your hair healthy",
                image: "hairProducts.png",
                link: "https://www.sephora.com/beauty/best-selling-hair-products",
            },
            {
                title: "Magic Beans2",
                moreInfo: "Magic beans help strengthen hair",
                image: "magic_beans.jpeg",
                link: "https://google.com",
            },
            {
                title: "Heat",
                moreInfo: "Too much heat is bad for your hair",
                image: null,
                link: null,         
            },
            {
                title: "Positivity goes a long way",
                moreInfo: "People that are optimistic tend to have healthier hair. Scientists think this is related to stress and cortisol levels",
                image: null,
                link: "https://google.com",
            }
        ]
    },
    Growth: {
        description: "Help your hair grow",
        tiles: [
            {
                title: "Deep Thought",
                moreInfo: "Research shows that keeping your brain active helps hair growth",
                image: "magic_beans.jpeg",
                link: "https://www.researchgate.net"
            }
        ]
    }

}

export { goals_info_data };