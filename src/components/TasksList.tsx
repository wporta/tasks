import { Task } from '../types';

interface Props {
  tasks: Task[];
}

function TasksList({ tasks }: Props) {
  return (
    <>
      <ul>
        {tasks.map((task: Task, idx: number) => (
          <li key={idx} className="flex text-[1.5rem] list-decimal">
            <p>{task.name}</p>
            <button className="text-[1rem] bg-white hover:bg-gray-100 text-gray-800 ml-2 px-4 border border-gray-400 rounded shadow">
              Mark Complete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TasksList;
