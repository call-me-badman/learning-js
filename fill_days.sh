# Run this inside a GitHub-tracked repo folder
# Open PowerShell, navigate to your repo, then run: .\fill_days.ps1

for ($i = 20; $i -ge 0; $i--) {
    $date = (Get-Date).AddDays(-$i).ToString("yyyy-MM-ddT12:00:00")
    
    $env:GIT_AUTHOR_DATE = $date
    $env:GIT_COMMITTER_DATE = $date
    
    git commit --allow-empty -m "Daily progress - $date"
    
    Write-Host "Created commit for $date"
}

# Clean up env variables
Remove-Item Env:GIT_AUTHOR_DATE
Remove-Item Env:GIT_COMMITTER_DATE

git push origin main

Write-Host "Done! Check your GitHub profile in a few minutes."
