import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import Customer from "../models/customer.model.js";

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

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}