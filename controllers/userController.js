const db = require('../db')

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

function getUserForm(req, res, next){
  return res.render('profile-form');
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
  //restrict articles passed to the rendering function just to the ones that are relevant to that keyword
  //call a sorting function
function showAllArticles(req, res, next){
  const id = req.params.id

  return Promise.all([queryUsers(id),queryArticles()])
    .then((userArticleData) => {
      const articles = returnRelevantArticles(userArticleData[1],userArticleData[0][0].keywords.keywords)
      console.log('filtered articles!',articles)
      res.render('/article/index', {articles})
    })
    .catch((err) => next(err))
}

function queryUsers(id){
  return db('users').where('users.id',id)
}

function queryArticles(){
  return db('articles')
}

//sorts the article feed
  //uses keywords to identify relevant articles

  //weight articles by the number of matched keywords
function returnRelevantArticles(articleData, keywords){
  return articleData.filter(article => {
    if(article.keywords.keywords.some(keyword => keywords.includes(keyword))){
      return article
    }
  })
}

// returns a boolean and decides whether or not an article is relevant to the user
function checkForKeywords(keyword){}


function sortArticles(a,b){
  if(a.matches < b.matches){
    return -1
  }
  else if(a.matches > b.matches){
    return 1
  }
  return 0
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
  showSpecificArticle,
  getUserForm
}
