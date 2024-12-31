const validateUserAuth = (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            success: false,
            msg: "Email and password are required!",
            error: {},
            data: {}
        })
    }
    next();
}

module.exports = {
    validateUserAuth
}