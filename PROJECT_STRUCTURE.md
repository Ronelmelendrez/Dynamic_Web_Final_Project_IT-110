# 🗂️ Project Structure - Beyond Earth

```
beyond-earth/
│
├── 📁 app/                          # Laravel Application Logic
│   ├── 📁 Http/
│   │   ├── 📁 Controllers/          # Request handlers
│   │   │   ├── NasaController.php   # NASA API endpoints
│   │   │   ├── FavoriteController.php # CRUD for favorites
│   │   │   └── FeedbackController.php # CRUD for feedback
│   │   └── 📁 Middleware/
│   │       └── HandleInertiaRequests.php # Inertia.js middleware
│   ├── 📁 Models/                   # Database models
│   │   ├── Favorite.php             # Favorite items model
│   │   └── Feedback.php             # User feedback model
│   └── 📁 Services/                 # Business logic
│       └── NasaApiService.php       # NASA API integration
│
├── 📁 config/                       # Configuration files
│   └── services.php                 # NASA API config
│
├── 📁 database/                     # Database files
│   └── 📁 migrations/               # Database migrations
│       ├── 2024_01_01_000001_create_favorites_table.php
│       └── 2024_01_01_000002_create_feedback_table.php
│
├── 📁 resources/                    # Frontend resources
│   ├── 📁 css/
│   │   └── app.css                  # Tailwind CSS + custom styles
│   ├── 📁 js/
│   │   ├── 📁 Components/           # React components
│   │   │   ├── Layout.jsx           # Main layout wrapper
│   │   │   ├── Navbar.jsx           # Navigation bar
│   │   │   ├── Footer.jsx           # Footer
│   │   │   ├── StarField.jsx        # Animated star background
│   │   │   ├── Hero.jsx             # Hero section
│   │   │   ├── StoryTimeline.jsx    # Story timeline
│   │   │   ├── GallerySection.jsx   # Image gallery
│   │   │   ├── MarsJourney.jsx      # Mars rover section
│   │   │   ├── InteractiveEarth.jsx # 3D Earth visualization
│   │   │   ├── FavoritesSection.jsx # User favorites (CRUD)
│   │   │   ├── FeedbackSection.jsx  # Feedback form (CRUD)
│   │   │   └── CallToAction.jsx     # Final CTA
│   │   ├── 📁 Pages/
│   │   │   └── Home.jsx             # Main page component
│   │   ├── app.jsx                  # React app entry point
│   │   └── bootstrap.js             # Axios configuration
│   └── 📁 views/
│       └── app.blade.php            # Main Blade template
│
├── 📁 routes/                       # Application routes
│   └── web.php                      # Web routes
│
├── 📁 public/                       # Public assets (auto-generated)
│   ├── build/                       # Built assets (created by Vite)
│   └── index.php                    # Laravel entry point
│
├── 📄 .env.example                  # Environment variables template
├── 📄 .gitignore                    # Git ignore rules
├── 📄 composer.json                 # PHP dependencies
├── 📄 package.json                  # Node dependencies
├── 📄 vite.config.js                # Vite bundler config
├── 📄 tailwind.config.js            # Tailwind CSS config
├── 📄 postcss.config.js             # PostCSS config
│
├── 📄 README.md                     # Main documentation
├── 📄 SETUP_GUIDE.md                # Detailed setup instructions
├── 📄 QUICKSTART.md                 # Quick start guide
├── 📄 CREATIVE_BRIEF.md             # Marketing strategy & concept
└── 📄 GITHUB_GUIDE.md               # GitHub deployment guide
```

## 📊 File Count Summary

- **Total Files**: 40+
- **React Components**: 12
- **Laravel Controllers**: 3
- **Database Migrations**: 2
- **Models**: 2
- **Documentation Files**: 5

## 🎨 Frontend Components Breakdown

### Layout Components (3)

- `Layout.jsx` - Main wrapper with StarField
- `Navbar.jsx` - Fixed navigation
- `Footer.jsx` - Footer with links

### Content Components (8)

- `StarField.jsx` - Canvas-based star animation
- `Hero.jsx` - Landing hero section
- `StoryTimeline.jsx` - Animated timeline
- `GallerySection.jsx` - APOD image gallery
- `MarsJourney.jsx` - Mars rover photos
- `InteractiveEarth.jsx` - 3D Earth with Three.js
- `FavoritesSection.jsx` - User favorites display
- `FeedbackSection.jsx` - Feedback form

### Utility Components (1)

- `CallToAction.jsx` - Final engagement section

## 🔧 Backend Structure

### Controllers (3)

- `NasaController` - Handles NASA API requests
- `FavoriteController` - CRUD for favorites
- `FeedbackController` - CRUD for feedback

### Services (1)

- `NasaApiService` - NASA API integration logic

### Models (2)

- `Favorite` - User favorite items
- `Feedback` - User feedback entries

## 🗄️ Database Tables

### `favorites`

```sql
- id, session_id, item_type, item_id
- title, image_url, description, metadata
- timestamps
```

### `feedback`

```sql
- id, session_id, name, email
- message, rating
- timestamps
```

## 📦 Key Dependencies

### PHP (Composer)

- `laravel/framework` - Laravel 10
- `inertiajs/inertia-laravel` - Inertia.js adapter
- `guzzlehttp/guzzle` - HTTP client

### JavaScript (NPM)

- `react` & `react-dom` - UI library
- `@inertiajs/react` - Inertia React adapter
- `framer-motion` - Animation library
- `three` & `@react-three/fiber` - 3D graphics
- `@react-three/drei` - Three.js helpers
- `tailwindcss` - CSS framework
- `axios` - HTTP client
- `vite` - Build tool

## 🚀 Entry Points

### Development

- **Backend**: `php artisan serve` → `public/index.php`
- **Frontend**: `npm run dev` → `resources/js/app.jsx`

### Production

- **Build**: `npm run build` → `public/build/`
- **Server**: Apache/Nginx → `public/index.php`

## 🔄 Data Flow

```
User Request
    ↓
routes/web.php (routing)
    ↓
Controllers (handle request)
    ↓
Services (fetch NASA data)
    ↓
Cache/Database (store/retrieve)
    ↓
Inertia Response
    ↓
React Components (render)
    ↓
User Interface
```

## 📝 Configuration Files

- `.env` - Environment variables
- `config/services.php` - NASA API config
- `vite.config.js` - Vite bundler
- `tailwind.config.js` - Tailwind CSS
- `postcss.config.js` - PostCSS processing
- `composer.json` - PHP packages
- `package.json` - Node packages

## 🎯 Main Features Mapping

| Feature        | Frontend Component     | Backend Controller   | Database Table |
| -------------- | ---------------------- | -------------------- | -------------- |
| Hero Section   | `Hero.jsx`             | -                    | -              |
| Story Timeline | `StoryTimeline.jsx`    | `NasaController`     | -              |
| Image Gallery  | `GallerySection.jsx`   | `NasaController`     | -              |
| Mars Photos    | `MarsJourney.jsx`      | `NasaController`     | -              |
| 3D Earth       | `InteractiveEarth.jsx` | `NasaController`     | -              |
| Favorites      | `FavoritesSection.jsx` | `FavoriteController` | `favorites`    |
| Feedback       | `FeedbackSection.jsx`  | `FeedbackController` | `feedback`     |

## 🔐 Protected Files (.gitignore)

- `.env` - Environment secrets
- `node_modules/` - Node packages
- `vendor/` - PHP packages
- `public/build/` - Built assets
- `storage/` - Laravel storage

## 📚 Documentation Files

1. **README.md** - Project overview, features, installation
2. **SETUP_GUIDE.md** - Detailed setup instructions
3. **QUICKSTART.md** - 5-minute quick start
4. **CREATIVE_BRIEF.md** - Marketing strategy & narrative
5. **GITHUB_GUIDE.md** - GitHub deployment guide

---

## 🎨 Component Hierarchy

```
App
└── Layout
    ├── StarField (background)
    ├── Navbar (fixed)
    └── Main
        ├── Hero
        ├── StoryTimeline
        ├── GallerySection
        ├── MarsJourney
        ├── InteractiveEarth
        ├── FavoritesSection
        ├── FeedbackSection
        └── CallToAction
    └── Footer
```

---

**This structure follows Laravel and React best practices for maintainable, scalable applications.**
