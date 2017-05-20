const db = require('../db');

//index dropdown
function getSingleArticle(req, res, next){
  const id = req.params.id
  console.log('id', id);
  return db('articles')
  .where( {id} )
  .then(article => {
    // console.log(article);
    res.render('/', article)
  })
  .catch((err) => next(err))
}

module.exports = {
  getSingleArticle
}
