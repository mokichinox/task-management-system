# ✅ Task Management System

A modern task management web app built with **Laravel**, **React**, **Inertia.js**, and **Tailwind CSS**. Users can log in with Google, create tasks, mark them complete, and manage their to-do lists efficiently.

---

## 🚀 Features

- 🔐 Google OAuth Login
- ✅ Register / Login with email
- 🧾 Create, view, update, and delete tasks
- 🌙 Clean, responsive UI (Tailwind CSS)
- ⚡ Fast SPA experience using React + Inertia.js

---

## 📸 Screenshots

Login Page:
<img width="1632" height="925" alt="image" src="https://github.com/user-attachments/assets/b4bed0d2-ad70-487f-8042-ca66e20e0fbb" />

Register Page:
<img width="1678" height="909" alt="image" src="https://github.com/user-attachments/assets/cd68b658-f9c5-41ca-bb99-88760f16c222" />

Dashboard:
<img width="1860" height="916" alt="image" src="https://github.com/user-attachments/assets/3b4d685b-a329-4114-ae49-e2a35cdd9fd6" />

Create New Task:
<img width="1738" height="963" alt="image" src="https://github.com/user-attachments/assets/406c0d7c-9b48-409c-bc41-cdbb7a04dba3" />

Edit:
<img width="1860" height="916" alt="image" src="https://github.com/user-attachments/assets/3b4d685b-a329-4114-ae49-e2a35cdd9fd6" />

Delete:
<img width="1860" height="916" alt="image" src="https://github.com/user-attachments/assets/3b4d685b-a329-4114-ae49-e2a35cdd9fd6" />



---

## 🔧 Tech Stack

- **Laravel** 11 (API backend)
- **React** 18 + **Inertia.js** (SPA frontend)
- **Tailwind CSS** (styling)
- **MySQL** (database)
- **Google OAuth** (Google login)

---
## 💻 New User Guide:

### 📋 Prerequisites Checklist
- XAMPP installation links
- Node.js download
- Composer setup
- Git installation
  
### 🚀 Step-by-Step Instructions
- XAMPP Services - Start Apache & MySQL
- Repository Cloning - Get your code from GitHub
- Dependencies - Install Composer & NPM packages
- Environment Setup - Configure .env file
- Database Creation - phpMyAdmin setup
- Google OAuth - Optional authentication setup
- Migration & Build - Database tables & assets
- Launch - Start your application


---

## 🔨 Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/task-management-system.git
cd task-management-system

# 2. Install backend dependencies
composer install

# 3. Install frontend dependencies
npm install && npm run dev

# 4. Copy .env file and set keys
cp .env.example .env
php artisan key:generate

# 5. Set up database (MySQL)
php artisan migrate

# 6. Start local servers
php artisan serve
