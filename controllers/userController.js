function showUserProfile(req, res, next){
  const id = req.params.id
}

function customizeUser(req, res, next){
  const id = req.params.id
}

function newUser(req,res,next){
  
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
  showAllArticles,
  showSpecificArticle
}
