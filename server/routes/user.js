import express from "express";
import { clerkWebhook } from "../controllers/webhook.js";

const router = express.Router();

// Webhook route (no auth)
router.post(
    "/webhook/clerk",
    express.raw({ type: "application/json" }), // MUST
    clerkWebhook
);

export default router;