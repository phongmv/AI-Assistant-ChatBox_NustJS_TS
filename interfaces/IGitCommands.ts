export interface IGitCommand {
    command: string;
    description: string;
}

export interface IGitCommands {
    [category: string]: IGitCommand;
}

export interface IQuestionAnswer {
    question: string;
    answer: string;
};

export interface IQuestionAnswers {
    training_data : IQuestionAnswer[];
};