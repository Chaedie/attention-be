const { getAllTodos } = require("./todo.dao");

class TodoService {
  async getTodos(page) {
    const pageSize = 10;
    const offset = (page - 1) * pageSize;

    const todos = await getAllTodos(offset, pageSize);
    return todos;
  }
}

module.exports = TodoService;
