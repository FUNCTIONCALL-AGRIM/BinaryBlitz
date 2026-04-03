import dns from "node:dns"
dns.setServers(['8.8.8.8', '8.8.4.4']); // Force use Google DNS
dns.setDefaultResultOrder("ipv4first");

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from '@clerk/express';

import adminRoutes from "./routes/admin.js";
import resultRoutes from "./routes/result.js";
import userRoutes from "./routes/user.js";

const app = express();
const PORT = process.env.PORT;

// MIDDLEWARE
app.use(clerkMiddleware());
app.use(cors()); // Enable CORS for all routes
app.use("/api/users", userRoutes);
app.use(express.json());

// Connect to MongoDB
await connectDB();

// Routes

app.use("/api/admin", adminRoutes);
app.use("/api/result", resultRoutes);


app.get('/', (req, res) => {
  res.send('API WORKING');
});

app.listen(PORT, () => {
  console.log(`Server Started on http://localhost:${PORT}`);
});