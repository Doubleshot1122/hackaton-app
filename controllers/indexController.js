//index dropdown
function getAllUsersDropDown(req, res, next){
  const id = req.params.id
  const articleData = '' //fill in later
  res.render('/articles/index', articleData)
}

module.exports = {
  getAllUsersDropDown
}
