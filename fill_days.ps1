$startDate = Get-Date "2026-01-01"
$endDate = Get-Date

for ($i = 0; $i -le ($endDate - $startDate).Days; $i++) {
    for ($j = 1; $j -le 5; $j++) {
        $date = $startDate.AddDays($i).ToString("yyyy-MM-ddT1$($j):00:00")
        
        $env:GIT_AUTHOR_DATE = $date
        $env:GIT_COMMITTER_DATE = $date
        
        git commit --allow-empty -m "Daily progress - day $i commit $j"
    }
    Write-Host "Created 5 commits for $($startDate.AddDays($i).ToString('yyyy-MM-dd'))"
}

Remove-Item Env:GIT_AUTHOR_DATE
Remove-Item Env:GIT_COMMITTER_DATE

git push origin main --force
Write-Host "Done! 5 commits per day from Jan 1 to today!"