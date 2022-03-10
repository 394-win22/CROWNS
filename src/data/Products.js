const tile_schema = {
    description: "string",  
    shampoos: [],
    leaveIns: [],
    conditioners: [],
}

const product_schema = {
    title: "string",
    image: "string",
    price: "string",
    link: "string",
}

const products = {
    _1A: {
        description: "Type 1A Products",
        products: [
            {
                title: "Brush",
                image: "Brush.png",
                price: "$20",
                link: ""
            },
            {
                title: "Comb",
                image: "Comb.png",
                price: "$10",
                link: ""
            },
            {
                title: "Leave-In Conditioner",
                image: "Leave-in 1.png",
                price: "$15",
                link: ""
            },
            {
                title: "Spritz",
                image: "Leave-in 3.png",
                price: "$20",
                link: ""
            },
            {
                title: "Conditioner",
                image: "Conditioner.png",
                price: "$20",
                link: ""
            }
        ]

    },
    _1B: {
        description: "Type 1B Products",
        products: [
            {
                title: "Brush",
                image: "Brush.png",
                price: "$20",
                link: ""
            },
            {
                title: "Comb",
                image: "Comb.png",
                price: "$10",
                link: ""
            },
            {
                title: "Leave-In Conditioner",
                image: "Leave-in 1.png",
                price: "$15",
                link: ""
            },
            {
                title: "Spritz",
                image: "Leave-in 3.png",
                price: "$20",
                link: ""
            },
            {
                title: "Conditioner",
                image: "Conditioner.png",
                price: "$20",
                link: ""
            }
        ]

    },
    _1C: {
        description: "Type 1C Products",
        products: [
            {
                title: "Brush",
                image: "Brush.png",
                price: "$20",
                link: ""
            },
            {
                title: "Comb",
                image: "Comb.png",
                price: "$10",
                link: ""
            },
            {
                title: "Leave-In Conditioner",
                image: "Leave-in 1.png",
                price: "$15",
                link: ""
            },
            {
                title: "Spritz",
                image: "Leave-in 3.png",
                price: "$20",
                link: ""
            },
            {
                title: "Conditioner",
                image: "Conditioner.png",
                price: "$20",
                link: ""
            }
        ]

    },

    _2A: {
        description: "Type 2A Products",
        products: [
            {
                title: "Brush",
                image: "Brush.png",
                price: "$20",
                link: ""
            },
            {
                title: "Comb",
                image: "Comb.png",
                price: "$10",
                link: ""
            },
            {
                title: "Leave-in Conditioner",
                image: "Leave-in 1.png",
                price: "$15",
                link: ""
            },
            {
                title: "Spritz",
                image: "Leave-in 3.png",
                price: "$20",
                link: ""
            },
            {
                title: "Shampoo + Conditioner",
                image: "Shampoo.png",
                price: "$30",
                link: ""
            },
        ],
        

    },

    _2B: {
        description: "Type 2B Products",
        products: [
            {
                title: "Brush",
                image: "Brush.png",
                price: "$20",
                link: ""
            },
            {
                title: "Comb",
                image: "Comb.png",
                price: "$10",
                link: ""
            },
            {
                title: "Leave-in Conditioner",
                image: "Leave-in 1.png",
                price: "$15",
                link: ""
            },
            {
                title: "Spritz",
                image: "Leave-in 3.png",
                price: "$20",
                link: ""
            },
            {
                title: "Shampoo + Conditioner",
                image: "Shampoo.png",
                price: "$30",
                link: ""
            },
        ],
        

    },

    _2C: {
        description: "Type 2C Products",
        products: [
            {
                title: "Brush",
                image: "Brush.png",
                price: "$20",
                link: ""
            },
            {
                title: "Comb",
                image: "Comb.png",
                price: "$10",
                link: ""
            },
            {
                title: "Leave-in Conditioner",
                image: "Leave-in 1.png",
                price: "$15",
                link: ""
            },
            {
                title: "Spritz",
                image: "Leave-in 3.png",
                price: "$20",
                link: ""
            },
            {
                title: "Shampoo + Conditioner",
                image: "Shampoo.png",
                price: "$30",
                link: ""
            },
        ],
        

    },

    _3A: {
        description: "Type 3A Products",
        products: [
            {
                title: "Comb",
                image: "Comb.png",
                price: "$10",
                link: ""
            },
            {
                title: "Comb",
                image: "Comb 2.png",
                price: "$10",
                link: ""
            },
            {
                title: "Leave-in Conditioner",
                image: "Leave-in 1.png",
                price: "$15",
                link: ""
            },
            {
                title: "Pomade",
                image: "Pomade.png",
                price: "$10",
                link: ""
            },
            {
                title: "Shampoo + Conditioner",
                image: "Shampoo.png",
                price: "$20",
                link: ""
            }
        ]
    },

    _3B: {
        description: "Type 3B Products",
        products: [
            {
                title: "Comb",
                image: "Comb.png",
                price: "$10",
                link: ""
            },
            {
                title: "Comb",
                image: "Comb 2.png",
                price: "$10",
                link: ""
            },
            {
                title: "Leave-in Conditioner",
                image: "Leave-in 1.png",
                price: "$15",
                link: ""
            },
            {
                title: "Pomade",
                image: "Pomade.png",
                price: "$10",
                link: ""
            },
            {
                title: "Shampoo + Conditioner",
                image: "Shampoo.png",
                price: "$20",
                link: ""
            }
        ]

    },
    _3C: {
        description: "Type 3C Products",
        products: [
            {
                title: "Comb",
                image: "Comb.png",
                price: "$10",
                link: ""
            },
            {
                title: "Comb",
                image: "Comb 2.png",
                price: "$10",
                link: ""
            },
            {
                title: "Leave-in Conditioner",
                image: "Leave-in 1.png",
                price: "$15",
                link: ""
            },
            {
                title: "Pomade",
                image: "Pomade.png",
                price: "$10",
                link: ""
            },
            {
                title: "Shampoo + Conditioner",
                image: "Shampoo.png",
                price: "$20",
                link: ""
            }
        ]

    },



    _4A: {
        description: "Type 4A Products",
        products: [
            {
                title: "Comb",
                image: "Comb.png",
                price: "$10",
                link: ""
            },
            {
                title: "Comb",
                image: "Comb 2.png",
                price: "$10",
                link: ""
            },
            {
                title: "Leave-in Conditioner",
                image: "Leave-in 1.png",
                price: "$15",
                link: ""
            },
            {
                title: "Pomade",
                image: "Pomade.png",
                price: "$10",
                link: ""
            },
            {
                title: "Shampoo + Conditioner",
                image: "Shampoo.png",
                price: "$20",
                link: ""
            },
            {
                title: "Hair Oil",
                image: "Oil.png",
                price: "$15",
                link: ""
            }
        ]

    },
    _4B: {
        description: "Type 4B Products",
        products: [
            {
                title: "Comb",
                image: "Comb.png",
                price: "$10",
                link: ""
            },
            {
                title: "Comb",
                image: "Comb 2.png",
                price: "$10",
                link: ""
            },
            {
                title: "Leave-in Conditioner",
                image: "Leave-in 1.png",
                price: "$15",
                link: ""
            },
            {
                title: "Pomade",
                image: "Pomade.png",
                price: "$10",
                link: ""
            },
            {
                title: "Shampoo + Conditioner",
                image: "Shampoo.png",
                price: "$20",
                link: ""
            },
            {
                title: "Hair Oil",
                image: "Oil.png",
                price: "$15",
                link: ""
            }
        ]

    },
    _4C: {
        description: "Products for Type 4C",
        products: [
            {
                title: "Comb",
                image: "Comb.png",
                price: "$10",
                link: ""
            },
            {
                title: "Comb",
                image: "Comb 2.png",
                price: "$10",
                link: ""
            },
            {
                title: "Leave-in Conditioner",
                image: "Leave-in 1.png",
                price: "$15",
                link: ""
            },
            {
                title: "Pomade",
                image: "Pomade.png",
                price: "$10",
                link: ""
            },
            {
                title: "Shampoo + Conditioner",
                image: "Shampoo.png",
                price: "$20",
                link: ""
            },
            {
                title: "Hair Oil",
                image: "Oil.png",
                price: "$15",
                link: ""
            }
        ]

    }


}

export {products}