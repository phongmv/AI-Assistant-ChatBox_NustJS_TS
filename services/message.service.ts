import { questions} from "~/dumy-data/data";
import type { IQuestionAnswers} from "~/interfaces/IGitCommands";


export function getQuestionsResponse(): Promise<IQuestionAnswers> {
    return new Promise((resolve) => setTimeout(() => {resolve(questions)}, 0))
}
