const { authService } = require('../services');

const authController = {
    async register(req,res,next) {
        try {
            authService.someFunc()
        } catch(error) {

        }
    }
}

module.exports = authController;