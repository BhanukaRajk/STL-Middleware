import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create a transporter with your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'your-email-address (gmail)',
        pass: process.env.EMAIL_PASSWORD || 'your-email-password (gmail)',
    },
});

export default transporter;