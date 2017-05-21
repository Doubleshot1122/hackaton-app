exports.seed = (knex) => {
  return knex('user_article').truncate()
    .then(() => {
      return knex('user_article').insert([
        {
          user_id: 1,
          article_id: 520
        },
        {
          user_id: 1,
          article_id: 521
        },
      ])
    })
}
