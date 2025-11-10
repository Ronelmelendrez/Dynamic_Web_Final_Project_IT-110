# Beyond Earth 🚀

A dynamic, cinematic marketing storytelling web application that transforms NASA's data into an immersive journey through space. Built with Laravel, React, Inertia.js, and powered by real-time NASA API data.

![Beyond Earth](https://img.shields.io/badge/Status-Live-success)
![Laravel](https://img.shields.io/badge/Laravel-10.x-red)
![React](https://img.shields.io/badge/React-18.x-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌌 Project Overview

**Beyond Earth** is not just another dashboard—it's a marketing experience. This single-page application tells a compelling story about humanity's exploration of space through:

- **Cinematic Design**: Scroll-driven animations, parallax effects, and smooth transitions
- **Real NASA Data**: Live integration with NASA's public APIs
- **Interactive 3D Elements**: Three.js-powered Earth visualization
- **User Engagement**: CRUD features for favorites and feedback
- **Performance Optimized**: MySQL caching for faster load times

### 🎯 Marketing Narrative

**"Beyond Earth - Journey Through Space"**

Our campaign takes visitors on an emotional journey:

1. **Hero Section**: Bold statement about humanity's cosmic destiny
2. **Story Timeline**: Historical narrative of space exploration
3. **Visual Gallery**: Curated NASA imagery with interactive elements
4. **Mars Journey**: Exploring the Red Planet through rover eyes
5. **Earth Perspective**: 3D interactive Earth with the "Overview Effect"
6. **User Engagement**: Personal connection through favorites and feedback

## Next Steps

1. **Start XAMPP MySQL**: Open XAMPP Control Panel and start the MySQL service

2. **Create the Database**:

   - Open phpMyAdmin (http://localhost/phpmyadmin)
   - Create a new database called `beyond_earth`
   - OR run: `mysql -u root -e "CREATE DATABASE beyond_earth;"`

3. **Update NASA API Key** (Optional for testing):

   - Get your free API key from https://api.nasa.gov/
   - Update `.env` file: `NASA_API_KEY=your_actual_key_here`
   - (DEMO_KEY works but has rate limits)

4. **Run Database Migrations**:

   ```bash
   php artisan migrate
   ```

5. **Start the Development Servers**:

   **Terminal 1 - Laravel Backend**:

   ```bash
   php artisan serve
   ```

   **Terminal 2 - Vite Frontend**:

   ```bash
   npm run dev
   ```

6. **Access the Application**:
   - Open your browser to: http://localhost:8000
   - The application will automatically reload when you make changes

---

## Quick Reference

### Core Functionality

- ✅ **NASA API Integration** - APOD, Mars Rover Photos, EPIC Earth images
- ✅ **Scroll-Based Storytelling** - Framer Motion animations
- ✅ **3D Visualization** - Interactive Earth sphere with Three.js
- ✅ **User Favorites** - Save and manage favorite images (CRUD)
- ✅ **Feedback System** - Community engagement with ratings (CRUD)
- ✅ **MySQL Caching** - Optimized API response times
- ✅ **Responsive Design** - Mobile-first Tailwind CSS
- ✅ **Cinematic UI** - Glass morphism, gradients, and smooth transitions

### Technical Stack

**Backend:**

- Laravel 10.x
- MySQL Database
- Guzzle HTTP Client
- API Caching Strategy

**Frontend:**

- React 18.x
- Inertia.js (SPA behavior)
- Framer Motion (animations)
- Three.js + React Three Fiber (3D)
- Tailwind CSS (styling)
- Axios (HTTP requests)

## 🚀 Getting Started

### Prerequisites

- PHP >= 8.1
- Composer
- Node.js >= 18.x
- MySQL >= 8.0
- NASA API Key (free from [api.nasa.gov](https://api.nasa.gov))

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/beyond-earth.git
cd beyond-earth
```

2. **Install PHP dependencies**

```bash
composer install
```

3. **Install Node dependencies**

```bash
npm install
```

4. **Environment setup**

```bash
cp .env.example .env
php artisan key:generate
```

5. **Configure your `.env` file**

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=beyond_earth
DB_USERNAME=root
DB_PASSWORD=your_password

NASA_API_KEY=your_nasa_api_key_here
NASA_API_BASE_URL=https://api.nasa.gov
```

6. **Create database**

```bash
mysql -u root -p
CREATE DATABASE beyond_earth;
exit;
```

7. **Run migrations**

```bash
php artisan migrate
```

8. **Build assets**

```bash
npm run build
```

9. **Start development servers**

Terminal 1 (Laravel):

```bash
php artisan serve
```

Terminal 2 (Vite):

```bash
npm run dev
```

10. **Visit the application**

```
http://localhost:8000
```

## 📡 NASA API Integration

This project uses three NASA APIs:

### 1. Astronomy Picture of the Day (APOD)

- **Endpoint**: `/api/nasa/apod`
- **Purpose**: Stunning daily space imagery
- **Usage**: Story timeline and gallery sections

### 2. Mars Rover Photos

- **Endpoint**: `/api/nasa/mars-photos`
- **Purpose**: Images from Curiosity rover
- **Usage**: Mars journey section

### 3. EPIC (Earth Polychromatic Imaging Camera)

- **Endpoint**: `/api/nasa/epic`
- **Purpose**: Full-disc Earth images
- **Usage**: Interactive Earth section

All API responses are cached in MySQL for 1 hour to optimize performance.

## 🎨 Design Philosophy

### Marketing Approach

This app is designed as a **marketing campaign**, not a data dashboard:

- **Emotional Connection**: Story-driven content that inspires wonder
- **Visual Impact**: High-quality imagery with cinematic presentation
- **Progressive Disclosure**: Information revealed through scroll interactions
- **Call to Action**: Clear pathways for user engagement
- **Brand Consistency**: Cohesive color scheme and typography

### Color Palette

```css
Space Dark: #0a0e27
Cosmic Purple: #a855f7
Cosmic Blue: #3b82f6
Cosmic Pink: #ec4899
Cosmic Cyan: #06b6d4
```

### Typography

- **Display Font**: Space Grotesk (headings)
- **Body Font**: Inter (content)

## 💾 Database Schema

### Favorites Table

```sql
- id (primary key)
- session_id (indexed)
- item_type (string)
- item_id (string)
- title (string)
- image_url (text)
- description (text)
- metadata (json)
- timestamps
```

### Feedback Table

```sql
- id (primary key)
- session_id (indexed)
- name (string)
- email (string)
- message (text)
- rating (integer, 1-5)
- timestamps
```

## 🎬 Animation Highlights

- **Hero Section**: Floating elements, fade-in title
- **Timeline**: Staggered reveal, side-to-side animations
- **Gallery**: Hover effects, modal transitions
- **3D Earth**: Auto-rotate, orbit controls
- **Scroll Effects**: Parallax backgrounds, opacity changes

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔒 Security Features

- CSRF Protection
- Session-based user tracking
- Input validation
- SQL injection prevention (Eloquent ORM)
- XSS protection

## 🚧 Future Enhancements

- [ ] User authentication system
- [ ] Social sharing capabilities
- [ ] Advanced filtering and search
- [ ] More NASA API integrations (NEO, Exoplanets)
- [ ] Ambient space music
- [ ] AR/VR experiences
- [ ] Multi-language support

## 📖 API Documentation

### Internal Endpoints

#### Get APOD Images

```http
GET /api/nasa/apod?count=5
```

#### Get Mars Photos

```http
GET /api/nasa/mars-photos?sol=1000
```

#### Get EPIC Images

```http
GET /api/nasa/epic
```

#### Save Favorite

```http
POST /favorites
Content-Type: application/json

{
  "item_type": "apod",
  "item_id": "2024-01-01",
  "title": "Image Title",
  "image_url": "https://...",
  "description": "Description",
  "metadata": "{}"
}
```

#### Get Favorites

```http
GET /favorites
```

#### Delete Favorite

```http
DELETE /favorites/{id}
```

#### Submit Feedback

```http
POST /feedback
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Great experience!",
  "rating": 5
}
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **NASA** - For providing free, open APIs and incredible imagery
- **Laravel Team** - For the amazing PHP framework
- **React Team** - For the powerful UI library
- **Inertia.js** - For seamless SPA integration
- **Framer Motion** - For beautiful animations
- **Three.js** - For 3D capabilities

## 👨‍💻 Author

Built with ❤️ by [Your Name]

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourname)
- Portfolio: [yourwebsite.com](https://yourwebsite.com)

## 🌟 Show Your Support

Give a ⭐️ if this project inspired you!

---

**Beyond Earth** - _Exploring the cosmos, one API call at a time_ 🚀🌌
