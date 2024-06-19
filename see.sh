#!/bin/bash

# Get the commit hashes of the last 10 commits (using only the first 7 characters)
commit_hashes=$(git log --format=%H -n 10 | cut -c1-7)

# Set the initial date
current_date=$(date -d "2024-04-01" +%Y-%m-%d)

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


start_date="2023-04-01"
current_date=$start_date

# Number of commits to create
num_commits=108

for ((i=0; i<num_commits; i++)); do
    # Create an empty commit for the current date
    git commit --allow-empty -m "Empty commit for $current_date" --date="$current_date 12:00:00"

    # Increment the date for the next commit
    current_date=$(date -d "$current_date + 1 day" +"%Y-%m-%d")
done