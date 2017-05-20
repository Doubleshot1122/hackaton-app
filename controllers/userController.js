function showUserProfile(req, res, next){
  const id = req.params.id

  return db('users')
    .where('users.id', id)
    .then((userData) => {
      res.render('/user/index', userData)
    })
    .catch((err) => next(err))
}

function customizeUser(req, res, next){
  const id = req.params.id
  const userTags = req.body

  return db('users')
    .update(userTags)
    .where('users.id', id)
    .then(() => {
      res.redirect(`/users/${id}`)
    })
    .catch((err) => next(err))
}

function newUser(req,res,next){
  const newUser = req.body

  return db('users')
    .insert(newUser, '*')
    .then((newUser) => {
      res.redirect(`/users/${newUser.id}`)
    })
    .catch((err) => next(err))
}

//show all articles
function showAllArticles(req, res, next){
  const id = req.params.id
  const articleData = '' //fill in later
  res.render('/articles/index', articleData)
}

function showSpecificArticle(req, res, next){
  const userId = req.params.id
  const articleId = req.params.articleId
}


module.exports = {
  showUserProfile,
  customizeUser,
  newUser,
  showAllArticles,
  showSpecificArticle
}
