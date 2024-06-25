import React, { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { ITodo } from './types';
import { fetchTodos } from './api';

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      const todos = await fetchTodos();
      setTodos(todos);
    };

    loadTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
