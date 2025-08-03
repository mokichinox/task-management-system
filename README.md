# 📋 Task Management System

A modern, full-featured task management system built with Laravel 11, Inertia.js, and React. Features a beautiful gradient UI, Google OAuth authentication, and complete CRUD operations for task management.

![Task Management System](https://img.shields.io/badge/Laravel-11-red?style=flat-square&logo=laravel)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-teal?style=flat-square&logo=tailwindcss)
![Inertia.js](https://img.shields.io/badge/Inertia.js-SPA-purple?style=flat-square)

## ✨ Features

### 🔐 **Authentication System**
- Custom authentication pages with gradient background (green to blue)
- Google OAuth integration via Laravel Socialite
- Forgot password functionality with email reset links
- Register and login with form validation

### 📊 **Task Management Dashboard**
- **Create Tasks**: Add new tasks with title, description, priority, and due date
- **Read Tasks**: View all tasks in a beautiful table format
- **Update Tasks**: Edit existing tasks with inline forms
- **Delete Tasks**: Remove tasks with confirmation
- **Statistics**: Real-time task count by status (pending, in progress, completed)

### 🎨 **Beautiful UI Design**
- Gradient backgrounds (`bg-gradient-to-r from-green-400 to-blue-50`)
- Responsive design with Tailwind CSS
- Color-coded task status and priority indicators
- Clean, modern interface with consistent styling

### 🔧 **Technical Features**
- Laravel 11 backend with Eloquent ORM
- Inertia.js for seamless SPA experience
- React frontend with hooks and modern patterns
- MySQL database with proper relationships
- Mass assignment protection
- Form validation and error handling

## 🚀 Installation

### Prerequisites
- PHP 8.2+
- Composer
- Node.js & NPM
- MySQL
- XAMPP (recommended for local development)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/task-management-system.git
   cd task-management-system
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Environment setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Database configuration**
   Update your `.env` file with database credentials:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=task_management
   DB_USERNAME=root
   DB_PASSWORD=
   ```

6. **Google OAuth setup** (Optional)
   Add to your `.env` file:
   ```env
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   GOOGLE_REDIRECT_URI="${APP_URL}/auth/google/callback"
   ```

7. **Run migrations**
   ```bash
   php artisan migrate
   ```

8. **Build assets**
   ```bash
   npm run build
   ```

9. **Start the development server**
   ```bash
   php artisan serve
   ```

## 📱 Usage

### Getting Started
1. Visit `http://localhost:8000`
2. You'll see the custom authentication page with gradient background
3. Register a new account or login with existing credentials
4. Access the dashboard to start managing your tasks

### Task Management
- **Create**: Click "Create New Task" to add tasks with priority and due dates
- **View**: See all tasks in the dashboard table with status indicators
- **Edit**: Click "Edit" on any task to modify its details
- **Delete**: Remove tasks with the delete button
- **Statistics**: Monitor your productivity with real-time task counts

## 🏗️ Project Structure

```
├── app/
│   ├── Http/Controllers/
│   │   ├── Auth/GoogleController.php    # Google OAuth
│   │   └── TaskController.php           # CRUD operations
│   └── Models/
│       ├── Task.php                     # Task model
│       └── User.php                     # User model
├── resources/
│   ├── js/
│   │   ├── Pages/
│   │   │   ├── Auth/AuthPage.jsx        # Custom auth page
│   │   │   ├── Dashboard.jsx            # Main dashboard
│   │   │   ├── ForgotPassword.jsx       # Password reset
│   │   │   └── ResetPassword.jsx        # New password form
│   │   └── Layouts/
│   │       └── AuthenticatedLayout.jsx  # Dashboard layout
│   └── views/
│       └── app.blade.php                # Main layout
├── database/
│   └── migrations/
│       └── create_tasks_table.php       # Task schema
└── routes/
    ├── web.php                          # Web routes
    └── auth.php                         # Auth routes
```

## 🎯 Key Features Explained

### Custom Authentication
The system uses a custom `AuthPage.jsx` component instead of default Laravel Breeze pages, featuring:
- Toggle between login and register forms
- Google OAuth "Sign in with Google" button
- Gradient background with centered card design
- Forgot password link integration

### Task CRUD Operations
Full task management with:
- **Model**: `Task.php` with user relationships and date casting
- **Controller**: `TaskController.php` with proper mass assignment handling
- **Frontend**: React components with form validation and error handling
- **Database**: Proper foreign key relationships and constraints

### Dashboard Interface
Modern dashboard featuring:
- Statistics cards showing task counts by status
- Responsive table with sortable columns
- Inline editing capabilities
- Color-coded priority and status indicators

## 🔧 Technical Details

### Backend Architecture
- **Framework**: Laravel 11 with latest features
- **Authentication**: Laravel Sanctum + Socialite for OAuth
- **Database**: Eloquent ORM with proper relationships
- **API**: RESTful controllers with proper HTTP methods

### Frontend Stack
- **SPA**: Inertia.js for seamless page transitions
- **UI Library**: React 18 with modern hooks
- **Styling**: Tailwind CSS with custom gradient themes
- **Build Tool**: Vite for fast development and optimized builds

### Security Features
- CSRF protection on all forms
- Mass assignment protection in models
- Input validation and sanitization
- Secure password reset functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## 🙏 Acknowledgments

- Laravel team for the excellent framework
- Tailwind CSS for the utility-first CSS framework
- Inertia.js for the modern SPA experience
- React team for the powerful UI library

---

**Happy Task Managing! 🎉**

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
