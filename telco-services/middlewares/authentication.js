import passport from "../configs/passport.js";

export const authJWT = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, async (err, user, info) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (!user && info && (info.name === 'JsonWebTokenError' || info.name === 'Error')) {
            console.log(info);
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // If access token is expired, 
        if (info && info.name === 'TokenExpiredError') {
            console.log(info);
            return res.status(401).json({ message: 'TokenExpiredError' });
        }

        console.log(info.name);

        req.user = user;
        next();
    })(req, res, next);
};