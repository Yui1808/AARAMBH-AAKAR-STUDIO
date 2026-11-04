# ============================================================
#  AARAMBH AAKAR STUDIO — Full GitHub + GitHub Pages Deploy
#  Run this ONCE after creating the empty GitHub repo
# ============================================================

Write-Host "`n🏗  Aarambh Aakar Studio — Deploy Script" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

Set-Location "c:\Users\anshu\OneDrive\Desktop\Temp\aarambh-aakar-studio"

# 1. Stage all files
Write-Host "`n[1/5] Staging all files..." -ForegroundColor Yellow
git add .

# 2. Commit
Write-Host "[2/5] Committing..." -ForegroundColor Yellow
git commit -m "feat: initial release - Aarambh Aakar Studio 3D website"

# 3. Rename branch to main (GitHub default)
Write-Host "[3/5] Setting branch to main..." -ForegroundColor Yellow
git branch -M main

# 4. Add remote origin
Write-Host "[4/5] Connecting to GitHub remote..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin https://github.com/Yui1808/aarambh-aakar-studio.git

# 5. Push source code
Write-Host "[5/5] Pushing source code to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host "`n✅ Source code is now on GitHub!" -ForegroundColor Green
Write-Host "   https://github.com/Yui1808/aarambh-aakar-studio" -ForegroundColor Gray

Write-Host "`n🚀 Building & deploying to GitHub Pages..." -ForegroundColor Cyan
npm run deploy

Write-Host "`n🎉 DONE! Your site will be live in ~60 seconds at:" -ForegroundColor Green
Write-Host "   https://Yui1808.github.io/aarambh-aakar-studio" -ForegroundColor Magenta
Write-Host "`n   (GitHub takes ~1 min to activate Pages on first deploy)" -ForegroundColor Gray

