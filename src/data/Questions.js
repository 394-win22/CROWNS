const questionSchema = {
    question: "what is the meaning of life?",
    id: -1,
    answers: [
        {
            id: 1,
            option: "yes",
            image: null,
            results: null
        },
        {
            id: 2,
            option: "no",
            image: null,
            results: null
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
                results: null
            },
            {
                id: 1,
                option: "Wavy",
                image: "/quizImages/wavy.jpg",
                results: null
            },
            {
                id: 2,
                option: "Curly",
                image: "/quizImages/curly.jpg",
                results: null
            },
            {
                id: 3,
                option: "Kinky",
                image: "/quizImages/kinky.jpg",
                results: null
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
                results: null
            },
            {
                id: 1,
                option: "Medium",
                image: null,
                results: null
            },
            {
                id: 2,
                option: "Coarse",
                image: null,
                results: null
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
                results: null
            },
            {
                id: 1,
                option: "Short",
                image: null,
                results: null
            },
            {
                id: 2,
                option: "Medium",
                image: null,
                results: null
            },
            {
                id: 2,
                option: "Medium",
                image: null,
                results: null
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
                results: null
            },
            {
                id: 1,
                option: "Medium",
                image: null,
                results: null
            },
            {
                id: 2,
                option: "Coarse",
                image: null,
                results: null
            }
        ]
    }
];

export { quizQuestions };