const { getAllTodos, createTodo, updateTodo, deleteTodo } = require("./todo.dao");

class TodoService {
  async getTodos(userId, page) {
    const pageSize = 10;
    const offset = (page - 1) * pageSize;

    const todos = await getAllTodos(userId, offset, pageSize);
    return todos;
  }

  async createTodo(userId, todo) {
    const todoItem = await createTodo(userId, todo);

    return todoItem;
  }

  async updateTodo(todo) {
    const todoItem = await updateTodo(todo);

    return todoItem;
  }

  async deleteTodo(todo) {
    const todoItem = await deleteTodo(todo);

    return todoItem;
  }
}

module.exports = TodoService;
