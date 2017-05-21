const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController.js')

/* GET home page. */
<<<<<<< HEAD

router.get('/', indexController.getAllUsersDropDown)

=======
>>>>>>> 1fd48e1a31de98b718b4a81896692c4c6dac445e
router.get('/', articleCard);

function articleCard (req, res, next) {
  const article = {
    title: 'article title',
    description: 'Molestie libero mi ornare fusce integer nulla euismod! Enim laoreet tempor augue taciti curabitur ornare quis! Habitasse congue nisi eget leo, molestie ligula. Vulputate, iaculis tempus ante torquent. Hendrerit iaculis pulvinar aptent maecenas iaculis aliquet netus, elit venenatis proin. Class, nascetur aliquet gravida dui aliquet massa. Arcu aptent pellentesque vivamus consectetur tristique venenatis scelerisque aliquam. Conubia himenaeos aenean amet vel facilisis nibh condimentum posuere non malesuada? Faucibus metus aptent primis vivamus per habitant curabitur sed suscipit. Molestie libero mi ornare fusce integer nulla euismod! Enim laoreet tempor augue taciti curabitur ornare quis! Habitasse congue nisi eget leo, molestie ligula. Vulputate, iaculis tempus ante torquent. Hendrerit iaculis pulvinar aptent maecenas iaculis aliquet netus, elit venenatis proin. Class, nascetur aliquet gravida dui aliquet massa. Arcu aptent pellentesque vivamus consectetur tristique venenatis scelerisque aliquam. Conubia himenaeos aenean amet vel facilisis nibh condimentum posuere non malesuada? Faucibus metus aptent primis vivamus per habitant curabitur sed suscipit Molestie libero mi ornare fusce integer nulla euismod! Enim laoreet tempor augue taciti curabitur ornare quis! Habitasse congue nisi eget leo, molestie ligula. Vulputate, iaculis tempus ante torquent. Hendrerit iaculis pulvinar aptent maecenas iaculis aliquet netus, elit venenatis proin. Class, nascetur aliquet gravida dui aliquet massa. Arcu aptent pellentesque vivamus consectetur tristique venenatis scelerisque aliquam. Conubia himenaeos aenean amet vel facilisis nibh condimentum posuere non malesuada? Faucibus metus aptent primis vivamus per habitant curabitur sed suscipit',
    keywords: [
      'lorem',
      'ipsum',
      'whatever'
    ]
  };
  article.preview = article.description.length > 550 ? article.description.substring(0, 550) : article.description

  res.render('index', { article });
}
<<<<<<< HEAD

=======
>>>>>>> 1fd48e1a31de98b718b4a81896692c4c6dac445e

module.exports = router;
