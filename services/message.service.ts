import {gitCommands} from "~/dumy-data/data";
import type {IGitCommands} from "~/interfaces/IGitCommands";

export function getFakeAIResponse(): Promise<IGitCommands> {
    return new Promise((resolve) => setTimeout(() => {resolve(gitCommands)}, 100))
}