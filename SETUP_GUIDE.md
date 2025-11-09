# 🚀 Setup Guide - Beyond Earth

This guide will walk you through setting up the Beyond Earth project from scratch on your local machine.

## Table of Contents

1. [System Requirements](#system-requirements)
2. [Installation Steps](#installation-steps)
3. [Database Setup](#database-setup)
4. [NASA API Configuration](#nasa-api-configuration)
5. [Running the Application](#running-the-application)
6. [Troubleshooting](#troubleshooting)

---

## System Requirements

### Required Software

- **PHP**: 8.1 or higher
- **Composer**: Latest version
- **Node.js**: 18.x or higher
- **npm**: 9.x or higher
- **MySQL**: 8.0 or higher
- **Git**: Latest version

### Recommended Tools

- **VS Code** with extensions:
  - PHP Intelephense
  - Laravel Extension Pack
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense

### Verify Installation

```bash
# Check PHP version
php --version

# Check Composer
composer --version

# Check Node.js
node --version

# Check npm
npm --version

# Check MySQL
mysql --version
```

---

## Installation Steps

### 1. Clone or Navigate to Project

If you already have the project files:

```bash
cd c:\Users\ronel\OneDrive\Desktop\Final_project_110
```

If cloning from GitHub:

```bash
git clone <repository-url>
cd beyond-earth
```

### 2. Install PHP Dependencies

```bash
composer install
```

**Note**: If you encounter errors, you may need to install PHP extensions:

- php-mbstring
- php-xml
- php-curl
- php-mysql

### 3. Install Node Dependencies

```bash
npm install
```

This will install:

- React
- Inertia.js
- Framer Motion
- Three.js
- Tailwind CSS
- And all other frontend dependencies

### 4. Environment Configuration

Copy the example environment file:

```bash
copy .env.example .env
```

Generate application key:

```bash
php artisan key:generate
```

---

## Database Setup

### 1. Create Database

**Option A: Using MySQL CLI**

```bash
mysql -u root -p
```

Then in MySQL:

```sql
CREATE DATABASE beyond_earth CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
exit;
```

**Option B: Using phpMyAdmin**

1. Open phpMyAdmin
2. Click "New" to create database
3. Name it: `beyond_earth`
4. Collation: `utf8mb4_unicode_ci`
5. Click "Create"

### 2. Configure Database Connection

Edit your `.env` file:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=beyond_earth
DB_USERNAME=root
DB_PASSWORD=your_mysql_password
```

**Replace** `your_mysql_password` with your actual MySQL password.

### 3. Run Migrations

```bash
php artisan migrate
```

You should see:

```
Migration table created successfully.
Migrating: 2024_01_01_000001_create_favorites_table
Migrated:  2024_01_01_000001_create_favorites_table
Migrating: 2024_01_01_000002_create_feedback_table
Migrated:  2024_01_01_000002_create_feedback_table
```

### 4. Verify Database Tables

```bash
mysql -u root -p beyond_earth
```

```sql
SHOW TABLES;
```

You should see:

- favorites
- feedback
- migrations

---

## NASA API Configuration

### 1. Get Your NASA API Key

1. Visit [https://api.nasa.gov](https://api.nasa.gov)
2. Fill out the form:
   - First Name
   - Last Name
   - Email
3. Check your email for the API key

### 2. Configure API Key

Edit your `.env` file:

```env
NASA_API_KEY=your_actual_api_key_here
NASA_API_BASE_URL=https://api.nasa.gov
CACHE_DURATION=3600
```

**Replace** `your_actual_api_key_here` with your NASA API key.

**Note**: You can use `DEMO_KEY` for testing, but it has strict rate limits (30 requests per hour).

### 3. Test API Connection

You can test if the API is working by visiting (after starting the server):

```
http://localhost:8000/api/nasa/apod?count=1
```

---

## Running the Application

### Development Mode

You need to run TWO commands in separate terminal windows:

**Terminal 1: Laravel Backend**

```bash
php artisan serve
```

You should see:

```
Starting Laravel development server: http://127.0.0.1:8000
```

**Terminal 2: Vite Frontend**

```bash
npm run dev
```

You should see:

```
VITE v4.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

### 3. Access the Application

Open your browser and navigate to:

```
http://localhost:8000
```

**Important**: Use port 8000 (Laravel), not 5173 (Vite). Vite runs in the background for hot module replacement.

---

## Production Build

When ready to deploy or test production build:

### 1. Build Assets

```bash
npm run build
```

### 2. Optimize Laravel

```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### 3. Set Environment

In `.env`:

```env
APP_ENV=production
APP_DEBUG=false
```

---

## Troubleshooting

### Issue: "Class 'X' not found"

**Solution**: Clear and rebuild caches

```bash
composer dump-autoload
php artisan config:clear
php artisan cache:clear
php artisan view:clear
```

### Issue: Database connection refused

**Solutions**:

1. Check MySQL is running:

   ```bash
   # Windows
   net start MySQL80
   ```

2. Verify credentials in `.env`

3. Test connection:
   ```bash
   php artisan tinker
   DB::connection()->getPdo();
   ```

### Issue: Vite manifest not found

**Solution**: Build assets

```bash
npm run build
```

Or ensure `npm run dev` is running in development.

### Issue: Port 8000 already in use

**Solution**: Use different port

```bash
php artisan serve --port=8001
```

Then access at `http://localhost:8001`

### Issue: NASA API rate limit exceeded

**Solutions**:

1. Get your own API key (not DEMO_KEY)
2. Increase `CACHE_DURATION` in `.env`
3. Clear Laravel cache:
   ```bash
   php artisan cache:clear
   ```

### Issue: Animations not working

**Solutions**:

1. Clear browser cache
2. Check browser console for errors
3. Ensure `npm run dev` is running
4. Try different browser

### Issue: 3D Earth not rendering

**Solutions**:

1. Check WebGL support: [https://get.webgl.org/](https://get.webgl.org/)
2. Update graphics drivers
3. Try different browser
4. Check browser console for Three.js errors

---

## Testing the Application

### Test Checklist

- [ ] Homepage loads successfully
- [ ] Hero section animations work
- [ ] Story timeline scrolls and animates
- [ ] Gallery images load from NASA API
- [ ] Can add item to favorites
- [ ] Favorites section shows saved items
- [ ] Can remove favorites
- [ ] Mars photos section loads
- [ ] 3D Earth renders and rotates
- [ ] Feedback form submits successfully
- [ ] Thank you message appears after feedback
- [ ] All buttons and links work
- [ ] Responsive on mobile (test in DevTools)

### Manual API Tests

```bash
# Test APOD endpoint
curl http://localhost:8000/api/nasa/apod?count=1

# Test Mars photos
curl http://localhost:8000/api/nasa/mars-photos?sol=1000

# Test EPIC images
curl http://localhost:8000/api/nasa/epic
```

---

## Common Development Commands

```bash
# Laravel
php artisan serve                 # Start server
php artisan migrate              # Run migrations
php artisan migrate:fresh        # Fresh migration (warning: deletes data)
php artisan tinker              # Laravel REPL
php artisan route:list          # List all routes
php artisan config:clear        # Clear config cache

# Node/NPM
npm run dev                     # Development mode (hot reload)
npm run build                   # Production build
npm install                     # Install dependencies
npm update                      # Update dependencies

# Composer
composer install                # Install PHP dependencies
composer update                 # Update PHP dependencies
composer dump-autoload          # Rebuild autoload files
```

---

## Next Steps

Once everything is running:

1. **Explore the App**: Click through all sections
2. **Customize**: Update colors, text, or add features
3. **Get Real API Key**: Replace DEMO_KEY for production
4. **Deploy**: Consider platforms like:
   - Laravel Forge
   - Digital Ocean
   - AWS
   - Heroku

---

## Getting Help

If you're still stuck:

1. Check Laravel logs: `storage/logs/laravel.log`
2. Check browser console for JavaScript errors
3. Review GitHub issues in the repository
4. Check Laravel documentation: [laravel.com/docs](https://laravel.com/docs)
5. Check React documentation: [react.dev](https://react.dev)
6. Check NASA API docs: [api.nasa.gov](https://api.nasa.gov)

---

## Quick Start Script (Windows PowerShell)

Save this as `setup.ps1` and run:

```powershell
# Install dependencies
Write-Host "Installing PHP dependencies..." -ForegroundColor Green
composer install

Write-Host "Installing Node dependencies..." -ForegroundColor Green
npm install

# Setup environment
Write-Host "Setting up environment..." -ForegroundColor Green
Copy-Item .env.example .env
php artisan key:generate

# Note: You still need to manually:
# 1. Create database
# 2. Update .env with database credentials and NASA API key
# 3. Run: php artisan migrate

Write-Host "`nSetup complete! Next steps:" -ForegroundColor Yellow
Write-Host "1. Create 'beyond_earth' database in MySQL"
Write-Host "2. Update .env with your database password and NASA API key"
Write-Host "3. Run: php artisan migrate"
Write-Host "4. Run: php artisan serve (in one terminal)"
Write-Host "5. Run: npm run dev (in another terminal)"
Write-Host "6. Visit: http://localhost:8000"
```

---

**Happy Exploring!** 🚀🌌

If you encounter any issues not covered here, please open an issue on GitHub.
