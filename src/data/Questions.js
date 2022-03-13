/* eslint-disable */

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

/* eslint-enable */

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
        header: { text: "Straight", image: "/quizImages/straight.jpg" },
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
                description: "Has much body. (i.e. more volume, fuller)",
                weights: {
                    _1B: 5
                },
                nextQuestion: null,
                subImage: "/quizImages/Crowns Type_Straight.png"
            },
            {
                id: 0,
                option: "Coarse",
                description: "Hard to curl (i.e. bone straight)",
                weights: {
                    _1C: 5
                },
                nextQuestion: null,
                subImage: "/quizImages/Crowns Type_Straight.png"
            }
        ]
    },
    {
        question: "What is your wave structure?",
        id: 2,
        header: { text: "Wavy", image: "/quizImages/wavy.jpg" },
        answers: [
            {
                id: 0,
                option: "Loose Waves",
                description: "Can accomplish various styles. Loose \"S\" pattern. Hair sticks close to the head",
                weights: {
                    _2A: 5
                },
                nextQuestion: null,
                subImage: "/quizImages/Crowns Type_Wavy.png"
            },
            {
                id: 1,
                option: "Defined Waves",
                description: "A bit resistant to styling. Hair has more of a defined \"s\" pattern. Hair tends to be frizzy.",
                weights: {
                    _2B: 5
                },
                nextQuestion: null,
                subImage: "/quizImages/Crowns Type_Wavy.png"
            },
            {
                id: 0,
                option: "Wide Waves",
                description: "Hair has wider waves. Resistant to styling. Hair tends to be frizzy. ",
                weights: {
                    _2C: 5
                },
                nextQuestion: null,
                subImage: "/quizImages/Crowns Type_Wavy.png"
            }
        ]
    },
    {
        question: "What is your curl structure?",
        id: 3,
        header: { text: "Curly", image: "/quizImages/curly.jpg" },
        answers: [
            {
                id: 0,
                option: "Loose Curls",
                description: "Thick and full with much body. Definite curl pattern. Hair tends to be frizzy. Can have a combination texture.",
                weights: {
                    _3A: 5
                },
                nextQuestion: null,
                subImage: "/quizImages/Crowns Type_Curly.png"
            },
            {
                id: 1,
                option: "Tight Curls",
                description: "medium amount of space of the curls. Can have a combined texture. ",
                weights: {
                    _3B: 5
                },
                nextQuestion: null,
                subImage: "/quizImages/Crowns Type_Curly.png"
            },
            {
                id: 0,
                option: "Corkscrews",
                description: "Tight curls in corkscrews. The curls are very tightly curled",
                weights: {
                    _3C: 5
                },
                nextQuestion: null,
                subImage: "/quizImages/Crowns Type_Curly.png"
            }
        ]
    },
    {
        question: "What is your coil structure?",
        id: 4,
        header: { text: "Kinky", image: "/quizImages/kinky.jpg" },
        answers: [
            {
                id: 0,
                option: "Defined Coils",
                description: "Tightly coiled. Has a very defined \"o\" shaped pattern",
                weights: {
                    _4A: 5
                },
                nextQuestion: null,
                subImage: "/quizImages/Crowns Type_Coily.png"
            },
            {
                id: 1,
                option: "Z Coil",
                description: "Tightly coiled. Little less defined kink pattern. has more of a \"Z\"-shaped pattern",
                weights: {
                    _4B: 5
                },
                nextQuestion: null,
                subImage: "/quizImages/Crowns Type_Coily.png"
            },
            {
                id: 0,
                option: "Tight Coil",
                description: "Tightly coiled. Almost no visible defined kink pattern, unless seen from up close. Has more of a very tight \"o\" shped pattern",
                weights: {
                    _4C: 5
                },
                nextQuestion: null,
                subImage: "/quizImages/Crowns Type_Coily.png"
            }
        ]
    }
];

export { quizQuestions };