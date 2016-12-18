const knex = require('./knex');

module.exports = {
  getAll: () => {
    return knex('todo')
            .select();
  },
  getOne: (id) => {
    return knex('todo')
            .select()
            .where('id', id)
            .first();
  },
  create: (todo) => {
    return knex('todo')
            .insert(todo, 'id');
  },
  update: (id, todo) => {
    return knex('todo')
            .where('id', id)
            .update(todo, 'id');
  },
  delete: (id) => {
    return knex('todo')
            .where('id', id)
            .del();
  }
};
