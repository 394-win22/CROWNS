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

const products_info_data = {
    _4A: {

    },
    _4B: {

    },
    _4C: {
        description: "This is a description",
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

    }


}

export {products_info_data}