const questionSchema = {
    question: "what is the meaning of life?",
    id: -1,
    answers: [
        {
            id: 1,
            option: "yes",
            image: null,
            weights: null
        },
        {
            id: 2,
            option: "no",
            image: null,
            weights: null
        }
    ]
};

const quizQuestions = [
    {
        question: "Choose the type that is most like your hair:",
        id: 0,
        answers: [
            {
                id: 0,
                option: "Straight",
                image: "/quizImages/straight.jpg",
                weights: {
                    _1A: 3, _1B: 3, _1C: 3
                },
                nextQuestion: 1
            },
            {
                id: 1,
                option: "Wavy",
                image: "/quizImages/wavy.jpg",
                weights: {
                    _2A: 3, _2B: 3, _2C: 3
                },
                nextQuestion: 2
            },
            {
                id: 2,
                option: "Curly",
                image: "/quizImages/curly.jpg",
                weights: {
                    _3A: 3, _3B: 3, _3C: 3
                },
                nextQuestion: 3
            },
            {
                id: 3,
                option: "Kinky",
                image: "/quizImages/kinky.jpg",
                weights: {
                    _4A: 3, _4B: 3, _4C: 3
                },
                nextQuestion: 4
            },
        ]
    },
    {
        question: "What is your hair structure?",
        id: 1,
        answers: [
            {
                id: 0,
                option: "Fine",
                description: "Very soft, shiny, hard to hold a curl, hair tends to be oily, hard to damage.",
                weights: {
                    _1A: 5
                },
                nextQuestion: null,
                subImage: "/quizImages/Crowns Type_Straight.png"
            },
            {
                id: 1,
                option: "Medium",
                description: "",
                weights: {
                    _1B: 5
                },
                nextQuestion: null
            },
            {
                id: 0,
                option: "Coarse",
                description: "",
                weights: {
                    _1C: 5
                },
                nextQuestion: null
            }
        ]
    },
    {
        question: "What is your wave structure?",
        id: 2,
        answers: [
            {
                id: 0,
                option: "Loose Waves",
                description: "",
                weights: {
                    _2A: 5
                },
                nextQuestion: null
            },
            {
                id: 1,
                option: "Defined Waves",
                description: "",
                weights: {
                    _2B: 5
                },
                nextQuestion: null
            },
            {
                id: 0,
                option: "Wide Waves",
                description: "",
                weights: {
                    _2C: 5
                },
                nextQuestion: null
            }
        ]
    },
    {
        question: "What is your curl structure?",
        id: 3,
        answers: [
            {
                id: 0,
                option: "Loose Curls",
                description: "",
                weights: {
                    _3A: 5
                },
                nextQuestion: null
            },
            {
                id: 1,
                option: "Tight Curls",
                description: "",
                weights: {
                    _3B: 5
                },
                nextQuestion: null
            },
            {
                id: 0,
                option: "Corkscrews",
                description: "",
                weights: {
                    _3C: 5
                },
                nextQuestion: null
            }
        ]
    },
    {
        question: "What is your coil structure?",
        id: 4,
        answers: [
            {
                id: 0,
                option: "Defined Coils",
                description: "",
                weights: {
                    _4A: 5
                },
                nextQuestion: null
            },
            {
                id: 1,
                option: "Z Coil",
                description: "",
                weights: {
                    _4B: 5
                },
                nextQuestion: null
            },
            {
                id: 0,
                option: "Tight Coil",
                description: "",
                weights: {
                    _2C: 5
                },
                nextQuestion: null
            }
        ]
    }
    // {
    //     question: "What is the texture of your natural hair?",
    //     id: 1,
    //     answers: [
    //         {
    //             id: 0,
    //             option: "Fine",
    //             image: null,
    //             weights: null
    //         },
    //         {
    //             id: 1,
    //             option: "Medium",
    //             image: null,
    //             weights: null
    //         },
    //         {
    //             id: 2,
    //             option: "Coarse",
    //             image: null,
    //             weights: null
    //         }
    //     ]
    // },
    // {
    //     question: "What is the length of your hair?",
    //     id: 2,
    //     answers: [
    //         {
    //             id: 0,
    //             option: "Super Short",
    //             image: null,
    //             weights: null
    //         },
    //         {
    //             id: 1,
    //             option: "Short",
    //             image: null,
    //             weights: null
    //         },
    //         {
    //             id: 2,
    //             option: "Medium",
    //             image: null,
    //             weights: null
    //         },
    //         {
    //             id: 3,
    //             option: "Long",
    //             image: null,
    //             weights: null
    //         }
    //     ]
    // },
    // {
    //     question: "What is the texture of your natural hair?",
    //     id: 3,
    //     answers: [
    //         {
    //             id: 0,
    //             option: "Fine",
    //             image: null,
    //             weights: null
    //         },
    //         {
    //             id: 1,
    //             option: "Medium",
    //             image: null,
    //             weights: null
    //         },
    //         {
    //             id: 2,
    //             option: "Coarse",
    //             image: null,
    //             weights: null
    //         }
    //     ]
    // }
];

export { quizQuestions };