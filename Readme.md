# BinaryBlitz 🚀

A full-stack quiz platform where users can take technology quizzes at different difficulty levels and track their results. Admins can manage quizzes through a separate admin panel.

![Tech Stack](https://img.shields.io/badge/React-19-blue) ![Node.js](https://img.shields.io/badge/Node.js-22-green) ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen) ![Clerk](https://img.shields.io/badge/Auth-Clerk-purple)

---

## 🌐 Live Demo

| App | URL |
|---|---|
| 🎮 User App | [binary-blitz-six.vercel.app](https://binary-blitz-six.vercel.app) |
| 🛠️ Admin Panel | [binary-blitz-z22w.vercel.app](https://binary-blitz-z22w.vercel.app) |
| ⚙️ API Server | [binaryblitz-server.onrender.com](https://binaryblitz-server.onrender.com) |

---

## ✨ Features

### User Features
- Sign up / Login via Clerk Authentication
- Browse quizzes by technology and difficulty level
- Take timed quizzes (Basic, Intermediate, Advanced)
- View quiz results and history

### Admin Features
- Secure admin-only dashboard
- Upload and manage quizzes
- View platform statistics (total users, active users)
- Delete quizzes

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS |
| Admin | React 19, Vite, Tailwind CSS |
| Backend | Node.js, Express 5 |
| Database | MongoDB Atlas, Mongoose |
| Authentication | Clerk |
| Webhook | Svix |
| Deployment | Render (server), Vercel (frontend + admin) |

---

## 📁 Project Structure

```
BinaryBlitz/
├── server/         # Node.js + Express backend API
│   ├── config/     # Database connection
│   ├── controllers/# Route handlers
│   ├── middleware/ # Auth middleware
│   ├── model/      # Mongoose schemas
│   ├── routes/     # API routes
│   └── server.js   # Entry point
├── frontend/       # React app for users
│   └── src/
│       ├── components/
│       ├── pages/
│       └── services/
└── admin/          # React app for admins
    └── src/
        ├── components/
        ├── pages/
        └── services/
```

---

## 🚀 Getting Started (Local Setup)

### Prerequisites
- Node.js v18+
- npm
- MongoDB Atlas account
- Clerk account
- ngrok (for webhook testing)

### Step 1 — Clone the repo
```bash
git clone https://github.com/FUNCTIONCALL-AGRIM/BinaryBlitz.git
cd BinaryBlitz
```

### Step 2 — Setup environment variables

**server/.env**
```
PORT=8080
MONGODB_URI=your_mongodb_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
```

**frontend/.env**
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:8080/api
```

**admin/.env**
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:8080/api
```

### Step 3 — Install and run (3 terminals)

**Terminal 1 - Server:**
```bash
cd server
npm install
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**Terminal 3 - Admin:**
```bash
cd admin
npm install
npm run dev
```

### Step 4 — Setup Clerk Webhook
```bash
ngrok http 8080
```
- Copy the https URL
- Go to Clerk Dashboard → Webhooks → Add Endpoint
- URL: `https://YOUR_NGROK_URL/api/users/webhook/clerk`
- Subscribe to: `user.created`, `session.created`, `session.ended`, `session.removed`

---

## 🌍 Deployment

| Service | Platform |
|---|---|
| Server | [Render.com](https://render.com) |
| Frontend | [Vercel](https://vercel.com) |
| Admin | [Vercel](https://vercel.com) |
| Database | MongoDB Atlas |

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/users/webhook/clerk` | Clerk webhook |
| POST | `/api/admin/upload-quiz` | Upload quiz (admin) |
| GET | `/api/admin/quizzes` | Get all quizzes |
| GET | `/api/admin/stats` | Get platform stats |
| DELETE | `/api/admin/quiz/:id` | Delete quiz (admin) |
| POST | `/api/result/save-result` | Save quiz result |
| GET | `/api/result/my-result` | Get user results |

---

## 👤 Admin Setup

The admin role is assigned by email in `server/controllers/webhook.js`:

```javascript
const role = primaryEmail === "your@email.com" ? "admin" : "user";
```

Change this to your email before deploying.

---

## ⚠️ Security Notes

- Never commit `.env` files to version control
- All `.env` files are in `.gitignore`
- Move MongoDB URI to environment variables before production
- Restrict CORS origins in production

---

## 👨‍💻 Author

**FUNCTIONCALL-AGRIM**
- GitHub: [@FUNCTIONCALL-AGRIM](https://github.com/FUNCTIONCALL-AGRIM)
- Repo: [BinaryBlitz](https://github.com/FUNCTIONCALL-AGRIM/BinaryBlitz)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
