const db = require('../../database/dbConfig.js')

module.exports = {
    add,
    remove,
    find,
    findById,
    update
}

function find() {
    return db('shop')
        .orderBy('id')
}

async function add(item) {
    const [id] = await db('shop').insert(item)
    return id
}

function update(id, changes){
    return db('shop')
        .where({ id })
        .update(changes)
}

function findById(id) {
    return db('shop')
        .where({ id })
        .first()
}

function remove(id) {
    return db('shop')
        .where({ id })
        .del()
}