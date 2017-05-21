const db = require('../db');

//index dropdown
function getAllUsersDropDown(req, res, next){
  return db('users').select('id', 'name', 'image_url')
  .then(users => {
    res.render('index', { users })
  })
  .catch((err) => next(err))
}

module.exports = {
  getAllUsersDropDown
}
