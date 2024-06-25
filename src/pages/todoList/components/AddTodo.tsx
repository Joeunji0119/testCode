import React, { useState } from 'react';
import { addTodo } from '../api';
import { ITodo } from '../types';

const AddTodo = ({ setTodos }: { setTodos: React.Dispatch<React.SetStateAction<ITodo[]>> }) => {
  const [text, setText] = useState('');

  const handleAdd = async () => {
    await addTodo(text);
    setText('');
    setTodos((prev) => [
      ...prev,
      {
        id: Math.random(),
        text: text,
        completed: false,
      },
    ]);
  };

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
