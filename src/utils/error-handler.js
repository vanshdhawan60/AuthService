const {StatusCodes, ReasonPhrases} = require('http-status-codes');

class AppError extends Error {
    constructor(
        name = "AppError",
        message = "Something went wrong",
        reason = ["Something went wrong"],
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ) {
        super(message);
        this.name = name;
        this.message = message;
        this.reason = reason;
        this.statusCode = statusCode;
    }
};

module.exports = AppError;