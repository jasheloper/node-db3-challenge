const db = require("../db-config.js");

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id });
}

function findSteps(id) {
return db("steps") // steps.js
.join(
   "schemes", // steps.js + schemes.js
   "schemes.id", "steps.scheme_id" // attaching what scheme_id in steps is referencing from schemes.id
)
.select(
   "steps.id", // will display the id of the step
   "schemes.scheme_name", // will display scheme_name from schemes.js
   "steps.step_number", // will display step_number from steps.js
   "steps.instructions" // will display instructions from steps.js
)
.where({
   scheme_id: id 
})
}

function add(scheme) {
  return db("schemes").insert(scheme);
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
