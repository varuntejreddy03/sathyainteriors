@echo off
setlocal enabledelayedexpansion

set CLIENT_SLUG=%1
if "%CLIENT_SLUG%"=="" (
  echo Usage: new-client client-name
  exit /b 1
)

set GITHUB_USERNAME=varuntejreddy03
set REPO_NAME=client-%CLIENT_SLUG%

set SRC_DIR=%CD%
set DEST_DIR=%CD%\temp_%REPO_NAME%

echo.
echo === Creating GitHub repo: %GITHUB_USERNAME%/%REPO_NAME% ===

where gh >nul 2>nul || (echo [ERROR] gh not found. Install GitHub CLI and run: gh auth login & exit /b 1)
where git >nul 2>nul || (echo [ERROR] git not found. Install Git for Windows. & exit /b 1)
where vercel >nul 2>nul || (echo [ERROR] vercel not found. Run: npm i -g vercel & exit /b 1)

REM 1) Create repo (ignore error if already exists)
gh repo create %GITHUB_USERNAME%/%REPO_NAME% --private >nul 2>nul

REM 2) Fresh temp folder
if exist "%DEST_DIR%" rmdir /s /q "%DEST_DIR%"
mkdir "%DEST_DIR%"

echo Copying project files...
robocopy "%SRC_DIR%" "%DEST_DIR%" /E /XD ".git" "node_modules" ".next" ".vercel" "temp_*" >nul

REM robocopy success codes are 0-7
if %ERRORLEVEL% GEQ 8 (
  echo [ERROR] robocopy failed with code %ERRORLEVEL%
  exit /b 1
)

REM 3) Init git + push
cd /d "%DEST_DIR%"

git init >nul
git branch -M main
git remote add origin https://github.com/%GITHUB_USERNAME%/%REPO_NAME%.git

git add -A
git commit -m "Initial commit for %CLIENT_SLUG%" >nul
git push -u origin main

echo ✅ Pushed code: https://github.com/%GITHUB_USERNAME%/%REPO_NAME%

REM 4) Deploy to Vercel (auto-detect framework from package.json)
echo 🚀 Deploying to Vercel...
vercel --prod --yes

echo 🎉 Done!
endlocal