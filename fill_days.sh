#!/bin/bash

# Run this inside a GitHub-tracked repo
# Fills the last 21 days with commits

REPO_DIR="."  # Change to your repo path
cd "$REPO_DIR"

for i in $(seq 20 -1 0); do
  DATE=$(date -d "$i days ago" "+%Y-%m-%dT12:00:00")
  
  GIT_AUTHOR_DATE="$DATE" \
  GIT_COMMITTER_DATE="$DATE" \
  git commit --allow-empty -m "Daily progress - $(date -d "$i days ago" '+%Y-%m-%d')"
  
done

git push origin main
