const CONFIGURATIONS = {
    ENV: process.env.ENV || "development",
    FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
    BACKEND_URL: process.env.BACKEND_URL || "http://localhost:3000",
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRATION: process.env.JWT_EXPIRES_IN || "1h",
};

export default CONFIGURATIONS;
