const express = require('express');
const router = express.Router();
const ProfileRouter = require('../controllers/profile')

const {authByToken} = require('../middleware/auth')

router.get('/:username',authByToken,ProfileRouter.getProfile)         //Get a profile of a user of the system

module.exports = router