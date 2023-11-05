import dotenv from "dotenv";
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import Customer from "../models/customer.model.js";

dotenv.config();

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || "secret",
};

const verifyCustomer = async (payload, done) => {
    try {
        const customer = await Customer.findById(payload._id);
        if (!customer) {
            return done(null, false);
        }
        return done(null, customer);
    } catch (error) {
        return done(error, false);
    }
}

const jwtStrategy = new JwtStrategy(options, verifyCustomer);

passport.use(jwtStrategy);

export default passport;