const {User, Role} = require('../models/index');
const ValidationError = require('../utils/validation-error');

class UserRepository {

    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            if (error.name === "SequelizeValidationError") {
                throw new ValidationError(error);
            }
            throw error;
        }
    }

    async delete(userId) {
        try {
            await User.destroy({
                where: {
                    id: userId,
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw error;
        }
    }

    async getById (userId) {
        try {
            const user = await User.findByPk(userId, {
                attributes: ['id', 'email'],
            })
            return user;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw error;
        }
    }

    async getByEmail (email) {
        try {
            const user = await User.findOne({
                where: {
                    email: email,
                }
            })
            return user;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw error;
        }
    }

    async isAdmin(userId) {
        try {
            const user = await User.findByPk(userId);
            const adminRole = await Role.findOne({
                where: {
                    name: "ADMIN",
                }
            })
            return await user.hasRole(adminRole);
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw error;
        }
    }

}

module.exports = UserRepository;