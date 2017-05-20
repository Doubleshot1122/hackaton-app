const db = require('../db');

//index dropdown
function getAllUsersDropDown(req, res, next){
  return db('users').select('id', 'name', 'image_url')
  .then(users => {
<<<<<<< HEAD
=======
    console.log(users);
>>>>>>> 1bdf98f09175846bdf498a4d99296b750878d647
    res.render('/', users)
  })
  .catch((err) => next(err))
}

module.exports = {
  getAllUsersDropDown
}
