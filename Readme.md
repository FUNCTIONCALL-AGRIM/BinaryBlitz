================================================================
                        BINARYBLITZ
          A Full-Stack Quiz Platform with Admin Panel
================================================================

ABOUT
-----
BinaryBlitz is a full-stack quiz platform where users can take
technology quizzes at different difficulty levels and track their
results. Admins can manage quizzes through a separate admin panel.

Built with React, Node.js, MongoDB, and Clerk Authentication.

----------------------------------------------------------------

PROJECT STRUCTURE
-----------------
BinaryBlitz/
  server/       -> Node.js + Express backend API
  frontend/     -> React app for users (quiz takers)
  admin/        -> React app for admin (quiz management)

----------------------------------------------------------------

TECH STACK
----------
Frontend & Admin : React 19, Vite, Tailwind CSS, Clerk Auth
Backend          : Node.js, Express 5, MongoDB, Mongoose
Authentication   : Clerk (with webhook support via Svix)
Database         : MongoDB Atlas

----------------------------------------------------------------

PREREQUISITES
-------------
- Node.js v18 or higher
- npm
- MongoDB Atlas account
- Clerk account (https://clerk.com)
- ngrok (for local webhook testing)

----------------------------------------------------------------

GETTING STARTED (LOCAL SETUP)
------------------------------

STEP 1 - Clone the repository
  git clone https://github.com/FUNCTIONCALL-AGRIM/BinaryBlitz.git
  cd BinaryBlitz

STEP 2 - Setup environment variables

  In server/.env:
    PORT=8080
    MONGODB_URI=your_mongodb_connection_string
    CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

  In frontend/.env:
    VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    VITE_API_URL=http://localhost:8080/api

  In admin/.env:
    VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    VITE_API_URL=http://localhost:8080/api

STEP 3 - Install dependencies (run in 3 separate terminals)

  Terminal 1 - Server:
    cd server
    npm install
    npm start

  Terminal 2 - Frontend:
    cd frontend
    npm install
    npm run dev

  Terminal 3 - Admin:
    cd admin
    npm install
    npm run dev

STEP 4 - Setup Clerk Webhook (for user sync)

  - Install ngrok: https://ngrok.com
  - Run: ngrok http 8080
  - Copy the https URL (e.g. https://abc123.ngrok.io)
  - Go to Clerk Dashboard -> Webhooks -> Add Endpoint
  - URL: https://abc123.ngrok.io/api/users/webhook/clerk
  - Select events: user.created, session.created,
                   session.ended, session.removed

----------------------------------------------------------------

RUNNING THE APP
---------------
After setup, open your browser:

  User App   -> http://localhost:5173
  Admin Panel -> http://localhost:5174
  API Server  -> http://localhost:8080

----------------------------------------------------------------

ADMIN SETUP
-----------
The admin role is assigned by email address in webhook.js.
Change this line to your admin email:

  const role = primaryEmail === "your@email.com" ? "admin" : "user";

After signing up with that email, you will have admin access
to the panel at http://localhost:5174

----------------------------------------------------------------

FEATURES
--------
User Features:
  - Sign up / Login via Clerk
  - Browse quizzes by technology and difficulty level
  - Take timed quizzes (Basic, Intermediate, Advanced)
  - View quiz results and history

Admin Features:
  - Secure admin-only dashboard
  - Upload and manage quizzes
  - View platform statistics (total users, active users)
  - Delete quizzes

----------------------------------------------------------------

API ENDPOINTS
-------------
POST   /api/users/webhook/clerk     -> Clerk webhook (user sync)
POST   /api/admin/upload-quiz       -> Upload a new quiz (admin)
GET    /api/admin/quizzes           -> Get all quizzes
GET    /api/admin/stats             -> Get platform stats
DELETE /api/admin/quiz/:id          -> Delete a quiz (admin)
POST   /api/result/save-result      -> Save quiz result
GET    /api/result/my-result        -> Get user's results

----------------------------------------------------------------

DEPLOYMENT
----------
Server  -> Render.com (free Node.js hosting)
Frontend -> Vercel (free React/Vite hosting)
Admin   -> Vercel (deploy as separate project)
Database -> MongoDB Atlas (already cloud hosted)

See DEPLOYMENT GUIDE below for full instructions.

----------------------------------------------------------------

IMPORTANT SECURITY NOTES
-------------------------
- Never commit .env files to version control
- All .env files are listed in .gitignore
- Change the MongoDB URI to use environment variables
- Rotate your Clerk keys before going to production
- Restrict CORS origins in production (currently open)

----------------------------------------------------------------

AUTHOR
------
GitHub : https://github.com/FUNCTIONCALL-AGRIM
Repo   : https://github.com/FUNCTIONCALL-AGRIM/BinaryBlitz

================================================================
