Write-Host "Resetting Payload database..." -ForegroundColor Yellow

$databasePath = ".\database.sqlite"
if (Test-Path $databasePath) {
    Write-Host "Removing existing database..." -ForegroundColor Red
    Remove-Item $databasePath -Force
    Write-Host "Database removed successfully!" -ForegroundColor Green
} else {
    Write-Host "No existing database found." -ForegroundColor Blue
}

Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Run 'npm run dev' to start your application"
Write-Host "2. Navigate to http://localhost:3001/admin"
Write-Host "3. Create your admin account when prompted"