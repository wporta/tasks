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
      <section>
        New Task:
        <input type="text" onChange={handleChange} value={task} />
        <button onClick={addNewTask}>Add Task</button>
      </section>
    </>
  );
}

export default NewTask;
