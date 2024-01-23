const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {validateUserLogin,validateCreateUser,handleValidationErrors} = require('../utils/validator')

router.post("/login",validateUserLogin,handleValidationErrors,userController.userLogin);
router.post("/register",validateCreateUser,handleValidationErrors,userController.createUser);

module.exports = router;