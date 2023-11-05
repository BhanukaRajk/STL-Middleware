import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const ADD_ONS_URL = process.env.ADD_ONS_URL;

export const apiAddOns = axios.create({
    baseURL: ADD_ONS_URL,
});
