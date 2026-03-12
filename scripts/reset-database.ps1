# Reset Payload Database Script
Write-Host "🔄 Resetting Payload database..." -ForegroundColor Yellow

# Check if database exists
$databasePath = ".\database.sqlite"
if (Test-Path $databasePath) {
    Write-Host "🗑️  Removing existing database..." -ForegroundColor Red
    Remove-Item $databasePath -Force
    Write-Host "✅ Database removed successfully!" -ForegroundColor Green
} else {
    Write-Host "ℹ️  No existing database found." -ForegroundColor Blue
}

Write-Host ""
Write-Host "📝 Next steps:" -ForegroundColor Cyan
Write-Host "1. Run 'npm run dev' to start your application" -ForegroundColor White
Write-Host "2. Navigate to http://localhost:3001/admin" -ForegroundColor White  
Write-Host "3. Create your admin account when prompted" -ForegroundColor White
Write-Host ""
Write-Host "💡 Alternatively, you can use the API reset method:" -ForegroundColor Cyan
Write-Host "   Start the dev server and POST to /api/reset-admin" -ForegroundColor White
Write-Host "   with body: { 'resetKey': 'reset-admin-2024' }" -ForegroundColor White