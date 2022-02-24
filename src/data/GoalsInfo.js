const tile_schema = {
    title: "Test",
    moreInfo: "Longer text",
    image: "./images/goals/tileid.png",
    link: "https://example.com"
}

const hairTypeGoals = {
    type4: {
        _4c: {
            Goals: [
                {
                    name: "Volume",
                    image: "Volume Icon.png"
                }
            ]
        }
    }
}


const goals_info_data = {
    Health: {
        description: "From kinks to coils, 4C hair is versatile and can be shaped into almost any style. But it’s coil pattern leaves it susceptible to extreme dryness and frizziness. It’s important to keep those kinks and coils moisturized and ends trimmed regularly. Here are a few products to help you on your journey to healthy, moisture-rich hair.",
        tiles: [
            {
                title: "BREAD BEAUTY SUPPLY Hair Oil Everyday Gloss",
                moreInfo: "Goal: Keep hair looking shiny and healthy Recommendation: Choose a hair oil that keeps scalp and strands moisturized with a sticky oily residue",
                image: "BREADBEAUTY.png",
                link: "https://breadbeautysupply.com/",
            },
            {
                title: "Oribe Cleansing Creme for Moisture Control",
                moreInfo: "Goal: Keep hair strong and moisturized\n Recommendation: Choose a daily cleansing cream for the ultimate hydration.",
                image: "Oribe.png",
                link: "https://www.oribe.com/oribestorefront/oribe/en/-/Collections/Moisture-%26-Control/Cleansing-Cr%C3%A8me-for-Moisture-%26-Control/p/400256",
            },
            {
                title: "TGIN Moisture Rich Sulfate Free Shampoo For Natural Hair with Amla Oil and Coconut Oil",
                moreInfo: "Goal: Keep hair strong and moisturized Recommendation: Choose a Sulfate-Free Shampoo to gently cleanse the hair without stripping it of its natural oils",
                image: "tgin.png",
                link: null,         
            }
        ]
    },
    Growth: {
        description: "4C type hair is prone to breakage due to its delicate nature, so protective styles help to keep strands protected from split ends and damage. Here are a few easy protective styles that you can do at home or book through your local stylist/salon.",
        tiles: [
            {
                title: "Knotless Box Braids",
                moreInfo: "Eliminate breakage and protect your strands from root to tip with a low maintenance knotless box braid.",
                image: "knotlessbraids.png",
                link: null
            },
            {
                title: "Low Bun",
                moreInfo: "A quick and easy go to style to protect your ends. A low bun or a top bun can be a great style for any occasion and know that you are protecting your delicate strands in the process.",
                image: "lowbun.png",
                link: null
            }
        ]
    }

}

export { goals_info_data };