const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 second in milliseconds
    limit: 50,
    standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
});

module.exports = rateLimiter;