---
title: Northwind Store
emoji: 🛒
colorFrom: green
colorTo: blue
sdk: docker
app_port: 7860
---

# 🛒 Northwind Store - Premium E-Commerce Monolith

[![Live Demo](https://img.shields.io/badge/demo-live-green?style=for-the-badge&logo=huggingface)](https://huggingface.co/spaces/alwaysprince05e/northwind-store)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/alwaysprince05/northwind-store)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Northwind Store** is an industry-grade, full-stack e-commerce platform designed for performance, scalability, and a premium user experience. Built using the **PERN stack** (PostgreSQL, Express, React, Node.js), it integrates modern tools like Clerk for authentication, TanStack Query for state management, and Drizzle ORM for database excellence.

---

## 🚀 Live Deployment

The application is fully deployed and can be accessed here:
👉 **[View Live Demo](https://huggingface.co/spaces/alwaysprince05e/northwind-store)**

---

## 🛠 Tech Stack

### Frontend
- **React 18** (Vite)
- **TanStack Query** (Data Fetching)
- **Tailwind CSS & DaisyUI** (Premium Styling)
- **Clerk** (Authentication)
- **Lucide React** (Icons)

### Backend
- **Node.js & Express**
- **Drizzle ORM** (Type-safe SQL)
- **PostgreSQL** (Neon Serverless)
- **Zod** (Schema Validation)
- **Sentry** (Error Tracking)

### Infrastructure & DevOps
- **Docker** (Containerization)
- **Hugging Face Spaces** (Cloud Hosting)
- **Git LFS** (Binary Asset Management)

---

## ✨ Key Features

- 🔐 **Secure Auth**: Seamless login/signup with Clerk.
- 📦 **Dynamic Catalog**: Real-time product listing and category filtering.
- 🛒 **Advanced Cart**: Persistent shopping cart with real-time updates.
- 💳 **Checkout Flow**: Fully integrated checkout process.
- 📱 **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop.
- ⚡ **Optimized Performance**: Server-side validation and efficient client-side caching.

---

## ⚙️ Local Development

### Prerequisites
- Node.js (v18+)
- PostgreSQL Database (Neon.tech recommended)
- Clerk API Keys

### Installation

1. **Clone the repo:**
   ```bash
   git clone https://github.com/alwaysprince05/northwind-store.git
   cd northwind-store
   ```

2. **Setup Environment Variables:**
   Create `.env` files in both `backend/` and `frontend/` folders following the `.env.example` structure.

3. **Install Dependencies:**
   ```bash
   # Backend
   cd backend && npm install
   # Frontend
   cd ../frontend && npm install
   ```

4. **Initialize Database:**
   ```bash
   cd backend
   npm run db:push
   npm run db:seed
   ```

5. **Start Development Servers:**
   ```bash
   # In backend/
   npm run dev
   # In frontend/
   npm run dev
   ```

---

## 🚢 Deployment (Hugging Face)

This project is optimized for deployment as a **Docker Monolith** on Hugging Face Spaces.

1. Create a new **Docker Space**.
2. Connect your GitHub repository.
3. Add your secrets (`DATABASE_URL`, `CLERK_SECRET_KEY`, etc.) in Space Settings.
4. Set `PORT` variable to `7860`.

---

## 👤 Author

**Prince Kumar Maurya**
- GitHub: [@alwaysprince05](https://github.com/alwaysprince05)

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
