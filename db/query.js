const knex = require('./knexConfig.js')

function getInstructor(){
  return knex('instructor')
    .select()
    .orderBy('id', 'desc')
}

function getInstructorById(id){
  return knex('instructor')
    .select()
    .where('id', id).first()
}

module.exports = {
  getInstructor,
  getInstructorById
}
