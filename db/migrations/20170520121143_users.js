exports.up = (knex, Promise) => {
  return knex.schema.createTable('users',  (table) => {
    table.increments()
    table.string('name')
    table.string('region')
    table.json('keywords')
    table.text('image_url')
    table.timestamps(true, true)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
