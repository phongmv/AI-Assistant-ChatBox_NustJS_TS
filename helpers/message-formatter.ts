// Helper Functions
export function formatDate(): string {
    return new Date().toLocaleString([], { timeStyle: 'short' });
}

export function replaceSpecialCharacters(input: string): string {
    return input.replace(/[;,.!?()\-@!#$%^&*]/g, ' ');
}