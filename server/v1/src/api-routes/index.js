const httpStatus = require("http-status");
const JWT = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1] || null;
    if (token == null) {
        return res.status(httpStatus.UNAUTHORIZED).send({ error: "To perform this action, you must first log in." });
    }
    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
        if (err) return res.status(httpStatus.FORBIDDEN).send({ error: err });
        req.user = user?._doc;
        next();
    });
};

module.exports = authenticateToken;