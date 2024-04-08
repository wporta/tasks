import { Task } from '../types';

interface Props {
  tasks: Task[];
}

function TasksList({ tasks }: Props) {
  return (
    <>
      <div>TasksList</div>
      <ul>
        {tasks.map((task: Task, idx: number) => (
          <li key={idx}>{task.name}</li>
        ))}
      </ul>
    </>
  );
}

export default TasksList;
