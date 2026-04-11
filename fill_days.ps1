for ($i = 99; $i -ge 0; $i--) {
    for ($j = 1; $j -le 5; $j++) {
        $date = (Get-Date).AddDays(-$i).ToString("yyyy-MM-ddT1$($j):00:00")
        
        $env:GIT_AUTHOR_DATE = $date
        $env:GIT_COMMITTER_DATE = $date
        
        git commit --allow-empty -m "Daily progress - day $i commit $j"
    }
    Write-Host "Created 5 commits for $((Get-Date).AddDays(-$i).ToString('yyyy-MM-dd'))"
}

Remove-Item Env:GIT_AUTHOR_DATE
Remove-Item Env:GIT_COMMITTER_DATE

git push origin main --force
Write-Host "Done! 500 commits pushed (5 per day x 100 days)"