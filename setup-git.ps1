# Git Setup Script for Testing Website
# Run this in PowerShell after installing Git

Write-Host "🚀 Setting up Git repository..." -ForegroundColor Green

# Initialize git
Write-Host "`n1. Initializing Git repository..." -ForegroundColor Yellow
git init

# Add all files
Write-Host "2. Adding files..." -ForegroundColor Yellow
git add .

# Create initial commit
Write-Host "3. Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit: Next.js testing website for VWO"

Write-Host "`n✅ Git repository initialized!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Create a repository on GitHub.com" -ForegroundColor White
Write-Host "2. Run these commands (replace YOUR_USERNAME and REPO_NAME):" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git" -ForegroundColor Gray
Write-Host "   git branch -M main" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
Write-Host "`n3. Then go to vercel.com and import your GitHub repository!" -ForegroundColor White

