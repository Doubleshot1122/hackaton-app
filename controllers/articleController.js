const db = require('../db');

//index dropdown
function getSingleArticle(req, res, next){
  const id = req.params.id
  return db('articles')
  .where( {id} )
  .then(article => {
    res.render('/', article)
  })
  .catch((err) => next(err))
}

module.exports = {
  getSingleArticle
}
