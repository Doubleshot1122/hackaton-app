const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')


//add user
router.get('/add-user', userController.getUserForm)
router.post('/', userController.newUser)

//user profile
router.get('/:id', userController.showUserProfile)
router.put('/:id', userController.customizeUser)


//user index page
router.get('/:id/article', userController.showAllArticles)

//specific article ppage
router.get('/:id/article/:articleId', userController.showSpecificArticle)





module.exports = router
