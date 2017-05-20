exports.up = (knex, Promise) => {
  return knex.schema.createTable('articles',  (table) => {
    table.increments()
    table.text('link')
    table.text('png')
    table.string('title')
    table.json('keywords')
    table.text('description')
    table.timestamps(true, true)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('articles')
}
