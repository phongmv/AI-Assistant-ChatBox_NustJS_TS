export interface IGitCommand {
    command: string;
    description: string;
}

export interface IGitCommands {
    [category: string]: IGitCommand;
}
