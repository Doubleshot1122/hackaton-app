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
    $article.removeClass('red').text('Add');
  } else {
    $.ajax({
      method: 'POST',
      url: `/users/${$userId}/briefing`,
      data: { user_id: $userId, article_id: $articleId },
    })
    .done(() => {
      console.log('added!');
    })
    $article.addClass('red').text('Remove');
  }

}

$('.col .keyword.card-panel').on('click', addToQuery);
$('.add-to-briefing').on('click', addToBriefing);

const updateUserProfile = (e) => {
  e.preventDefault();

  let $keywords = $('#keyword-list').data('keywords');
  $keywords += (',' + $('#keywords').val());
  let userId = $('#profile_name').data('id');
  let name = $('#profile_name').val();
  let image_url = $('#image_url').val();
  let region = $('#region').val();
  let keywords = $keywords;

  $.ajax({
    method: 'PUT',
    url: `/users/${userId}`,
    data: { name, image_url, region, keywords }
  })
  .done(() => {
    window.location.replace(`/users/${userId}/edit`)
  })
  .catch(err => {
    console.error(err);
  })
}
$('#profile-form-submit').on('click', updateUserProfile)
