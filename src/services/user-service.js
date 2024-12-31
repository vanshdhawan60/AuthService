const UserRepository = require('../repository/user-repository');
const { JSON_SECRET_KEY } = require('../config/serverConfig');
const jwt = require('jsonwebtoken');

class UserService {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async create (data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async delete (userId) {
        try {
            await this.userRepository.delete(userId);
            return true;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    generateToken (user) {
        try {
            const token = jwt.sign(user, JSON_SECRET_KEY, {expiresIn: '24h'});
            return token;
        } catch (error) {
            console.log("Unable to generate user token!");
            throw error;
        }
    }

    verifyToken (token) {
        try {
            const user = jwt.verify(token, JSON_SECRET_KEY);
            return user;
        } catch (error) {
            console.log("Unable to verify user token!");
            throw error;
        }
    }

}

module.exports = UserService;