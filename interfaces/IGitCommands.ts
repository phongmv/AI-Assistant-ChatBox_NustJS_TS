
export interface IQuestionAnswer {
    question: string;
    answer: string;
    syntax?: string
};

export interface IQuestionAnswers {
    training_data : IQuestionAnswer[];
};