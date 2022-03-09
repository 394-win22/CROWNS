const tile_schema = {
    description: "string",  
    shampoos: [],
    leaveIns: [],
    conditioners: [],
}

const product_schema = {
    title: "string",
    image: "string",
    brand: "string",
    link: "string",
}

const products = {
    _4A: {
        description: "Products for Type 4A",
        shampoos: [
            {
                title: "Amla and Coconut Oil Shampoo",
                image: "tgin.png",
                brand: "TGIN",
                link: ""
            },
            {
                title: "Fresh Rosé Hair Treatment",
                image: "tgin.png",
                brand: "Natur All",
                link: ""
            }
        ],
        conditioners: [],
        leaveIns: [
            {
                title: "Everyday Gloss Hair Oil",
                image: "BREADBEAUTY.png",
                brand: "Bread",
                link: ""
            },
            {
                title: "Everyday Gloss Hair Oil",
                image: "BREADBEAUTY.png",
                brand: "Bread",
                link: ""
            },
            {
                title: "Everyday Gloss Hair Oil",
                image: "BREADBEAUTY.png",
                brand: "Bread",
                link: ""
            }
        ]

    },
    _4B: {
        description: "Products for Type 4B",
        shampoos: [
            {
                title: "Amla and Coconut Oil Shampoo",
                image: "tgin.png",
                brand: "TGIN",
                link: ""
            },
            {
                title: "Fresh Rosé Hair Treatment",
                image: "tgin.png",
                brand: "Natur All",
                link: ""
            }
        ],
        conditioners: [],
        leaveIns: [
            {
                title: "Everyday Gloss Hair Oil",
                image: "BREADBEAUTY.png",
                brand: "Bread",
                link: ""
            },
            {
                title: "Everyday Gloss Hair Oil",
                image: "BREADBEAUTY.png",
                brand: "Bread",
                link: ""
            },
            {
                title: "Everyday Gloss Hair Oil",
                image: "BREADBEAUTY.png",
                brand: "Bread",
                link: ""
            }
        ]

    },
    _4C: {
        description: "Products for Type 4C",
        shampoos: [
            {
                title: "Sulfate Free Shampoo with Amla Oil and Coconut Oil",
                image: "/type4/products/Sulfate Free Shampoo with Amla Oil and Coconut Oil by TGIN.png",
                brand: "TGIN",
                link: ""
            }
        ],
        conditioners: [],
        leaveIns: [
            {
                title: "Everyday Gloss Hair Oil",
                image: "type4/products/Everyday Gloss Hair Oil By Bread.png",
                brand: "Bread",
                link: ""
            },
            {
                title: "Fresh Froze Hair Treatment",
                image: "/type4/products/Fresh Frozé Hair Treatment by Natur All.jpeg",
                brand: "Natur All",
                link: ""
            },
            {
                title: "Cleansing Creme",
                image: "/type4/products/Cleansing Creme by Oribe.png",
                brand: "Oribe",
                link: ""
            },
            {
                title: "Mimosa Hair Honey Pomade",
                brand: "Carol's Daughter",
                link: "",
                image: "/type4/products/Mimosa Hair Honey Pomade by Carol_s Daughter.png"
            }
        ]

    }


}

export {products}