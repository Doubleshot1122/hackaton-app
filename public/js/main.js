$(document).ready(() => {
  $('.button-collapse').sideNav();
})
$('#profile-form-submit').click((e) => {
  // e.preventDefault();

})

const domVars = { query: [] };

const addToQuery = () => {
  const $keyword = $(event.target);
  const query = domVars.query;

  if (!$keyword.hasClass('queried')) {
    $keyword.addClass('queried lighten-4');
    query.push($keyword.data('name'));
    $('#keyword-search').val(query.join(' '))
  } else {
      const keywordIndex = query.indexOf($keyword.data('name'))
      $keyword.removeClass('queried lighten-4');
      query.splice(keywordIndex, 1);
      $('#keyword-search').val(query.join(' '))
  }
}

const addToBriefing = () => {
  const $article = $(event.target);

  const $articleId = $article.data('id')
  const $userId = $article.data('userid')

  if ($article.hasClass('red')){
    return removeArticle($, $userId, $articleId)
  }
  else {
    return addArticle($, $article, $articleId, $userId)
  }
}

function removeArticle($, $article, $userId, $articleId){
  return $.ajax({
    method: 'DELETE',
    url: `/users/${$userId}/briefing/${$articleId}`,
    data: { user_id: $userId, article_id: $articleId },
  })
  .done(() => {
    console.log('removed!')
    return $article.removeClass('red').text('Add');
  })
  .catch((err) => console.error(err))
}

function addArticle($, $article, $articleId, $userId){
  return $.ajax({
    method: 'POST',
    url: `/users/${$userId}/briefing`,
    data: { user_id: $userId, article_id: $articleId },
  })
  .done(() => {
    console.log('added!')
    return $article.addClass('red').text('Remove');
  })
  .catch((err) => console.error(err))
}

$('.col .keyword.card-panel').on('click', addToQuery);
$('.add-to-briefing').on('click', addToBriefing);
