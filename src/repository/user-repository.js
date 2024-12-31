const {User} = require('../models/index');

class UserRepository {

    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
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
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw error;
        }
    }

    async getById (userId) {
        try {
            const user = User.findByPk(userId, {
                attributes: [id, email],
            })
            return user;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw error;
        }
    }

}

module.exports = UserRepository;