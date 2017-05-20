const db = require('../db');

//index dropdown
function getAllUsersDropDown(req, res, next){
  return db('users').select('id', 'name', 'image_url')
  .then(users => {
    console.log(users);
    res.render('/', users)
  })
  .catch((err) => next(err))
}

module.exports = {
  getAllUsersDropDown
}
