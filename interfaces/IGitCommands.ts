
export interface IQuestionAnswer {
    question: string;
    answer: string;
    syntax?: string
};

export interface IQuestionAnswers {
    training_data : IQuestionAnswer[];
};

export interface IGitCommand {
    command: string;
    description: string;
}

export interface IGitCommands {
    [category: string]: IGitCommand;
}

