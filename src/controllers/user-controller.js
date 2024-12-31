const UserService = require ('../services/user-service');

const userService = new UserService();

const create = async (req, res) => {
    try {
        const user = await userService.create({
            email: req.body.email,
            password: req.body.password,
        });
        return res.status(201).json({
            status: true,
            error: {},
            msg: "Successfully created user",
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: error,
            msg: "Unable to create user",
            data: {}
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await userService.delete(req.body);
        return res.status(201).json({
            status: true,
            error: {},
            msg: "Successfully deleted user",
            data: response
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: error,
            msg: "Unable to delete user",
            data: {}
        })
    }
}

module.exports = {
    create,
    destroy
}