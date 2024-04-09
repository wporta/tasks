import { useState } from 'react';
import { Task } from '../types';

interface Props {
  addTaskHandler: ({ name, completed }: Task) => void;
}

function NewTask({ addTaskHandler }: Props) {
  const [task, setTask] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const addNewTask = () => {
    addTaskHandler({
      name: task,
      completed: true,
    });
    setTask('');
  };
  return (
    <>
      <div className="flex flex-row m-5">
        <p className="text-2xl px-2">New Task:</p>
        <input
          className="border-2 border-violet-200 mr-2"
          type="text"
          onChange={handleChange}
          value={task}
        />
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow"
          onClick={addNewTask}>
          Add Task
        </button>
      </div>
    </>
  );
}

export default NewTask;
