exports.up = (knex, Promise) => {
    return knex.schema.createTable('keywords',  (table) => {
            table.string('keyword').primary().unique()
    table.index('keyword')
})
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('keywords')
}