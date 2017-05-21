const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')


//add user
router.get('/add-user', userController.getUserForm)
router.post('/', userController.newUser)

//user profile
router.get('/:id', userController.showUserProfile)
router.get('/:id/edit', userController.getUserForm)
router.put('/:id', userController.customizeUser)

//user index page
router.get('/:id/article', userController.showAllArticles)

//briefing page
router.get('/:id/briefing', userController.showUserBreifing)
router.post('/:id/briefing', userController.addUserBreifing)
router.delete('/:id/briefing/:article_id', userController.removeUserBreifing)


module.exports = router
