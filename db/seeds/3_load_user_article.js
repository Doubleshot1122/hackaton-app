exports.seed = (knex) => {
  return knex('user_article').truncate()
    .then(() => {
      return knex('user_article').insert([
        {
          user_id: 1,
          article_id: 3
        },
        {
          user_id: 1,
          article_id: 4
        },
        {
          user_id: 1,
          article_id: 5
        },
        {
          user_id: 1,
          article_id: 6
        },
        {
          user_id: 2,
          article_id: 315
        },
        {
          user_id: 2,
          article_id: 314
        },
        {
          user_id: 2,
          article_id: 298
        },
        {
          user_id: 2,
          article_id: 271
        }
      ])
    })
}
