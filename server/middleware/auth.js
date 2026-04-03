import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';
import User from '../model/User.js';

// Sirf authenticated users ke liye
export const protect = ClerkExpressWithAuth();

// Sirf Admins ke liye (Custom Middleware)
export const isAdmin = async (req, res, next) => {
    try {
        const clerkId = req.auth.userId; // Clerk se ID milti hai
        const user = await User.findOne({ clerkId });

        if (user && user.role === 'admin') {
            next();
        } else {
            res.status(403).json({ message: "Access denied. Admins only." });
        }
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};