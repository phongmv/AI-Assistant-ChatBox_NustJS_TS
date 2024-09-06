import {gitCommands, questions} from "~/dumy-data/data";
import type {IGitCommands, IQuestionAnswers} from "~/interfaces/IGitCommands";


export function getQuestionsResponse(): Promise<IQuestionAnswers> {
    return new Promise((resolve) => resolve(questions))
}
export function getFakeAIResponse(): Promise<IGitCommands> {
    return new Promise((resolve) => resolve(gitCommands))
}
