const express = require('express');
const UserController = require('../../controllers/user-controller');
const {AuthRequestValidators} = require('../../middlewares/index');

const router = express.Router();

router.post('/signup', AuthRequestValidators.validateUserAuth, UserController.create);
router.post('/signin', AuthRequestValidators.validateUserAuth, UserController.signin);
router.get('/isAuthenticated', UserController.isAuthenticated);
router.get('/isAdmin', UserController.isAdmin);

module.exports = router;