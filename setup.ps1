# PRYNEX Web App - Quick Start Script
# Run this in PowerShell from the project directory

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   PRYNEX Web App - Quick Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js $nodeVersion installed" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js not found. Please install Node.js 18+ from nodejs.org" -ForegroundColor Red
    exit 1
}

# Check if npm is installed
Write-Host "Checking npm installation..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "✓ npm $npmVersion installed" -ForegroundColor Green
} catch {
    Write-Host "✗ npm not found. Please install Node.js from nodejs.org" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Step 1: Installing Dependencies" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "This may take a few minutes..." -ForegroundColor Yellow
Write-Host ""

npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Dependencies installed successfully!" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Step 2: Setting Up Assets" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if assets directory exists
if (Test-Path "public\assets") {
    Write-Host "✓ Assets directory exists" -ForegroundColor Green
    
    # Check if logo exists
    if (Test-Path "public\assets\logo.png") {
        Write-Host "✓ Logo file found!" -ForegroundColor Green
    } else {
        Write-Host "⚠ Logo file not found at public\assets\logo.png" -ForegroundColor Yellow
        Write-Host "  Please copy your logo file to:" -ForegroundColor Yellow
        Write-Host "  $PWD\public\assets\logo.png" -ForegroundColor White
        Write-Host ""
    }
} else {
    Write-Host "⚠ Assets directory not found" -ForegroundColor Yellow
    New-Item -Path "public\assets" -ItemType Directory -Force | Out-Null
    Write-Host "✓ Created assets directory" -ForegroundColor Green
    Write-Host "  Please add your logo to: public\assets\logo.png" -ForegroundColor Yellow
    Write-Host ""
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Add your logo to: public\assets\logo.png" -ForegroundColor White
Write-Host "2. Run the development server:" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Cyan
Write-Host "3. Open http://localhost:3000 in your browser" -ForegroundColor White
Write-Host ""
Write-Host "For more information, see README.md and SETUP.md" -ForegroundColor Gray
Write-Host ""

# Ask if user wants to start dev server
$response = Read-Host "Would you like to start the development server now? (y/n)"
if ($response -eq 'y' -or $response -eq 'Y') {
    Write-Host ""
    Write-Host "Starting development server..." -ForegroundColor Green
    Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
    Write-Host ""
    npm run dev
} else {
    Write-Host ""
    Write-Host "To start the server later, run: npm run dev" -ForegroundColor Cyan
    Write-Host ""
}
