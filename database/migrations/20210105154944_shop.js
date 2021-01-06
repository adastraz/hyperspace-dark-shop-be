
exports.up = function(knex) {
    return knex.schema
        .createTable('shop', tbl => {
            tbl.increments()
            tbl.string('name')
                .notNullable()
                .unique()
            tbl.integer('price')
                .notNullable()
            tbl.string('type')
                .notNullable()
            tbl.string('img')
                .notNullable()
        })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('shop')
}
