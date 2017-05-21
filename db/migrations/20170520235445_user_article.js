exports.up = (knex, Promise) => {
  return knex.schema.createTable('user_article',  (table) => {
    table.integer('user_id')
    table.integer('article_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('user_article')
}
