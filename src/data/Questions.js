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
            }
        ]
    }
];

export { quizQuestions };