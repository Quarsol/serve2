exports.up = function(knex) {
  return knex.schema.createTable('instructor', (table) => {
    table.increments();
    table.string('fullName');
    table.string('title');
    table.string('numberOfDogs');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('instructor');
};
