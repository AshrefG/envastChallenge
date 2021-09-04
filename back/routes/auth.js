 
const express = require('express');
const { signupClient, signinClient, getAllClients } = require('../controllers/auth');
const { userSignupValidator, isRequestValidated } = require('../validator');
const router = express.Router();

router.post('/signup', signupClient,userSignupValidator,isRequestValidated);
router.post('/signin', signinClient);
router.get('/getAll', getAllClients);


module.exports = router;