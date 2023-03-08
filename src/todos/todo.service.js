const { getAllTodos, createTodo, updateTodo, deleteTodo } = require("./todo.dao");

class TodoService {
  async getTodos(user_id, page) {
    const pageSize = 10;
    const offset = (page - 1) * pageSize;

    const todos = await getAllTodos(user_id, offset, pageSize);
    return todos;
  }

  async createTodo(user_id, todo) {
    const todoItem = await createTodo(user_id, todo);

    return todoItem;
  }

  async updateTodo(todo_id, todo, isCompleted) {
    const todoItem = await updateTodo(todo_id, todo, isCompleted);

    return todoItem;
  }

  async deleteTodo(todo_id) {
    const todoItem = await deleteTodo(todo_id);

    return todoItem;
  }
}

module.exports = TodoService;
