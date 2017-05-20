const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')


//user profile
router.get('/user/:id', userController.showUserProfile)
router.put('/user/:id', userController.customizeUser)

//add user
router.post('/user', userController.newUser)

//user index page
router.get('/user/:id/article', userController.showAllArticles)

//specific article ppage
router.get('/user/:id/article/:articleId', userController.showSpecificArticle)





module.exports = router
