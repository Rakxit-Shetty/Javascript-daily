#!/bin/bash

# Get the commit hashes of the last 10 commits (using only the first 7 characters)
commit_hashes=$(git log --format=%H -n 10 | cut -c1-7)

# Set the initial date
current_date=$(date -d "2023-08-01" +%Y-%m-%d)

# Iterate over the commit hashes and amend the date
for commit_hash in $commit_hashes; do
  # Check if the commit exists
  git show $commit_hash > /dev/null 2>&1
  if [ $? -eq 0 ]; then
    # Start the amend process for the specific commit
    GIT_COMMITTER_DATE="$current_date 00:00:00" git commit --amend --no-edit --date="$current_date 00:00:00"

    # Continue with the rebase, skipping the interactive editor
    git rebase --continue --exec "true"

    current_date=$(date -d "$current_date + 1 day" +%Y-%m-%d)
  else
    echo "Commit $commit_hash does not exist."
  fi
done
