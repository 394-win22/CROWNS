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
                }
            },
            {
                id: 1,
                option: "Wavy",
                image: "/quizImages/wavy.jpg",
                weights: {
                    _2A: 3, _2B: 3, _2C: 3
                }
            },
            {
                id: 2,
                option: "Curly",
                image: "/quizImages/curly.jpg",
                weights: {
                    _3A: 3, _3B: 3, _3C: 3
                }
            },
            {
                id: 3,
                option: "Kinky",
                image: "/quizImages/kinky.jpg",
                weights: {
                    _4A: 3, _4B: 3, _4C: 3
                }
            },
        ]
    },
    {
        question: "What is the texture of your natural hair?",
        id: 1,
        answers: [
            {
                id: 0,
                option: "Fine",
                image: null,
                weights: null
            },
            {
                id: 1,
                option: "Medium",
                image: null,
                weights: null
            },
            {
                id: 2,
                option: "Coarse",
                image: null,
                weights: null
            }
        ]
    },
    {
        question: "What is the length of your hair?",
        id: 2,
        answers: [
            {
                id: 0,
                option: "Super Short",
                image: null,
                weights: null
            },
            {
                id: 1,
                option: "Short",
                image: null,
                weights: null
            },
            {
                id: 2,
                option: "Medium",
                image: null,
                weights: null
            },
            {
                id: 3,
                option: "Long",
                image: null,
                weights: null
            }
        ]
    },
    {
        question: "What is the texture of your natural hair?",
        id: 3,
        answers: [
            {
                id: 0,
                option: "Fine",
                image: null,
                weights: null
            },
            {
                id: 1,
                option: "Medium",
                image: null,
                weights: null
            },
            {
                id: 2,
                option: "Coarse",
                image: null,
                weights: null
            }
        ]
    }
];

export { quizQuestions };