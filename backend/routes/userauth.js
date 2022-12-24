const express = require('express')
const {login} = require('../controllers/login_1')
const {logout} = require('../controllers/logout')
const {register} = require('../controllers/register.js')

const router =  express.Router()

router.post('/login/', login);

router.post('/logout/', logout);

router.post('/register/', register);

module.exports = router