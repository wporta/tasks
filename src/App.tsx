import { useState } from 'react';
import NewTask from './components/NewTask';
import TasksList from './components/TasksList';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTaskHandler = (task: Task) => {
    tasks.push(task);
    setTasks([...tasks]);
  };

  return (
    <>
      <main className="w-[80%] mx-auto">
        <div className="flex justify-center w-full">
          <h1 className="text-3xl font-bold m-5">Task Manager</h1>
        </div>
        <div>
          <NewTask addTaskHandler={addTaskHandler} />
        </div>
        <div className="text-2xl border-2 border-slate-200">
          <div className="flex justify-center text-2xl">Tasks List</div>
          <div className="flex m-4 px-5">
            {tasks.length > 0 ? <TasksList tasks={tasks} /> : <p>No tasks in list</p>}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
