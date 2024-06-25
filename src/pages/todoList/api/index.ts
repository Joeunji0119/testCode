import { ITodo } from '../types';

let todos: ITodo[] = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Learn TypeScript', completed: false },
];

export const fetchTodos = async (): Promise<ITodo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(todos);
    }, 500);
  });
};

export const addTodo = async (text: string): Promise<ITodo> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newTodo = { id: Date.now(), text, completed: false };
      todos.push(newTodo);
      resolve(newTodo);
    }, 500);
  });
};
