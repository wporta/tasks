import { useState } from 'react';
import './App.css';
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
      <main>
        <h1>Task Manager</h1>
        <div>
          <NewTask addTaskHandler={addTaskHandler} />
        </div>
        <div>
          <TasksList tasks={tasks} />
        </div>
      </main>
    </>
  );
}

export default App;
