import {gitCommands, questions} from "~/dumy-data/data";
import type {IGitCommands, IQuestionAnswers} from "~/interfaces/IGitCommands";


export function getQuestionsResponse(): Promise<IQuestionAnswers> {
    return new Promise((resolve) => setTimeout(() => {resolve(questions)}, 0))
}
export function getFakeAIResponse(): Promise<IGitCommands> {
    return new Promise((resolve) => setTimeout(() => {resolve(gitCommands)}, 0))
}
