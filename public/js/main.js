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
  console.log($article.data('id'));
  console.log($article.data('userid'));
}

$('.col .keyword.card-panel').on('click', addToQuery);
$('.add-to-briefing').on('click', addToBriefing);
