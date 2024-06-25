import React from 'react';
import { ITodo } from '../types';

import TodoItem from './TodoItem';

const TodoList = ({ todos }: { todos: ITodo[] }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
