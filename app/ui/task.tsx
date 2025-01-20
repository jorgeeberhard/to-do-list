import { fetchTasks } from "@/app/lib/data";
import { deleteTask } from "../lib/actions";

export function Task({ task, id }: { task: string; id: string }) {
  const deleteTaskWithId = deleteTask.bind(null, id);
  return (
    <div className="p-2" id={id}>
      <input type="checkbox" className="mr-2" onChange={deleteTaskWithId} />
      <label>{task}</label>
    </div>
  );
}

export async function TaskWrapper() {
  const tasks = await fetchTasks();
  console.log(tasks);

  if (!tasks) {
    console.log("Task List dont exist");
    return <p>No Tasks Avaliable</p>;
  }

  if (tasks.length == 0) {
    console.log("Task List have no Length");
    return <p>No Tasks Avaliable</p>;
  }

  if (tasks.length > 0) {
    return (
      <>
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} task={task.description} />
        ))}
      </>
    );
  }
}
