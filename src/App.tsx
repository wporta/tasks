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
        <div>
          <NewTask addTaskHandler={addTaskHandler} />
        </div>
        <div className="mt-6 justify-center border flex flex-column">
          {tasks.length > 0 ? <TasksList tasks={tasks} /> : <p>No tasks in list</p>}
        </div>
      </main>

      <div className="gid grid-cols-3">
        <div className="col-start-2 border-red-900 border-2">
          <h1 className="text-3xl font-bold">Task Manager</h1>
        </div>
      </div>
    </>
  );
}

export default App;
