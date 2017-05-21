const db = require('../db');
const striptags = require('striptags');


function showUserProfile(req, res, next) {
  const id = req.params.id

  return db('users')
    .where('users.id', id)
    .then((userData) => {
      const users = userData[0]
      users.keywords = users.keywords.keywords
      return users;
    })
    .then((users) => {
      return db('users').then((allUsers) => {
        res.render('users', { users, allUsers })
      })
    })
    .catch((err) => next(err))
}

function editUserProfile(req, res, next) {
  const id = req.params.id

  return db('users')
    .where('users.id', id)
    .then((userData) => {
      res.render('/user/index', userData)
    })
    .catch((err) => next(err))
}

function customizeUser(req, res, next) {
  const id = req.params.id
  const userTags = req.body
  userTags.keywords = {
    'keywords': userTags.keywords.split(',')
  };
  return db('users')
    .update(userTags)
    .where('users.id', id)
    .then((result) => {
      res.status(200).json(result[1]);
    })
    .catch((err) => next(err))
}

function getUserForm(req, res, next) {
  const id = req.params.id
  if (id) {
    return db('users')
      .where('users.id', id)
      .then((users) => {
        user = users[0];
        user.keywords = user.keywords.keywords;
        res.render('profile-edit.hbs', { user })
      }).catch((err) => next(err));
  }
  res.render('profile-form')
}

function newUser(req, res, next) {
  const newUser = req.body
  newUser.keywords = {
    'keywords': newUser.keywords.split(' ')
  };

  return db('users')
    .insert(newUser, '*')
    .then((newUser) => {
      res.redirect(`/users/${newUser.id}`)
    })
    .catch((err) => next(err))
}

//show all articles
//restrict articles passed to the rendering function just to the ones that are relevant to that keyword
function showAllArticles(req, res, next) {
  const userId = req.params.id

  return Promise.all([queryUsers(userId), queryArticles()])
    .then((userArticleData) => {
      const articles = returnRelevantArticles(userArticleData[1], userArticleData[0][0].keywords.keywords).sort(sortArticles)
      articles.forEach(article => {
        article.userId = userId;
      })
      console.log(articles);
      res.render('showUserArticles.hbs', { articles, userId })
    })
    .catch((err) => next(err))
}

function queryUsers(id) {
  return db('users').where('users.id', id)
}

function queryArticles() {
  return db('articles')
}

// returns articles that have matching keywords with additional fields for number of matches, and
function returnRelevantArticles(articleData, keywords) {
  return articleData.filter(article => {
    if (checkForKeywords(article, keywords)) {
      return countMatches(article, keywords)
    }
  })
}

// returns a boolean and decides whether or not an article is relevant to the user
function checkForKeywords(article, userKeys) {
  return article.keywords.some(keyword => userKeys.includes(keyword))
}

//could also add a field matched keys to enable fancy display of matches
function countMatches(article, userKeys) {
  const matches = []

  const numberOfMatches = article.keywords.filter(keyword => {
    if (userKeys.includes(keyword)) {
      matches.push(keyword)
      return keyword
    }
  }).length

  article.numMatches = numberOfMatches
  article.matchedWords = matches
  article.description = striptags(article.description)

  return article
}

function sortArticles(a, b) {
  if (a.numMatches < b.numMatches) {
    return 1
  } else if (a.numMatches > b.numMatches) {
    return -1
  }
  return 0
}

function showUserBreifing(req, res, next) {
  res.render('briefing')
}

function addUserBreifing(req, res, next) {
  const user_id = req.body.user_id;
  const article_id = req.body.article_id;
  const newBreifing = { user_id, article_id };

  db('user_article').insert(newBreifing, '*')
  .then(results => {
    res.send(results)
  })
  return db('user_article')
}

module.exports = {
  showUserProfile,
  customizeUser,
  newUser,
  showAllArticles,
  getUserForm,
  showUserBreifing,
  addUserBreifing
}
