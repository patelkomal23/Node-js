
const { Router } = require("express");
const { homePage, signupPage, loginPage, signup, login, logout } = require("../controllers");



const router = Router()

router.get('/',homePage)
router.get('/signup',signupPage)
router.get('/login',loginPage)
router.get('/logout',logout)

router.post('/signup',signup)
router.post('/login',login)

module.exports = router