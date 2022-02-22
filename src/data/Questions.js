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
                    _1a: 3, _1b: 3, _1c: 3
                }
            },
            {
                id: 1,
                option: "Wavy",
                image: "/quizImages/wavy.jpg",
                weights: {
                    _2a: 3, _2b: 3, _2c: 3
                }
            },
            {
                id: 2,
                option: "Curly",
                image: "/quizImages/curly.jpg",
                weights: {
                    _3a: 3, _3b: 3, _3c: 3
                }
            },
            {
                id: 3,
                option: "Kinky",
                image: "/quizImages/kinky.jpg",
                weights: {
                    _4a: 3, _4b: 3, _4c: 3
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