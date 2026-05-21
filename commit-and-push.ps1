# Commit and push all changes for Vercel auto-deploy.
# Run this from PowerShell in the project folder:
#   cd C:\src\crafterexplorer
#   .\commit-and-push.ps1

$ErrorActionPreference = "Stop"

Write-Host "→ Clearing any stale git lock..." -ForegroundColor Cyan
if (Test-Path .git\index.lock) { Remove-Item .git\index.lock -Force }

Write-Host "→ Staging all changes..." -ForegroundColor Cyan
git add -A

Write-Host "→ Current status:" -ForegroundColor Cyan
git status --short

$msg = @"
Add real Privacy & Legal copy, spec sheets, Meyer Digital Co. credit, video section + Dorchester map

- Replace placeholder Privacy & Legal pages with finalised copy
- Add Orion & R5 spec sheet downloads on Products page
- Embed Dorchester Google Map and 'Proudly built by Meyer Digital Co.' credit in footer
- Add company number 13734245 and VAT GB 462 4343 03 in footer + Legal page
- Side-by-side software-demo video section between hero and mission
- Move displayed locality from Weymouth to Dorchester (legal registered office unchanged)
- Add Orion, R5 spec PDFs, Meyer Digital Co logo, extra CET assets
"@

Write-Host "→ Committing..." -ForegroundColor Cyan
git commit -m $msg

Write-Host "→ Pushing to origin/main..." -ForegroundColor Cyan
git push origin main

Write-Host "✓ Done. Check Vercel dashboard — a new deploy should start within ~10 seconds." -ForegroundColor Green
