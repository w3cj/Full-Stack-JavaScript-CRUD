function validTodo(todo) {
  return typeof todo.title == 'string' &&
          todo.title.trim() != '' &&
          typeof todo.priority != 'undefined' &&
          !isNaN(Number(todo.priority));
}

function validId(id) {
  return !isNaN(id);
}

module.exports = {
  validTodo,
  validId
};
