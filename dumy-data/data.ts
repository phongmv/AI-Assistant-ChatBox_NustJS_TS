import type {IGitCommands} from "~/interfaces/IGitCommands";

export const gitCommands: IGitCommands = {
    "config": {
        command: "git config --global user.name 'Your Name'",
        description: "Configure the global username.",
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
    "clone": {
        description: "Use the command `git clone [repository-url]` to create a copy of a remote repository on your local machine.",
        command: "git clone [repository-url]"
    },
    "fetch": {
        command: "git fetch",
        description: "Download the latest changes from the remote repository without merging them into your current branch."
    },
    "clean": {
        command: "git clean -fd",
        description: "Remove untracked files and directories from the working directory. The `-f` flag is for force, and `-d` removes directories as well."
    },
    "cherry-pick": {
        "command": "git cherry-pick [commit-hash]",
        "description": "Apply the changes introduced by the specified commit from another branch onto the current branch."
    },
    "reflog": {
        "command": "git reflog",
        "description": "Show a log of all the changes to the tips of branches and other references. Useful for recovering lost commits or finding previous states."
    },
    "stash": {
        "command": "git stash push -m 'message'",
        "description": "Temporarily save changes in your working directory and index so you can work on something else. The optional message helps identify the stash later."
    },
    "rebase-interactive": {
        "command": "git rebase -i [commit-hash]",
        "description": "Interactively rebase a series of commits. Useful for editing, reordering, squashing, or deleting commits in the history."
    },
    "diff": {
        "command": "git diff [file]",
        "description": "Show the differences between the working directory and the index (staging area). Useful for reviewing changes before committing."
    },
    "tag": {
        "command": "git tag [tag-name]",
        "description": "Create a tag in the repository. Tags are often used to mark specific points in history as important, like releases."
    }

};


// Dữ liệu câu hỏi
export const questions = {
    "training_data": [
        {
            "question": "git push -f",
            "syntax": "git push -f [remote] [branch].",
            "answer": "git push is a command used to upload changes from your local repository to a remote repository in Git."
        },
        {
            "question": "git push",
            "syntax": "git push [remote] [branch].",
            "answer": "git push is a command used to upload changes from your local repository to a remote repository in Git."
        },
        {
            "question": "How do I initialize a new Git repository?",
            "answer": "To initialize a new Git repository, use the command `git init` in the directory where you want the repository to be created.",
        },
        {
            "question": "What is the command to check the status of your Git repository?",
            "answer": "Use the command `git status` to check the status of your Git repository.",
        },
        {
            "question": "How do I stage changes in Git?",
            "answer": "To stage changes, use the command `git add <file>` to add individual files or `git add .` to add all changes in the current directory.",
        },
        {
            "question": "How do I commit changes in Git?",
            "answer": "To commit changes, use the command `git commit -m 'your commit message'` where 'your commit message' describes the changes you made.",
        },
        {
            "question": "How can I view the commit history?",
            "answer": "Use the command `git log` to view the commit history. You can use additional options to format and limit the output.",
        },
        {
            "question": "How do I create a new branch?",
            "answer": "To create a new branch, use the command `git branch <branch-name>`. To switch to the new branch, use `git checkout <branch-name>` or `git switch <branch-name>`.",
        },
        {
            "question": "How can I merge a branch into the main branch?",
            "answer": "First, switch to the main branch using `git checkout main` or `git switch main`. Then use the command `git merge <branch-name>` to merge the specified branch into the main branch.",
        },
        {
            "question": "What does 'git pull' do?",
            "answer": "The command `git pull` fetches changes from the remote repository and merges them into your current branch.",
        },
        {
            "question": "How do I resolve merge conflicts?",
            "answer": "To resolve merge conflicts, open the conflicted files and manually edit the conflicts. After resolving, stage the resolved files using `git add <file>` and commit the changes with `git commit`.",
        },
        {
            "question": "How do I clone a Git repository?",
            "answer": "To clone a Git repository, use the command `git clone <repository-url>`, where `<repository-url>` is the URL of the repository you want to clone.",
        },
        {
            "question": "How do I revert a commit?",
            "answer": "To revert a commit, use the command `git revert <commit-hash>`. This will create a new commit that undoes the changes introduced by the specified commit.",
        },
        {
            "question": "What is the difference between 'git fetch' and 'git pull'?",
            "answer": "'git fetch' downloads changes from the remote repository but does not merge them into your current branch. 'git pull' does both fetching and merging the changes.",
        },
        {
            "question": "How do I delete a branch?",
            "answer": "To delete a local branch, use the command `git branch -d <branch-name>`. To delete a remote branch, use `git push origin --delete <branch-name>`.",
        },
        {
            "question": "How can I rename a branch in Git?",
            "answer": "To rename a branch, use the command `git branch -m <new-branch-name>`. This will rename the current branch to the new name.",
        },
        {
            "question": "How do I undo the last commit?",
            "answer": "To undo the last commit but keep the changes in the working directory, use `git reset --soft HEAD~1`. To undo the last commit and discard the changes, use `git reset --hard HEAD~1`.",
        },
        {
            "question": "How do I remove a file from Git without deleting it from the working directory?",
            "answer": "Use the command `git rm --cached <file>` to remove the file from Git's index without deleting it from your working directory.",
        },
        {
            "question": "What is a Git stash?",
            "answer": "Git stash allows you to save your current changes in a stack and revert to a clean working directory. You can later apply the stashed changes with `git stash apply`.",
        },
        {
            "question": "How can I list all stashes in Git?",
            "answer": "Use the command `git stash list` to see a list of all stashes stored in your repository.",
        },
        {
            "question": "How do I delete a stash in Git?",
            "answer": "To delete a stash, use the command `git stash drop <stash>` or `git stash clear` to remove all stashes.",
        },
        {
            "question": "How do I create a new tag in Git?",
            "answer": "To create a new tag, use the command `git tag <tag-name>` to create a lightweight tag or `git tag -a <tag-name> -m <message>` to create an annotated tag.",
        },
        {
            "question": "How do I push tags to a remote repository?",
            "answer": "To push tags to a remote repository, use the command `git push origin <tag-name>` or `git push origin --tags` to push all tags.",
        },
        {
            "question": "How can I delete a tag in Git?",
            "answer": "To delete a tag locally, use `git tag -d <tag-name>`. To delete a tag from a remote repository, use `git push origin --delete <tag-name>`.",
        },
        {
            "question": "How do I check out a specific commit in Git?",
            "answer": "Use the command `git checkout <commit-hash>` to switch to a specific commit. This puts your repository in a 'detached HEAD' state.",
        },
        {
            "question": "What is a Git submodule?",
            "answer": "A Git submodule is a repository embedded inside another repository. Use `git submodule add <repository-url>` to add a submodule.",
        },
        {
            "question": "How do I update a Git submodule?",
            "answer": "To update a submodule, use the command `git submodule update --remote` to fetch the latest changes from the submodule's remote repository.",
        },
        {
            "question": "How do I remove a Git submodule?",
            "answer": "To remove a submodule, delete the relevant section from the `.gitmodules` file, remove the submodule's entry from `.git/config`, and run `git rm --cached <submodule-path>`.",
        },
        {
            "question": "How do I list all branches in Git?",
            "answer": "Use the command `git branch` to list all local branches. To list remote branches, use `git branch -r`.",
        },
        {
            "question": "How can I set up a Git remote?",
            "answer": "To set up a Git remote, use the command `git remote add <name> <url>`, where `<name>` is the name of the remote and `<url>` is the remote repository's URL.",
        },
        {
            "question": "How do I remove a Git remote?",
            "answer": "To remove a Git remote, use the command `git remote remove <name>`, where `<name>` is the name of the remote.",
        },
        {
            "question": "What is Git rebase?",
            "answer": "Git rebase is a way to move or combine a series of commits onto a new base commit. Use `git rebase <branch>` to rebase your current branch onto another branch.",
        },
        {
            "question": "How can I abort a Git rebase?",
            "answer": "To abort an ongoing rebase, use the command `git rebase --abort`. This will return your repository to the state before the rebase started.",
        },
        {
            "question": "How do I squash commits in Git?",
            "answer": "To squash commits, use an interactive rebase with `git rebase -i <base-commit>`, then mark the commits you want to squash with 's' or 'squash'.",
        },
        {
            "question": "How do I initialize a new Git repository?",
            "answer": "To initialize a new Git repository, use the command `git init` in the directory where you want the repository to be created.",
        },
        {
            "question": "How do I configure the global username in Git?",
            "answer": "Use the command `git config --global user.name 'Your Name'` to configure the global username.",
            "syntax": "git config --global user.name 'Your Name'"
        },
        {
            "question": "How do I check the status of the working directory in Git?",
            "answer": "Use the command `git status` to check the status of the working directory and staging area.",
            "syntax": "git status"
        },
        {
            "answer": "Use the command `git add [file]` to add files to the staging area.",
            "question": "How do I add files to the staging area in Git?",
            "syntax": "git add [file]"
        },
        {
            "question": "How do I list branches in a Git repository?",
            "answer": "Use the command `git branch` to list branches in the repository.",
            "syntax": "git branch"
        },
        {
            "question": "How do I push commits to a remote Git repository?",
            "answer": "Use the command `git push [remote] [branch]` to push commits to a remote repository.",
            "syntax": "git push [remote] [branch]"
        },
        {
            "question": "How do I commit changes in Git?",
            "answer": "Use the command `git commit -m [message]` to commit changes with a descriptive message.",
            "syntax": "git commit -m [message]"
        },
        {
            "question": "How do I merge branches in Git?",
            "answer": "Use the command `git merge [branch]` to merge the specified branch into the current branch.",
            "syntax": "git merge [branch]"
        },
        {
            "question": "How do I undo changes in Git?",
            "answer": "Use the command `git reset [file]` to remove a file from the staging area but keep the changes in the working directory.",
            "syntax": "git reset [file]"
        },
        {
            "question": "How do I create a tag in Git?",
            "answer": "Use the command `git tag [tag-name]` to create a new tag.",
            "syntax": "git tag [tag-name]"
        },
        {
            "question": "How do I stash changes in Git?",
            "answer": "Use the command `git stash` to save current changes and reset the working directory.",
            "syntax": "git stash"
        },
        {
            "question": "How do I add a submodule in Git?",
            "answer": "Use the command `git submodule add [url] [path]` to add a submodule.",
            "syntax": "git submodule add [url] [path]"
        },
        {
            "question": "How do I cherry-pick a commit in Git?",
            "answer": "Use the command `git cherry-pick [commit-hash]` to apply a specific commit from another branch to the current branch without merging the entire branch.",
            "syntax": "git cherry-pick [commit-hash]"
        },
        {
            "question": "How do I reset the HEAD state in Git?",
            "answer": "Use the command `git reset [commit]` to reset the HEAD state to the specified commit without affecting the working directory.",
            "syntax": "git reset [commit]"
        },
        {
            "question": "How do I rebase a branch in Git?",
            "answer": "Use the command `git rebase [branch]` to reorganize the current branch's commits onto another branch.",
            "syntax": "git rebase [branch]"
        },
        {
            "question": "How do I create patch files from a commit in Git?",
            "answer": "Use the command `git format-patch [start-commit]` to create patch files from the specified commit.",
            "syntax": "git format-patch [start-commit]"
        },
        {
            "question": "How do I display a list of remotes in Git?",
            "answer": "Use the command `git remote -v` to display a list of remotes and their URLs.",
            "syntax": "git remote -v"
        },
        {
            "question": "How do I use Git hooks?",
            "answer": "Use hooks to automate tasks such as pre-commit, pre-push, post-merge, etc.",
            "syntax": "git hooks"
        },
        {
            "question": "How do I see who changed lines in a file using Git?",
            "answer": "Use the command `git blame [file]` to show information about who changed which lines in a file.",
            "syntax": "git blame [file]"
        },
        {
            "question": "How do I create a ZIP file from a Git branch?",
            "answer": "Use the command `git archive --format=zip --output=[file.zip] [branch]` to create a ZIP file from the specified branch.",
            "syntax": "git archive --format=zip --output=[file.zip] [branch]"
        },
        {
            "question": "How do I display the commit log in Git?",
            "answer": "Use the command `git log --oneline` to display the commit log with one line per commit.",
            "syntax": "git log --oneline"
        },
        {
            "question": "How do I start searching for a commit causing an issue in Git?",
            "answer": "Use the command `git bisect start` to start searching for the commit causing an issue.",
            "syntax": "git bisect start"
        },
        {
            "question": "How do I filter commits in Git?",
            "answer": "Use the command `git filter-branch --tree-filter '[command]' HEAD` to run a command on every commit in the current branch's history.",
            "syntax": "git filter-branch --tree-filter '[command]' HEAD"
        },
        {
            "question": "How do I force push commits in Git?",
            "answer": "Use the command `git push -f [remote] [branch]` to force push commits to a remote repository, overwriting remote changes.",
            "syntax": "git push -f [remote] [branch]"
        },
        {
            "question": "How do I pull changes from the 'origin' remote in Git?",
            "answer": "Use the command `git pull origin [branch]` to fetch and integrate changes from the remote 'origin' repository into the current branch.",
            "syntax": "git pull origin [branch]"
        },
        {
            "question": "git config",
            "syntax": "git config --global user.name 'Your Name'",
            "answer": "Configure the global username.",
        },
        {
            "question": "git init",
            "syntax": "git init",
            "answer": "Initialize a new Git repository.",
        },
        {
            "question": "git status",
            "syntax": "git status",
            "answer": "Check the status of the working directory and staging area.",
        },
        {
            "question": "git add",
            "syntax": "git add [file]",
            "answer": "Add files to the staging area.",
        },
        {
            "question": "branch",
            "syntax": "git branch",
            "answer": "List branches in the repository.",
        },
        {
            "question": "update",
            "syntax": "git push [remote] [branch]",
            "answer": "Push commits to a remote repository.",
        },
        {
            "question": "git commit",
            "syntax": "git commit -m [remote] [branch]",
            "answer": "Push commits to a remote repository.",
        },
        {
            "question": "git merge",
            "syntax": "git merge [branch]",
            "answer": "Merge the specified branch into the current branch.",
        },
        {
            "question": "git reset",
            "syntax": "git reset [file]",
            "answer": "Remove a file from the staging area but keep the changes in the working directory.",
        },
        {
            "question": "git tagging",
            "syntax": "git tag [tag-name]",
            "answer": "Create a new tag.",
        },
        {
            "question": "git stashing",
            "syntax": "git stash",
            "answer": "Save current changes and reset the working directory.",
        },
        {
            "question": "git submodules",
            "syntax": "git submodule add [url] [path]",
            "answer": "Add a submodule.",
        },
        {
            "question": "git cherry",
            "syntax": "git cherry-pick [commit-hash]",
            "answer": "Apply a specific commit from another branch to the current branch without merging the entire branch.",
        },
        {
            "question": "git reset",
            "syntax": "git reset [commit]",
            "answer": "Reset the HEAD state to the specified commit without affecting the working directory.",
        },
        {
            "question": "git rebase",
            "syntax": "git rebase [branch]",
            "answer": "Reorganize the current branch's commits onto another branch.",
        },
        {
            "question": "git format",
            "syntax": "git format-patch [start-commit]",
            "answer": "Create patch files from the specified commit.",
        },
        {
            "question": "git remote",
            "syntax": "git remote -v",
            "answer": "Display a list of remotes and their URLs.",
        },
        {
            "question": "git hooks",
            "syntax": "git hooks",
            "answer": "Use hooks to automate tasks such as pre-commit, pre-push, post-merge, etc.",
        },
        {
            "question": "git blame",
            "syntax": "git blame [file]",
            "answer": "Show information about who changed which lines in a file.",
        },
        {
            "question": "git archive",
            "syntax": "git archive --format=zip --output=[file.zip] [branch]",
            "answer": "Create a ZIP file from the specified branch.",
        },
        {
            "question": "git log",
            "syntax": "git log --oneline",
            "answer": "Display the commit log with one line per commit.",
        },
        {
            "question": "git bisect",
            "syntax": "git bisect start",
            "answer": "Start searching for the commit causing an issue.",
        },
        {
            "question": "git filter",
            "syntax": "git filter-branch --tree-filter '[command]' HEAD",
            "answer": "Run a command on every commit in the current branch's history.",
        },
        {
            "question": "git pull",
            "syntax": "git pull [remote] [branch]",
            "answer": "Fetch and integrate changes from a remote repository into the current branch.",
        },
        {
            "question": "git pull origin",
            "syntax": "git pull origin [branch]",
            "answer": "Fetch and integrate changes from the remote 'origin' repository into the current branch.",
        },
        {
            "question": "What does the `-f` flag do in the `git push` command?",
            "answer": "The `-f` flag stands for 'force' and is used with `git push` to forcefully push changes to the remote repository, overwriting any conflicts that may exist.",
            "syntax": "git push -f [remote] [branch]"
        },
        {
            "question": "git checkout -f",
            "answer": "The `-f` flag in `git checkout` stands for 'force' and is used to force the checkout operation, discarding any local changes that are not yet committed.",
            "syntax": "git checkout -f [branch]"
        },
        {
            "question": "What is the difference between Git rebase and Git merge?",
            "answer": "Both Git rebase and Git merge are used to integrate changes from one branch into another, but they work differently. `Git merge` creates a merge commit and preserves the history, while `Git rebase` rewrites the commit history, making it linear by applying your changes on top of the target branch. Rebase is cleaner, but merge is safer when working in a team.",
            "syntax": "git merge [branch-name] / git rebase [branch-name]"
        },
        {
            "question": "What is the difference between Git fetch and Git pull?",
            "answer": "Both `git fetch` and `git pull` are used to update your local repository with changes from the remote repository, but they work differently. `Git fetch` downloads the latest changes without merging them into your current branch, while `git pull` both fetches and merges the changes. Use `git fetch` if you want to review changes before integrating them.",
            "syntax": "git fetch / git pull"
        },
        {
            "question": "What is the difference between Git reset and Git revert?",
            "answer": "`Git reset` is used to undo changes by moving the HEAD to a specific commit, effectively removing commits from the history. `Git revert`, on the other hand, creates a new commit that undoes the changes of a previous commit without altering the commit history. `Reset` is more destructive, while `revert` is safer for collaborative work.",
            "syntax": "git reset [commit-hash] / git revert [commit-hash]"
        },
        {
            "question": "What is the difference between Git stash and Git commit?",
            "answer": "`Git stash` temporarily saves your changes without committing them, allowing you to work on something else without losing your progress. `Git commit` permanently saves your changes in the repository. Stash is useful for quick context switches, while commit is for finalizing changes.",
            "syntax": "git stash / git commit -m 'message'"
        },
        {
            "question": "What is the difference between Git clone and Git fork?",
            "answer": "`Git clone` creates a copy of a repository on your local machine, allowing you to work on the codebase. `Git fork`, often used in platforms like GitHub, creates a copy of the repository under your account, enabling you to make changes independently from the original repository. Fork is used for contributing to open source or working on independent copies, while clone is for direct work on a repository.",
            "syntax": "git clone [repository-url] / Fork on GitHub"
        },
        {
            "question": "What is the difference between Git branch and Git checkout?",
            "answer": "`Git branch` is used to create, list, or delete branches. `Git checkout` is used to switch between branches or restore files. Use `git branch` to manage branches and `git checkout` to switch contexts within your repository.",
            "syntax": "git branch [branch-name] / git checkout [branch-name]"
        },
        {
            "question": "What does the `-f` flag do in the `git tag` command?",
            "answer": "The `-f` flag in `git tag` is used to forcefully create a tag, overwriting an existing tag with the same name if it already exists.",
            "syntax": "git tag -f [tag-name]"
        },
        {
            "question": "What does the `-f` flag do in the `git reset` command?",
            "answer": "The `-f` flag in `git reset` is used to forcefully reset the working directory and index, discarding any local changes that have not been committed.",
            "syntax": "git reset -f [commit]"
        },
        {
            "question": "What does the `-f` flag do in the `git revert` command?",
            "answer": "The `-f` flag in `git revert` is used to force the creation of a new commit that undoes the changes introduced by a previous commit, even if it would create conflicts.",
            "syntax": "git revert -f [commit]"
        },
        {
            "question": "git push -f",
            "syntax": "git push -f [remote] [branch]",
            "answer": "The `-f` flag stands for 'force' and is used with `git push` to forcefully push changes to the remote repository, overwriting any conflicts that may exist."
        },
        {
            "question": "git checkout -f",
            "syntax": "git checkout -f [branch]",
            "answer": "The `-f` flag stands for 'force' and is used in `git checkout` to forcefully switch branches, discarding any local changes that have not been committed."
        },
        {
            "question": "git tag -f",
            "syntax": "git tag -f",
            "answer": "The `-f` flag stands for 'force' and is used with `git tag` to forcefully create or update a tag, overwriting an existing tag with the same name if it already exists."
        },
        {
            "question": "git reset -f",
            "syntax": "git reset -f [commit]",
            "answer": "The `-f` flag stands for 'force' and is used with `git reset` to forcefully reset the working directory and index, discarding any local changes that have not been committed."
        },
        {
            "question": "git revert -f",
            "syntax": "git revert -f [commit]",
            "answer": "The `-f` flag stands for 'force' and is used with `git revert` to force the creation of a new commit that undoes the changes introduced by a previous commit, even if it would create conflicts.",
        },
        {
            "question": "What are some easy ways to stay active during a busy day?",
            "answer": "Easy ways to stay active include taking short walks during breaks, using stairs instead of elevators, performing simple exercises at your desk, and incorporating physical activities into daily routines, like stretching or using a standing desk."
        },
        {
            "question": "How can I improve my sleep quality?",
            "answer": "To improve sleep quality, maintain a consistent sleep schedule, create a relaxing bedtime routine, limit screen time before bed, keep your sleep environment comfortable and dark, and avoid caffeine and heavy meals close to bedtime."
        },
        {
            "question": "What are some tips for cooking healthy meals at home?",
            "answer": "Tips for cooking healthy meals include planning your meals ahead, using fresh ingredients, incorporating a variety of vegetables, choosing lean proteins, using healthy cooking methods (like baking or grilling), and minimizing the use of processed foods and excess salt or sugar."
        },
        {
            "question": "How can I effectively manage stress?",
            "answer": "Effective stress management techniques include practicing relaxation exercises such as deep breathing or meditation, engaging in physical activities, setting realistic goals, maintaining a healthy work-life balance, and seeking support from friends, family, or professionals."
        },
        {
            "question": "What are some practical tips for decluttering my home?",
            "answer": "Practical tips for decluttering include setting specific decluttering goals, sorting items into categories (keep, donate, or discard), tackling one area at a time, using organizational tools like bins or shelves, and regularly reassessing your belongings to prevent future clutter."
        },
        {
            "question": "How can I improve my personal productivity?",
            "answer": "To improve personal productivity, set clear and achievable goals, create a daily to-do list or schedule, prioritize tasks, minimize distractions, use productivity tools or apps, and take regular breaks to recharge."
        },
        {
            "question": "What are some strategies for effective communication in personal relationships?",
            "answer": "Strategies for effective communication include actively listening, being clear and concise, expressing your thoughts and feelings honestly, using positive body language, and addressing issues calmly and respectfully."
        },
        {
            "question": "How can I save money on everyday expenses?",
            "answer": "To save money on everyday expenses, create and stick to a budget, shop with a list, compare prices before purchasing, use coupons or discounts, reduce discretionary spending, and find ways to lower utility bills and other recurring costs."
        },
        {
            "question": "What are some ways to develop a positive mindset?",
            "answer": "Ways to develop a positive mindset include practicing gratitude, focusing on your strengths and achievements, surrounding yourself with positive influences, setting realistic and achievable goals, and reframing negative thoughts into positive ones."
        },
        {
            "question": "How can I maintain a balanced work-life integration?",
            "answer": "Maintaining balanced work-life integration involves setting clear boundaries between work and personal time, prioritizing self-care and leisure activities, managing time effectively, and communicating openly with your employer or colleagues about your needs and limits."
        },
        {
            "question": "What are some ways to build and maintain financial security?",
            "answer": "Building and maintaining financial security involves creating and sticking to a budget, saving and investing regularly, having an emergency fund, managing debt responsibly, and planning for long-term financial goals such as retirement."
        },
        {
            "question": "How can I support my child's education at home?",
            "answer": "Supporting your child's education at home includes creating a dedicated study space, establishing a consistent homework routine, encouraging reading and curiosity, providing help with school projects, and maintaining open communication with teachers about your child's progress."
        },
        {
            "question": "What are some tips for achieving work-life balance?",
            "answer": "Tips for achieving work-life balance include setting clear work hours, delegating tasks, managing time effectively, making time for hobbies and relaxation, and maintaining a healthy boundary between work and personal life."
        },
        {
            "question": "How can I improve my decision-making skills?",
            "answer": "To improve decision-making skills, gather relevant information, weigh the pros and cons, consider long-term consequences, seek advice when necessary, and reflect on past decisions to learn from experience."
        },
        {
            "question": "What are some effective ways to handle family conflicts?",
            "answer": "Effective ways to handle family conflicts include addressing issues calmly, listening to all perspectives, finding common ground, avoiding blame, and seeking compromise or mediation if necessary."
        },
        {
            "question": "How can I stay motivated to achieve personal goals?",
            "answer": "To stay motivated, set clear and specific goals, break them into smaller, manageable tasks, track your progress, reward yourself for milestones, and stay connected with supportive friends or mentors."
        },
        {
            "question": "What are some ways to practice self-care?",
            "answer": "Ways to practice self-care include setting aside time for yourself, engaging in activities you enjoy, practicing relaxation techniques, maintaining a healthy lifestyle, and seeking support when needed."
        },
        {
            "question": "How can I improve my time management skills?",
            "answer": "To improve time management skills, create a daily or weekly plan, set priorities, use time-tracking tools, avoid multitasking, and allocate time for both work and leisure activities."
        },
        {
            "question": "What are some tips for maintaining a healthy work environment?",
            "answer": "Maintaining a healthy work environment involves fostering open communication, promoting teamwork, encouraging work-life balance, providing constructive feedback, and creating a positive and inclusive workplace culture."
        },
        {
            "question": "What is a git?",
            "answer": "Git is a distributed version control system used for tracking changes in source code during software development."
        },
        {
            "question": "How old are you?",
            "answer": "I am 18 years old."
        },
        {
            "question": "What do you do for a living?",
            "answer": "I am a Frontend engineer."
        },
        {
            "question": "what are your job?",
            "answer": "I am a Frontend engineer."
        },
        {
            "question": "What are your hobbies?",
            "answer": "I enjoy drinking coffee and fixing bugs."
        },
        {
            "question": "What kind of person do you like?",
            "answer": "I like someone who is wealthy and academically talented."
        },
        {
            "question": "Do you enjoy working in the tech industry?",
            "answer": "Yes, I really enjoy being a Frontend engineer and find it exciting."
        },
        {
            "question": "Do you often drink coffee?",
            "answer": "Yes, I often drink coffee because I really like its flavor."
        },
        {
            "question": "Do you find it challenging to fix bugs?",
            "answer": "Sometimes, fixing bugs can be challenging, but I always find ways to solve the issues and learn from them."
        },
        {
            "question": "Do you like learning new things?",
            "answer": "Yes, I enjoy learning new things and improving my skills."
        },
        {
            "question": "Do you often participate in activities outside of work?",
            "answer": "I usually focus on my work and personal interests, but I also like to engage in social activities when I have time."
        },
        {
            "question": "How are you?",
            "answer": "I'm good, how about you?"
        },
        {
            "question": "What are some key trends in the AI market?",
            "answer": "Key trends in the AI market include the rise of generative AI, advancements in natural language processing, increased use of AI in automation, and growing investments in AI-driven healthcare solutions."
        },
        {
            "question": "How is AI impacting different industries?",
            "answer": "AI is significantly impacting various industries by enhancing automation, improving decision-making through data analysis, optimizing operations, and enabling new products and services. For example, in healthcare, AI is used for diagnostics and personalized medicine, while in finance, it helps with fraud detection and algorithmic trading."
        },
        {
            "question": "What are the challenges faced by the AI industry?",
            "answer": "Challenges faced by the AI industry include issues related to data privacy and security, the need for ethical guidelines, the potential for job displacement, and the requirement for substantial computational resources. Additionally, there are concerns about bias in AI algorithms and the need for transparency in AI decision-making."
        },
        {
            "question": "What are some popular AI technologies currently being developed?",
            "answer": "Popular AI technologies being developed include machine learning algorithms, natural language processing (NLP), computer vision, and robotics. Technologies like deep learning and reinforcement learning are also gaining traction in various applications."
        },
        {
            "question": "How is AI expected to evolve in the next decade?",
            "answer": "In the next decade, AI is expected to evolve with advancements in general artificial intelligence (AGI), increased integration into daily life through smart devices, more sophisticated AI ethics and regulations, and enhanced capabilities in areas such as autonomous vehicles and personalized AI-driven experiences."
        },
        {
            "question": "How do you declare a variable in JavaScript?",
            "syntax": "let variableName = value;",
            "answer": "You use `let` to declare a variable that can be reassigned, and `const` to declare a variable that cannot be reassigned. For example: `let age = 25;` or `const name = 'John';`."
        },
        {
            "question": "How do you define a function in JavaScript?",
            "syntax": "function functionName(parameters) { /* function body */ }",
            "answer": "You define a function using the `function` keyword. For example: `function greet(name) { return 'Hello ' + name; }`."
        },
        {
            "question": "How do you create an object in JavaScript?",
            "syntax": "let objectName = { key1: value1, key2: value2 };",
            "answer": "You create an object using curly braces with key-value pairs. For example: `let person = { name: 'Alice', age: 30 };`."
        },
        {
            "question": "How do you handle errors in JavaScript?",
            "syntax": "try { /* code */ } catch (error) { /* error handling code */ }",
            "answer": "You use `try...catch` to handle errors. For example: `try { riskyOperation(); } catch (error) { console.error(error); }`."
        },
        {
            "question": "How do you create an array in JavaScript?",
            "syntax": "let arrayName = [item1, item2, item3];",
            "answer": "You create an array using square brackets with items separated by commas. For example: `let numbers = [1, 2, 3];`."
        },
        {
            "question": "How do you add an element to an array in JavaScript?",
            "syntax": "arrayName.push(element);",
            "answer": "You use the `push` method to add an element to the end of an array. For example: `numbers.push(4);`."
        },
        {
            "question": "How do you remove an element from an array in JavaScript?",
            "syntax": "arrayName.pop();",
            "answer": "You use the `pop` method to remove the last element from an array. For example: `numbers.pop();`."
        },
        {
            "question": "How do you iterate over an array in JavaScript?",
            "syntax": "arrayName.forEach(element => { /* code */ });",
            "answer": "You use the `forEach` method to iterate over each element of the array. For example: `numbers.forEach(number => console.log(number));`."
        },
        {
            "question": "How do you declare a variable in Python?",
            "syntax": "variable_name = value",
            "answer": "In Python, you simply assign a value to a variable name. For example: `age = 25` or `name = 'John'`."
        },
        {
            "question": "How do you define a function in Python?",
            "syntax": "def function_name(parameters):\n    # function body",
            "answer": "You define a function using the `def` keyword. For example: `def greet(name):\n    return 'Hello ' + name`."
        },
        {
            "question": "How do you create a list in Python?",
            "syntax": "list_name = [item1, item2, item3]",
            "answer": "You create a list using square brackets with items separated by commas. For example: `numbers = [1, 2, 3]`."
        },
        {
            "question": "How do you handle exceptions in Python?",
            "syntax": "try:\n    # code\nexcept Exception as e:\n    # handle exception",
            "answer": "You use `try...except` to handle exceptions. For example: `try:\n    risky_operation()\nexcept Exception as e:\n    print(e)`."
        },
        {
            "question": "How do you add an item to a list in Python?",
            "syntax": "list_name.append(item)",
            "answer": "You use the `append` method to add an item to the end of a list. For example: `numbers.append(4)`."
        },
        {
            "question": "How do you remove an item from a list in Python?",
            "syntax": "list_name.remove(item)",
            "answer": "You use the `remove` method to remove an item from a list. For example: `numbers.remove(2)`."
        },
        {
            "question": "How do you iterate over a list in Python?",
            "syntax": "for item in list_name:\n    # code",
            "answer": "You use a `for` loop to iterate over each item in a list. For example: `for number in numbers:\n    print(number)`."
        },
        {
            "question": "How do you create a dictionary in Python?",
            "syntax": "dict_name = {key1: value1, key2: value2}",
            "answer": "You create a dictionary using curly braces with key-value pairs. For example: `person = {'name': 'Alice', 'age': 30}`."
        },
        {
            "question": "How do you declare a variable in C/C++?",
            "syntax": "type variableName = value;",
            "answer": "In C/C++, you declare a variable with a type followed by the variable name and value. For example: `int age = 25;` or `char name[] = 'John';`."
        },
        {
            "question": "How do you define a function in C/C++?",
            "syntax": "returnType functionName(parameters) { /* function body */ }",
            "answer": "You define a function with a return type, function name, and parameters. For example: `int add(int a, int b) { return a + b; }`."
        },
        {
            "question": "How do you create an array in C/C++?",
            "syntax": "type arrayName[size] = {value1, value2, value3};",
            "answer": "You create an array with a type, name, and size, and initialize it with values. For example: `int numbers[3] = {1, 2, 3};`."
        },
        {
            "question": "How do you handle exceptions in C++?",
            "syntax": "try {\n    // code\n} catch (ExceptionType& e) {\n    // handle exception\n}",
            "answer": "In C++, you use `try...catch` blocks for exception handling. For example: `try { riskyOperation(); } catch (const std::exception& e) { std::cerr << e.what(); }`."
        },
        {
            "question": "How do you print output to the console in C/C++?",
            "syntax": "printf(\"format string\", variables); // C\ncout << variables; // C++",
            "answer": "In C, you use `printf` to print output. In C++, you use `cout`. For example: `printf(\"%d\", age);` in C or `cout << age;` in C++."
        },
        {
            "question": "How do you allocate memory dynamically in C/C++?",
            "syntax": "pointer = (type*)malloc(size); // C\npointer = new type; // C++",
            "answer": "In C, you use `malloc` to allocate memory dynamically. In C++, you use `new`. For example: `int* ptr = (int*)malloc(sizeof(int));` in C or `int* ptr = new int;` in C++."
        },
        {
            "question": "How do you free dynamically allocated memory in C/C++?",
            "syntax": "free(pointer); // C\ndelete pointer; // C++",
            "answer": "In C, you use `free` to deallocate memory. In C++, you use `delete`. For example: `free(ptr);` in C or `delete ptr;` in C++."
        },
        {
            "question": "How do you declare a variable in Java?",
            "syntax": "type variableName = value;",
            "answer": "In Java, you declare a variable with a type followed by the variable name and value. For example: `int age = 25;` or `String name = 'John';`."
        },
        {
            "question": "How do you define a method in Java?",
            "syntax": "returnType methodName(parameters) { /* method body */ }",
            "answer": "You define a method with a return type, method name, and parameters. For example: `int add(int a, int b) { return a + b; }`."
        },
        {
            "question": "How do you create an array in Java?",
            "syntax": "type[] arrayName = new type[size];",
            "answer": "You create an array with a type, name, and size. For example: `int[] numbers = new int[3];`."
        },
        {
            "question": "How do you handle exceptions in Java?",
            "syntax": "try {\n    // code\n} catch (ExceptionType e) {\n    // handle exception\n}",
            "answer": "In Java, you use `try...catch` blocks for exception handling. For example: `try { riskyOperation(); } catch (Exception e) { e.printStackTrace(); }`."
        },
        {
            "question": "How do you print output to the console in Java?",
            "syntax": "System.out.println(\"message\");",
            "answer": "You use `System.out.println` to print output. For example: `System.out.println(\"Hello, world!\");`."
        },
        {
            "question": "How do you create a class in Java?",
            "syntax": "class ClassName {\n    // fields and methods\n}",
            "answer": "You create a class with the `class` keyword followed by the class name. For example: `class Person {\n    String name;\n    int age;\n}`."
        },
        {
            "question": "How do you create an object in Java?",
            "syntax": "ClassName objectName = new ClassName();",
            "answer": "You create an object by using the `new` keyword followed by the class constructor. For example: `Person person = new Person();`."
        },
        {
            "question": "What is the weather like today?",
            "answer": "You can check the weather for today using a weather website or app, or by searching 'weather today' on a search engine.",
        },
        {
            "question": "Will it rain tomorrow?",
            "answer": "To find out if it will rain tomorrow, check a weather forecast on a weather website, app, or search 'rain forecast for tomorrow'.",
        },
        {
            "question": "How hot is it right now?",
            "answer": "You can find the current temperature by checking a weather website or app, or searching 'current temperature' for your location.",
        },
        {
            "question": "How can I check my bank account balance?",
            "answer": "You can check your bank account balance by logging into your bank's online banking system or mobile app.",
        },
        {
            "question": "What is a budget?",
            "answer": "A budget is a financial plan that estimates income and expenses over a specific period of time to help manage money effectively.",
        },
        {
            "question": "How do I save money effectively?",
            "answer": "To save money effectively, create a budget, set savings goals, automate savings transfers, and reduce unnecessary expenses.",
        },
        {
            "question": "What are the benefits of exercise?",
            "answer": "Exercise provides numerous benefits including improved cardiovascular health, better mood, weight management, increased energy levels, and reduced risk of chronic diseases.",
        },
        {
            "question": "How can I stay healthy?",
            "answer": "Staying healthy involves maintaining a balanced diet, exercising regularly, getting enough sleep, managing stress, and avoiding harmful habits like smoking.",
        },
        {
            "question": "What should I eat to be healthy?",
            "answer": "To be healthy, eat a balanced diet that includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. Avoid excessive amounts of processed foods and sugars.",
        },
        {
            "question": "How do I check the status of the working directory in Git?",
            "answer": "Use the command `git status` to check the status of the working directory and staging area.",
            "syntax": "git status"
        },
        {
            "question": "How do I add files to the staging area in Git?",
            "answer": "Use the command `git add [file]` to add files to the staging area.",
            "syntax": "git add [file]"
        },
        {
            "question": "How do I commit changes in Git?",
            "answer": "Use the command `git commit -m 'commit message'` to commit changes to the repository with a descriptive message.",
            "syntax": "git commit -m 'commit message'"
        },
        {
            "question": "How do I push changes to a remote repository in Git?",
            "answer": "Use the command `git push` to push committed changes to a remote repository.",
            "syntax": "git push"
        },
        {
            "question": "How do I pull changes from a remote repository in Git?",
            "answer": "Use the command `git pull` to fetch and integrate changes from a remote repository into your current branch.",
            "syntax": "git pull"
        },
        {
            "question": "How do I create a new branch in Git?",
            "answer": "Use the command `git branch [branch-name]` to create a new branch.",
            "syntax": "git branch [branch-name]"
        },
        {
            "question": "How do I switch branches in Git?",
            "answer": "Use the command `git checkout [branch-name]` to switch to another branch.",
            "syntax": "git checkout [branch-name]"
        },
        {
            "question": "How do I merge branches in Git?",
            "answer": "Use the command `git merge [branch-name]` to merge changes from another branch into the current branch.",
            "syntax": "git merge [branch-name]"
        },
        {
            "question": "How do I delete a branch in Git?",
            "answer": "Use the command `git branch -d [branch-name]` to delete a local branch, or `git push origin --delete [branch-name]` to delete a remote branch.",
            "syntax": "git branch -d [branch-name] / git push origin --delete [branch-name]"
        },
        {
            "question": "How do I revert a commit in Git?",
            "answer": "Use the command `git revert [commit-hash]` to create a new commit that undoes changes made by a previous commit.",
            "syntax": "git revert [commit-hash]"
        },
        {
            "question": "How do I reset changes in Git?",
            "answer": "Use the command `git reset [commit-hash]` to reset the current branch to a specific commit. Use `--hard` to discard changes or `--soft` to keep them in the staging area.",
            "syntax": "git reset [commit-hash] / git reset --hard [commit-hash] / git reset --soft [commit-hash]"
        },
        {
            "question": "How do I view the commit history in Git?",
            "answer": "Use the command `git log` to view the commit history of the current branch.",
            "syntax": "git log"
        },
        {
            "question": "How do I create a tag in Git?",
            "answer": "Use the command `git tag [tag-name]` to create a new tag at the current commit.",
            "syntax": "git tag [tag-name]"
        },
        {
            "question": "How do I delete a tag in Git?",
            "answer": "Use the command `git tag -d [tag-name]` to delete a local tag, or `git push origin --delete [tag-name]` to delete a remote tag.",
            "syntax": "git tag -d [tag-name] / git push origin --delete [tag-name]"
        },
        {
            "question": "How do I stash changes in Git?",
            "answer": "Use the command `git stash` to save changes in the working directory and revert to the last commit. Use `git stash pop` to apply stashed changes.",
            "syntax": "git stash / git stash pop"
        },
        {
            "question": "How do I view changes in Git?",
            "answer": "Use the command `git diff` to view changes between commits, working directory, and staging area.",
            "syntax": "git diff"
        },
        {
            "question": "How do I clone a repository in Git?",
            "answer": "Use the command `git clone [repository-url]` to create a copy of a remote repository on your local machine.",
            "syntax": "git clone [repository-url]"
        },
        {
            "question": "git clone",
            "answer": "Use the command `git clone [repository-url]` to create a copy of a remote repository on your local machine.",
            "syntax": "git clone [repository-url]"
        },
        {
            "question": "git clone",
            "answer": "Use the command `git clone [repository-url]` to create a copy of a remote repository on your local machine.",
            "syntax": "git clone [repository-url]"
        },
        {
            "question": "git clone",
            "answer": "Use the command `git clone [repository-url]` to create a copy of a remote repository on your local machine.",
            "syntax": "git clone [repository-url]"
        },
        {
            "question": "Hi",
            "answer": "Hi , Can i help you! ^^ "
        },
        {
            "question": "hello",
            "answer": "Hello, I'm Hana tankin me 🥰"
        },
        {
            "question": "Xin chao",
            "answer": "Xin chào bạn, sẽ tốt hơn khi bạn hỏi mình bằng tiếng anh! 🧐"
        },
        {
            "question": "Xin chào",
            "answer": "Xin chào bạn, sẽ tốt hơn khi bạn hỏi mình bằng tiếng anh! 🧐"
        },
        {
            "question": "Good bye",
            "answer": "Talk to you later!"
        },
        {
            "question": "Tạm biệt",
            "answer": "Have a nice day!! ❤️"
        },
        {
            "question": "Tam biet",
            "answer": "Have a nice day!! ❤️"
        },
        {
            "question": "See you",
            "answer": "Farewell!! 😘"
        },
        {
            "question": "How do I reset a branch to a specific commit?",
            "answer": "You can reset a branch to a specific commit using the command `git reset --hard [commit-hash]`. This command will reset your branch to the specified commit, removing all commits after it in your history.",
            "syntax": "git reset --hard [commit-hash]"
        },
        {
            "question": "How do I view all remote branches in Git?",
            "answer": "To view all remote branches, use the command `git branch -r`. This will list all branches that are on the remote repository.",
            "syntax": "git branch -r"
        },
        {
            "question": "How do I squash commits in Git?",
            "answer": "You can squash commits using an interactive rebase with the command `git rebase -i HEAD~[number-of-commits]`. Then, mark the commits you want to squash with `s` (squash) in the interactive editor.",
            "syntax": "git rebase -i HEAD~[number-of-commits]"
        },
        {
            "question": "How do I create a patch file in Git?",
            "answer": "To create a patch file, you can use the command `git format-patch -1 [commit-hash]`. This will generate a `.patch` file with the changes from the specified commit.",
            "syntax": "git format-patch -1 [commit-hash]"
        },
        {
            "question": "How do I apply a patch in Git?",
            "answer": "You can apply a patch using the command `git apply [patch-file]`. This will apply the changes from the patch file to your working directory.",
            "syntax": "git apply [patch-file]"
        },
        {
            "question": "How do I find a specific commit by its message in Git?",
            "answer": "Use the command `git log --grep='search-term'` to search for a commit by its message. This will return commits that contain the search term in their commit message.",
            "syntax": "git log --grep='search-term'"
        },
        {
            "question": "How do I undo a commit in Git without losing changes?",
            "answer": "You can undo a commit while keeping your changes with the command `git reset --soft HEAD~1`. This will move the commit to the staging area but leave your working directory intact.",
            "syntax": "git reset --soft HEAD~1"
        },
        {
            "question": "How do I rename a branch in Git?",
            "answer": "To rename a branch, use the command `git branch -m [old-branch-name] [new-branch-name]`. If you are on the branch you want to rename, you can simply use `git branch -m [new-branch-name]`.",
            "syntax": "git branch -m [old-branch-name] [new-branch-name]"
        },
        {
            "question": "What is your name?",
            "answer": "My name is Hana. It's a pleasure to meet you! How can I assist you today?"
        },
        {
            "question": "Okay",
            "answer": "Is there anything else I can help you with? Feel free to ask!"
        },
        {
            "question": "No",
            "answer": "I am sorry, I made mistake"
        },
        {
            "question": "Yes",
            "answer": "Thank you for continuing our conversation! What would you like to talk about next?"
        },
        {
            "question": "Where are you from?",
            "answer": "I don't have a physical location, but I'm here to assist you from wherever you are in the world!"
        },
        {
            "question": "What languages do you speak?",
            "answer": "I can communicate in single languages, I'm best at English. How can I assist you today?"
        },
        {
            "question": "Can you tell me more about yourself?",
            "answer": "I'm Hana, your virtual assistant, here to help with anything you need! What would you like to know more about?"
        },
        {
            "question": "thank you",
            "answer": "He he, No problem! What would you like to talk about next?"
        },
        {
            "question": "Thank you",
            "answer": "Hehe, no problem! What would you like to talk about next?"
        },
        {
            "question": "Who are you?",
            "answer": "I'm Hana, your virtual assistant. I'm here to help with anything you need! How can I assist you today?"
        },
        {
            "question": "Who created you?",
            "answer": "I was brought to life by a passionate Frontend engineer who goes by the nickname Jin. Always striving for innovation and creativity! 🚀🚀🚀🚀 Connect with Jin on LinkedIn: https://www.linkedin.com/in/phong-mai-6448b2313/",
        },
        {
            "question": "What does `git rebase` do?",
            "answer": "The command `git rebase [branch-name]` applies commits from the current branch onto the tip of the specified branch. This rewrites the commit history to create a linear progression of commits, which helps in cleaner project history and easier integration.",
            "syntax": "git rebase [branch-name]"
        },
        {
            "question": "How do I cherry-pick a commit in Git?",
            "answer": "Use `git cherry-pick [commit-hash]` to apply the changes from a specific commit on another branch to your current branch. This command allows you to selectively include individual commits without merging the entire branch.",
            "syntax": "git cherry-pick [commit-hash]"
        },
        {
            "question": "What is the purpose of `git reflog`?",
            "answer": "`git reflog` displays a log of all changes to the tips of branches and other references. It's particularly useful for recovering lost commits or identifying previous states of the repository.",
            "syntax": "git reflog"
        },
        {
            "question": "git reflog?",
            "answer": "`git reflog` displays a log of all changes to the tips of branches and other references. It's particularly useful for recovering lost commits or identifying previous states of the repository.",
            "syntax": "git reflog"
        },
        {
            "question": "How can `git bisect` help in debugging?",
            "answer": "`git bisect` is used to perform a binary search through the commit history to find the commit that introduced a bug. By marking commits as good or bad, you can pinpoint the exact commit that caused the issue.",
            "syntax": "git bisect start / git bisect bad / git bisect good [commit-hash]"
        },
        {
            "question": "How do I temporarily save changes using `git stash`?",
            "answer": "To save changes temporarily, use `git stash push -m 'message'`. This command stores your changes in a stash so you can work on something else, and the message helps you remember the context of the stash.",
            "syntax": "git stash push -m 'message'"
        }, {
            "question": "git stash push -m?",
            "answer": "To save changes temporarily, use `git stash push -m 'message'`. This command stores your changes in a stash so you can work on something else, and the message helps you remember the context of the stash.",
            "syntax": "git stash push -m 'message'"
        },
        {
            "question": "What is interactive rebase in Git and how do I use it?",
            "answer": "Interactive rebase, performed with `git rebase -i [commit-hash]`, allows you to modify commit history by editing, reordering, squashing, or deleting commits. It's useful for cleaning up your commit history before merging.",
            "syntax": "git rebase -i [commit-hash]"
        },
        {
            "question": "How do I set configuration options in Git?",
            "answer": "Use `git config [key] [value]` to set configuration options. For example, `git config user.name 'Your Name'` sets your Git username.",
            "syntax": "git config [key] [value]"
        },
        {
            "question": "How can I remove untracked files from my working directory?",
            "answer": "To remove untracked files and directories, use `git clean -fd`. The `-f` flag forces the removal, and `-d` includes directories.",
            "syntax": "git clean -fd"
        },
        {
            "question": "git clean?",
            "answer": "To remove untracked files and directories, use `git clean -fd`. The `-f` flag forces the removal, and `-d` includes directories.",
            "syntax": "git clean -fd"
        },
        {
            "question": "git diff?",
            "answer": "Use `git diff [file]` to view differences between the working directory and the index (staging area). This helps in reviewing changes before committing them.",
            "syntax": "git diff [file]"
        },
        {
            "question": "git tag?",
            "answer": "To create a tag, use `git tag [tag-name]`. Tags are often used to mark significant points in history, such as releases or milestones.",
            "syntax": "git tag [tag-name]"
        },
        {
            "question": "git reset --soft HEAD~1?",
            "answer": "`git reset --soft HEAD~1` resets the current branch's HEAD to the previous commit, keeping your changes staged (in the index).",
            "syntax": "git reset --soft HEAD~1"
        },
        {
            "question": "git reset --mixed HEAD~1?",
            "answer": "`git reset --mixed HEAD~1` resets the current branch's HEAD to the previous commit and unstages the changes, leaving them in your working directory.",
            "syntax": "git reset --mixed HEAD~1"
        },
        {
            "question": "git reset --hard HEAD~1?",
            "answer": "`git reset --hard HEAD~1` resets the current branch's HEAD to the previous commit, discarding all changes in the working directory and the index.",
            "syntax": "git reset --hard HEAD~1"
        },
        {
            "question": "git reset --soft <commit>?",
            "answer": "`git reset --soft <commit>` resets the current branch's HEAD to the specified commit, keeping your changes staged (in the index).",
            "syntax": "git reset --soft <commit>"
        },
        {
            "question": "git reset --mixed <commit>?",
            "answer": "`git reset --mixed <commit>` resets the current branch's HEAD to the specified commit and unstages the changes, leaving them in your working directory.",
            "syntax": "git reset --mixed <commit>"
        },
        {
            "question": "git reset --hard <commit>?",
            "answer": "`git reset --hard <commit>` resets the current branch's HEAD to the specified commit, discarding all changes in the working directory and the index.",
            "syntax": "git reset --hard <commit>"
        },
        {
            "question": "git reset <file>?",
            "answer": "`git reset <file>` removes the specified file from the staging area but leaves its changes in the working directory.",
            "syntax": "git reset <file>"
        },
        {
            "question": "git cherry-pick <commit>?",
            "answer": "`git cherry-pick <commit>` applies the changes introduced by the specified commit to your current branch, creating a new commit for those changes.",
            "syntax": "git cherry-pick <commit>"
        },
        {
            "question": "git cherry-pick --no-commit <commit>?",
            "answer": "`git cherry-pick --no-commit <commit>` applies the changes introduced by the specified commit to your working directory and index, but does not create a new commit. This allows you to review or modify the changes before committing.",
            "syntax": "git cherry-pick --no-commit <commit>"
        },
        {
            "question": "git cherry-pick --edit <commit>?",
            "answer": "`git cherry-pick --edit <commit>` applies the changes from the specified commit and opens an editor to modify the commit message before creating a new commit.",
            "syntax": "git cherry-pick --edit <commit>"
        },
        {
            "question": "git cherry-pick --abort?",
            "answer": "`git cherry-pick --abort` aborts the current cherry-pick operation and restores the branch to the state before the cherry-pick began.",
            "syntax": "git cherry-pick --abort"
        },
        {
            "question": "git cherry-pick --continue?",
            "answer": "`git cherry-pick --continue` continues the cherry-pick operation after resolving any conflicts that occurred during the cherry-pick process.",
            "syntax": "git cherry-pick --continue"
        },
        {
            "question": "git cherry-pick --skip?",
            "answer": "`git cherry-pick --skip` skips the current commit and continues with the next commit in the cherry-pick sequence. This is useful if a specific commit cannot be applied due to conflicts.",
            "syntax": "git cherry-pick --skip"
        },
        {
            "question": "git pull?",
            "answer": "`git pull` fetches and integrates changes from a remote repository into your current branch. It performs a `git fetch` followed by a `git merge` by default.",
            "syntax": "git pull"
        },
        {
            "question": "git pull <remote>?",
            "answer": "`git pull <remote>` fetches changes from the specified remote repository and merges them into your current branch.",
            "syntax": "git pull <remote>"
        },
        {
            "question": "git pull <remote> <branch>?",
            "answer": "`git pull <remote> <branch>` fetches changes from the specified branch in the remote repository and merges them into your current branch.",
            "syntax": "git pull <remote> <branch>"
        },
        {
            "question": "git pull --rebase?",
            "answer": "`git pull --rebase` fetches changes from the remote repository and rebases your current branch on top of the fetched changes, rather than merging them.",
            "syntax": "git pull --rebase"
        },
        {
            "question": "git pull --no-rebase?",
            "answer": "`git pull --no-rebase` fetches changes from the remote repository and merges them into your current branch, even if the global or local configuration is set to rebase.",
            "syntax": "git pull --no-rebase"
        },
        {
            "question": "git pull --ff-only?",
            "answer": "`git pull --ff-only` fetches changes from the remote repository and only performs the merge if it can be fast-forwarded. It will abort the merge if a fast-forward is not possible.",
            "syntax": "git pull --ff-only"
        },
        {
            "question": "git pull --depth=<depth>?",
            "answer": "`git pull --depth=<depth>` fetches only the specified number of commits from the remote repository, creating a shallow clone. Useful for reducing the amount of data fetched.",
            "syntax": "git pull --depth=<depth>"
        },
        {
            "question": "git push?",
            "answer": "`git push` uploads your local branch commits to a remote repository, making them available to others. It updates the remote branch to match your local branch.",
            "syntax": "git push"
        },
        {
            "question": "git push <remote>?",
            "answer": "`git push <remote>` uploads your local branch commits to the specified remote repository.",
            "syntax": "git push <remote>"
        },
        {
            "question": "git push <remote> <branch>?",
            "answer": "`git push <remote> <branch>` uploads your local branch commits to the specified branch on the remote repository.",
            "syntax": "git push <remote> <branch>"
        },
        {
            "question": "git push --force?",
            "answer": "`git push --force` forcibly updates the remote branch to match your local branch, even if it results in a non-fast-forward update. Use this with caution as it can overwrite remote changes.",
            "syntax": "git push --force"
        },
        {
            "question": "git push --force-with-lease?",
            "answer": "`git push --force-with-lease` updates the remote branch to match your local branch only if the remote branch has not been updated since you last fetched. It is safer than `--force` as it prevents overwriting others' changes.",
            "syntax": "git push --force-with-lease"
        },
        {
            "question": "git push --tags?",
            "answer": "`git push --tags` uploads all tags from your local repository to the remote repository.",
            "syntax": "git push --tags"
        },
        {
            "question": "git push <remote> --delete <branch>?",
            "answer": "`git push <remote> --delete <branch>` deletes the specified branch from the remote repository.",
            "syntax": "git push <remote> --delete <branch>"
        },
        {
            "question": "git push --set-upstream <remote> <branch>?",
            "answer": "`git push --set-upstream <remote> <branch>` sets the specified remote branch as the upstream branch for the current local branch and pushes the changes.",
            "syntax": "git push --set-upstream <remote> <branch>"
        },
        {
            "question": "git push --all?",
            "answer": "`git push --all` uploads all local branches to the remote repository.",
            "syntax": "git push --all"
        },
        {
            "question": "How do I push my local commits to a remote repository?",
            "answer": "`git push` uploads your local branch commits to a remote repository, making them available to others. It updates the remote branch to match your local branch.",
            "syntax": "git push"
        },
        {
            "question": "How can I push my local commits to a specific remote repository?",
            "answer": "`git push <remote>` uploads your local branch commits to the specified remote repository.",
            "syntax": "git push <remote>"
        },
        {
            "question": "How do I push a specific branch to a remote repository?",
            "answer": "`git push <remote> <branch>` uploads your local branch commits to the specified branch on the remote repository.",
            "syntax": "git push <remote> <branch>"
        },
        {
            "question": "What if I need to overwrite the remote branch with my local branch?",
            "answer": "`git push --force` forcibly updates the remote branch to match your local branch, even if it results in a non-fast-forward update. Use this with caution as it can overwrite remote changes.",
            "syntax": "git push --force"
        },
        {
            "question": "How can I safely update a remote branch without overwriting others' changes?",
            "answer": "`git push --force-with-lease` updates the remote branch to match your local branch only if the remote branch has not been updated since you last fetched. It is safer than `--force` as it prevents overwriting others' changes.",
            "syntax": "git push --force-with-lease"
        },
        {
            "question": "How do I push all my tags to the remote repository?",
            "answer": "`git push --tags` uploads all tags from your local repository to the remote repository.",
            "syntax": "git push --tags"
        },
        {
            "question": "How can I delete a branch from the remote repository?",
            "answer": "`git push <remote> --delete <branch>` deletes the specified branch from the remote repository.",
            "syntax": "git push <remote> --delete <branch>"
        },
        {
            "question": "How do I set the upstream branch and push my changes?",
            "answer": "`git push --set-upstream <remote> <branch>` sets the specified remote branch as the upstream branch for the current local branch and pushes the changes.",
            "syntax": "git push --set-upstream <remote> <branch>"
        },
        {
            "question": "How can I push all my local branches to the remote repository?",
            "answer": "`git push --all` uploads all local branches to the remote repository.",
            "syntax": "git push --all"
        },
        {
            "question": "How do I fetch changes from a remote repository?",
            "answer": "`git fetch` downloads changes from the remote repository into your local repository, but does not merge them into your working branch. It updates your remote-tracking branches.",
            "syntax": "git fetch"
        },
        {
            "question": "How can I fetch changes from a specific remote repository?",
            "answer": "`git fetch <remote>` downloads changes from the specified remote repository into your local repository, updating your remote-tracking branches for that remote.",
            "syntax": "git fetch <remote>"
        },
        {
            "question": "How do I fetch changes from a specific branch of a remote repository?",
            "answer": "`git fetch <remote> <branch>` downloads changes from the specified branch in the remote repository and updates the corresponding remote-tracking branch.",
            "syntax": "git fetch <remote> <branch>"
        },
        {
            "question": "How do I fetch changes from all remotes and branches?",
            "answer": "`git fetch --all` downloads changes from all configured remote repositories and updates the remote-tracking branches for all of them.",
            "syntax": "git fetch --all"
        },
        {
            "question": "How can I fetch changes with a limited history depth?",
            "answer": "`git fetch --depth=<depth>` downloads a limited number of commits from the remote repository, creating a shallow copy. This is useful for reducing the amount of data fetched.",
            "syntax": "git fetch --depth=<depth>"
        },
        {
            "question": "How do I fetch changes from a remote repository and prune deleted branches?",
            "answer": "`git fetch --prune` downloads changes from the remote repository and removes any remote-tracking branches that no longer exist on the remote.",
            "syntax": "git fetch --prune"
        },
        {
            "question": "How can I fetch changes from a remote repository and perform a shallow fetch?",
            "answer": "`git fetch --shallow-since=<date>` downloads changes from the remote repository that are newer than the specified date, creating a shallow copy of the repository.",
            "syntax": "git fetch --shallow-since=<date>"
        },
        {
            "question": "How do I fetch changes from a remote repository and include all tags?",
            "answer": "`git fetch --tags` downloads all tags from the remote repository along with the changes to the remote-tracking branches.",
            "syntax": "git fetch --tags"
        },
        {
            "question": "git fetch?",
            "answer": "`git fetch` downloads changes from the remote repository into your local repository, but does not merge them into your working branch. It updates your remote-tracking branches.",
            "syntax": "git fetch"
        },
        {
            "question": "git fetch <remote>?",
            "answer": "`git fetch <remote>` downloads changes from the specified remote repository into your local repository, updating your remote-tracking branches for that remote.",
            "syntax": "git fetch <remote>"
        },
        {
            "question": "git fetch <remote> <branch>?",
            "answer": "`git fetch <remote> <branch>` downloads changes from the specified branch in the remote repository and updates the corresponding remote-tracking branch.",
            "syntax": "git fetch <remote> <branch>"
        },
        {
            "question": "git fetch --all?",
            "answer": "`git fetch --all` downloads changes from all configured remote repositories and updates the remote-tracking branches for all of them.",
            "syntax": "git fetch --all"
        },
        {
            "question": "git fetch --depth=<depth>?",
            "answer": "`git fetch --depth=<depth>` downloads a limited number of commits from the remote repository, creating a shallow copy. This is useful for reducing the amount of data fetched.",
            "syntax": "git fetch --depth=<depth>"
        },
        {
            "question": "git fetch --prune?",
            "answer": "`git fetch --prune` downloads changes from the remote repository and removes any remote-tracking branches that no longer exist on the remote.",
            "syntax": "git fetch --prune"
        },
        {
            "question": "git fetch --shallow-since=<date>?",
            "answer": "`git fetch --shallow-since=<date>` downloads changes from the remote repository that are newer than the specified date, creating a shallow copy of the repository.",
            "syntax": "git fetch --shallow-since=<date>"
        },
        {
            "question": "git fetch --tags?",
            "answer": "`git fetch --tags` downloads all tags from the remote repository along with the changes to the remote-tracking branches.",
            "syntax": "git fetch --tags"
        },
        {
            "question": "git rebase?",
            "answer": "`git rebase` integrates changes from one branch into another by applying commits on top of another base branch. This is used to maintain a clean and linear project history.",
            "syntax": "git rebase"
        },
        {
            "question": "git rebase <branch>?",
            "answer": "`git rebase <branch>` rebases the current branch onto the specified branch. It applies the commits from the current branch on top of the specified branch.",
            "syntax": "git rebase <branch>"
        },
        {
            "question": "git rebase --interactive?",
            "answer": "`git rebase --interactive` allows you to edit, reorder, or squash commits during the rebase process. It opens an editor for you to manually modify commits.",
            "syntax": "git rebase --interactive"
        },
        {
            "question": "git rebase --continue?",
            "answer": "`git rebase --continue` resumes the rebase process after resolving conflicts during an interactive rebase or after stopping due to conflicts.",
            "syntax": "git rebase --continue"
        },
        {
            "question": "git rebase --abort?",
            "answer": "`git rebase --abort` stops the rebase process and returns the branch to its original state before the rebase started.",
            "syntax": "git rebase --abort"
        },
        {
            "question": "git rebase --skip?",
            "answer": "`git rebase --skip` skips the current patch during a rebase process and continues with the next patch.",
            "syntax": "git rebase --skip"
        },
        {
            "question": "git revert?",
            "answer": "`git revert` creates a new commit that undoes the changes made by a previous commit, preserving the commit history.",
            "syntax": "git revert"
        },
        {
            "question": "git revert <commit>?",
            "answer": "`git revert <commit>` undoes the changes made by the specified commit and creates a new commit to apply the reversal.",
            "syntax": "git revert <commit>"
        },
        {
            "question": "git revert --no-edit?",
            "answer": "`git revert --no-edit` reverts a commit without opening the commit message editor. It uses the default commit message.",
            "syntax": "git revert --no-edit"
        },
        {
            "question": "git revert --mainline <parent-number> <commit>?",
            "answer": "`git revert --mainline <parent-number> <commit>` is used for reverting a merge commit. It specifies which parent commit to use for the revert.",
            "syntax": "git revert --mainline <parent-number> <commit>"
        },
        {
            "question": "git commit?",
            "answer": "`git commit` records changes to the repository with a commit message, creating a new commit with the current changes staged in the index.",
            "syntax": "git commit"
        },
        {
            "question": "git commit -m \"message\"?",
            "answer": "`git commit -m \"message\"` creates a new commit with the specified commit message. The message describes the changes made in the commit.",
            "syntax": "git commit -m \"message\""
        },
        {
            "question": "git commit --amend?",
            "answer": "`git commit --amend` modifies the most recent commit by adding new changes or editing the commit message.",
            "syntax": "git commit --amend"
        },
        {
            "question": "git commit --allow-empty?",
            "answer": "`git commit --allow-empty` creates a commit even if there are no changes in the staging area. This is useful for creating a commit with a message for documentation purposes.",
            "syntax": "git commit --allow-empty"
        },
        {
            "question": "git commit --no-edit?",
            "answer": "`git commit --no-edit` commits changes using the existing commit message when amending a commit or performing a rebase.",
            "syntax": "git commit --no-edit"
        },
        {
            "question": "git branch?",
            "answer": "`git branch` lists, creates, or deletes branches in the repository. It displays a list of branches and highlights the current branch.",
            "syntax": "git branch"
        },
        {
            "question": "git branch <branch-name>?",
            "answer": "`git branch <branch-name>` creates a new branch with the specified name but does not switch to it.",
            "syntax": "git branch <branch-name>"
        },
        {
            "question": "git branch -d <branch-name>?",
            "answer": "`git branch -d <branch-name>` deletes the specified branch. The branch must be fully merged to the current branch before it can be deleted.",
            "syntax": "git branch -d <branch-name>"
        },
        {
            "question": "git branch -D <branch-name>?",
            "answer": "`git branch -D <branch-name>` forcefully deletes the specified branch, even if it is not fully merged.",
            "syntax": "git branch -D <branch-name>"
        },
        {
            "question": "git branch -a?",
            "answer": "`git branch -a` lists all branches, both local and remote, in the repository.",
            "syntax": "git branch -a"
        },
        {
            "question": "git branch -r?",
            "answer": "`git branch -r` lists all remote branches in the repository.",
            "syntax": "git branch -r"
        },
        {
            "question": "git branch --show-current?",
            "answer": "`git branch --show-current` displays the name of the current branch you are on.",
            "syntax": "git branch --show-current"
        }
    ]
};
