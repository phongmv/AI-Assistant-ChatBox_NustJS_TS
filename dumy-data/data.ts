import type { IGitCommands } from "~/interfaces/IGitCommands";

export const gitCommands: IGitCommands = {
    "configuration": {
        command: "git config --global user.name 'Your Name'",
        description: "Configure the global username.",
    },
    "config": {
        command: "git config --global user.name 'Your Name'",
        description: "Configure the global username.",
    },
    "initialize": {
        command: "git init",
        description: "Initialize a new Git repository.",
    },
    "init": {
        command: "git init",
        description: "Initialize a new Git repository.",
    },
    "status": {
        command: "git status",
        description: "Check the status of the working directory and staging area.",
    },
    "file": {
        command: "git add [file]",
        description: "Add files to the staging area.",
    },
    "branch": {
        command: "git branch",
        description: "List branches in the repository.",
    },
    "update": {
        command: "git push [remote] [branch]",
        description: "Push commits to a remote repository.",
    },
    "commit": {
        command: "git commit -m [remote] [branch]",
        description: "Push commits to a remote repository.",
    },
    "merge": {
        command: "git merge [branch]",
        description: "Merge the specified branch into the current branch.",
    },
    "undo": {
        command: "git reset [file]",
        description: "Remove a file from the staging area but keep the changes in the working directory.",
    },
    "tagging": {
        command: "git tag [tag-name]",
        description: "Create a new tag.",
    },
    "stashing": {
        command: "git stash",
        description: "Save current changes and reset the working directory.",
    },
    "submodules": {
        command: "git submodule add [url] [path]",
        description: "Add a submodule.",
    },
    "cherry": {
        command: "git cherry-pick [commit-hash]",
        description: "Apply a specific commit from another branch to the current branch without merging the entire branch.",
    },
    "reset": {
        command: "git reset [commit]",
        description: "Reset the HEAD state to the specified commit without affecting the working directory.",
    },
    "rebase": {
        command: "git rebase [branch]",
        description: "Reorganize the current branch's commits onto another branch.",
    },
    "format": {
        command: "git format-patch [start-commit]",
        description: "Create patch files from the specified commit.",
    },
    "remote": {
        command: "git remote -v",
        description: "Display a list of remotes and their URLs.",
    },
    "hooks": {
        command: "git hooks",
        description: "Use hooks to automate tasks such as pre-commit, pre-push, post-merge, etc.",
    },
    "blame": {
        command: "git blame [file]",
        description: "Show information about who changed which lines in a file.",
    },
    "archive": {
        command: "git archive --format=zip --output=[file.zip] [branch]",
        description: "Create a ZIP file from the specified branch.",
    },
    "log": {
        command: "git log --oneline",
        description: "Display the commit log with one line per commit.",
    },
    "bisect": {
        command: "git bisect start",
        description: "Start searching for the commit causing an issue.",
    },
    "filter": {
        command: "git filter-branch --tree-filter '[command]' HEAD",
        description: "Run a command on every commit in the current branch's history.",
    },
    "push": {
        command: "git push [remote] [branch]",
        description: "Push commits to a remote repository.",
    },
    "pull": {
        command: "git pull [remote] [branch]",
        description: "Fetch and integrate changes from a remote repository into the current branch.",
    },
    "push -f": {
        command: "git push -f [remote] [branch]",
        description: "Force push commits to a remote repository, overwriting remote changes.",
    },
    "pull origin": {
        command: "git pull origin [branch]",
        description: "Fetch and integrate changes from the remote 'origin' repository into the current branch.",
    }
};

// Dữ liệu câu hỏi
export const questions = {
    "training_data": [
        {
            "question": "How do I initialize a new Git repository?",
            "answer": "To initialize a new Git repository, use the command `git init` in the directory where you want the repository to be created."
        },
        {
            "question": "What is the command to check the status of your Git repository?",
            "answer": "Use the command `git status` to check the status of your Git repository."
        },
        {
            "question": "How do I stage changes in Git?",
            "answer": "To stage changes, use the command `git add <file>` to add individual files or `git add .` to add all changes in the current directory."
        },
        {
            "question": "How do I commit changes in Git?",
            "answer": "To commit changes, use the command `git commit -m 'your commit message'` where 'your commit message' describes the changes you made."
        },
        {
            "question": "How can I view the commit history?",
            "answer": "Use the command `git log` to view the commit history. You can use additional options to format and limit the output."
        },
        {
            "question": "How do I create a new branch?",
            "answer": "To create a new branch, use the command `git branch <branch-name>`. To switch to the new branch, use `git checkout <branch-name>` or `git switch <branch-name>`."
        },
        {
            "question": "How can I merge a branch into the main branch?",
            "answer": "First, switch to the main branch using `git checkout main` or `git switch main`. Then use the command `git merge <branch-name>` to merge the specified branch into the main branch."
        },
        {
            "question": "What does 'git pull' do?",
            "answer": "The command `git pull` fetches changes from the remote repository and merges them into your current branch."
        },
        {
            "question": "How do I resolve merge conflicts?",
            "answer": "To resolve merge conflicts, open the conflicted files and manually edit the conflicts. After resolving, stage the resolved files using `git add <file>` and commit the changes with `git commit`."
        },
        {
            "question": "How do I clone a Git repository?",
            "answer": "To clone a Git repository, use the command `git clone <repository-url>`, where `<repository-url>` is the URL of the repository you want to clone."
        },
        {
            "question": "How do I revert a commit?",
            "answer": "To revert a commit, use the command `git revert <commit-hash>`. This will create a new commit that undoes the changes introduced by the specified commit."
        },
        {
            "question": "What is the difference between 'git fetch' and 'git pull'?",
            "answer": "'git fetch' downloads changes from the remote repository but does not merge them into your current branch. 'git pull' does both fetching and merging the changes."
        },
        {
            "question": "How do I delete a branch?",
            "answer": "To delete a local branch, use the command `git branch -d <branch-name>`. To delete a remote branch, use `git push origin --delete <branch-name>`."
        }
    ]
};