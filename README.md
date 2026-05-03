---
title: Northwind Store
emoji: 🛒
colorFrom: green
colorTo: blue
sdk: docker
app_port: 7860
---

# 🛒 Northwind Store - E-Commerce Platform 🚀

A modern, full-stack E-Commerce application built to provide a seamless shopping experience. 

![Demo App](/frontend/public/screenshot-for-readme.png)

---

## ✨ Features

- **Full Stack Architecture**: Built from scratch using the robust PERN stack (PostgreSQL, Express.js, React, Node.js).
- **Modern Frontend**: Developed with React, TanStack Query, Tailwind CSS, and DaisyUI for a beautiful, responsive user interface.
- **Secure Authentication**: Integrated with Clerk for robust, hassle-free user authentication and management.
- **Robust Database**: Utilizing PostgreSQL hosted on Neon, with safe and scalable data models.
- **Payments Integration**: Fully functional checkout and payment processing via Polar.
- **Comprehensive Management**: Full management features for Products, Carts, and Orders.
- **Admin Dashboard**: Dedicated admin interface to monitor and manage store products.
- **Real-time Communication**: 
  - Customer support chat powered by Stream.
  - Video calling support.
  - Real-time typing indicators and message reactions.
  - Threaded conversations and file/GIF upload support.
- **Optimized Media**: Image uploads and optimization handled by ImageKit.
- **Monitoring & Analytics**: Application monitoring, error tracking, and performance analysis via Sentry.
- **Webhooks**: Real-time event handling using webhooks for Clerk and Polar integrations.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- PostgreSQL Database (Neon recommended)
- API Keys for Clerk, Stream, ImageKit, Polar, and Sentry.

### 🧪 Environment Variables

To run this project locally, you will need to add the following environment variables to your `.env` files in both the frontend and backend directories.

#### Backend (`/backend/.env`)

```bash
PORT=5000
NODE_ENV=development

DATABASE_URL=<your_postgresql_connection_string>

CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>
CLERK_WEBHOOK_SECRET=<your_clerk_webhook_secret>

SENTRY_DSN=<your_sentry_dsn>

STREAM_API_KEY=<your_stream_api_key>
STREAM_API_SECRET=<your_stream_api_secret>

IMAGEKIT_PUBLIC_KEY=<your_imagekit_public_key>
IMAGEKIT_PRIVATE_KEY=<your_imagekit_private_key>
IMAGEKIT_URL_ENDPOINT=<your_imagekit_url_endpoint>

FRONTEND_URL=http://localhost:5173

POLAR_ACCESS_TOKEN=<your_polar_access_token>
POLAR_WEBHOOK_SECRET=<your_polar_webhook_secret>
POLAR_API_BASE=<your_polar_api_base_url>

POLAR_CHECKOUT_PRODUCT_ID=<your_product_id>
```

#### Frontend (`/frontend/.env`)

```bash
VITE_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
VITE_SENTRY_DSN=<your_sentry_dsn>
VITE_API_URL=http://localhost:5000
```

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/alwaysprince05/northwind-store.git
   cd northwind-store
   ```

2. Install backend dependencies
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies
   ```bash
   cd ../frontend
   npm install
   ```

4. Start the development servers
   - Backend: `npm run dev` in the `/backend` directory.
   - Frontend: `npm run dev` in the `/frontend` directory.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/alwaysprince05/northwind-store/issues).

## 📄 License

This project is licensed under the MIT License.
