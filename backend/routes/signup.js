const express = require('express')
const router = express.Router();

const  {
    createSignUp
} = require('../controllers/signupController')

router.post('/', createSignUp);

module.exports = router;