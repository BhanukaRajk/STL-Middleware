import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import transporter from "../configs/transporter.js";

import Customer from "../models/customer.model.js";
import OTP from "../models/otp.model.js";

dotenv.config();

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const customer = await Customer.findOne({ email });

        const isPasswordValid = await bcrypt.compare(password, customer.password);

        if (!customer || !isPasswordValid) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const payload = {
            _id: customer._id,
            phoneNo: customer.phone_no,
            email: customer.email,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        return res.status(200).json({ token });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const signup = async (req, res) => {
    const { firstName, lastName, phoneNo, email, password } = req.body;

    try {
        const customer = await Customer.create({
            first_name: firstName,
            last_name: lastName,
            phone_no: phoneNo,
            email,
            password: await hashPassword(password),
        });

        return res.status(201).json({ customer });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const sendOTP = async (req, res) => {
    const { email } = req.body;

    try {
        const customer = await Customer.findOne({ email });

        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        const otp = Math.floor(100000 + Math.random() * 900000);

        await OTP.create({
            email,
            otp,
        });

        console.log(process.env.EMAIL, process.env.EMAIL_PASSWORD);

        const info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: 'STL OTP',
            text: `Your OTP is ${otp}`,
        });

        console.log(info);

        return res.status(200).json({ message: 'OTP sent' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const verifyOTP = async (req, res) => {
    const { email, otp } = req.body;

    try {
        const otpDoc = await OTP.findOne({ email });

        if (!otpDoc) {
            return res.status(404).json({ message: 'OTP not found' });
        }

        if (otpDoc.otp !== otp) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        return res.status(200).json({ message: 'OTP verified' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const resetPassword = async (req, res) => {
    const { email, password } = req.body;

    try {
        const customer = await Customer.findOne({ email });

        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        customer.password = await hashPassword(password);
        await customer.save();

        return res.status(200).json({ message: 'Password reset' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}