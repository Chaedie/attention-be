const { getAllTodos, createTodo, updateTodo, deleteTodo } = require("./todo.dao");

class TodoService {
  async getTodos(page) {
    const pageSize = 10;
    const offset = (page - 1) * pageSize;

    const todos = await getAllTodos(offset, pageSize);
    return todos;
  }

  async createTodo(todo) {
    const todoItem = await createTodo(todo);

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
