const AppError = require('./error-handler');
const {StatusCodes} = require('http-status-codes');

class ValidationError extends AppError {
    constructor(error) {
        const errorName = error.name;
        let explanation = [];
        error.errors.forEach(element => {
            explanation.push(element.message);
        });
        super(
            errorName,
            "Validation Error!",
            explanation,
            StatusCodes.BAD_REQUEST
        );
    }
};

module.exports = ValidationError;