import { fetchTasks } from "@/app/lib/data";
import { deleteTask } from "@/app/lib/actions";
import { MdClose } from "react-icons/md";
import { roboto } from "@/app/fonts";

export function Task({ task, id }: { task: string; id: string }) {
  const deleteTaskWithId = deleteTask.bind(null, id);
  return (
    <form className="my-5 shadow-md" id={id} action={deleteTaskWithId}>
      <div className="w-full p-2 bg-yellow-200">
        <button className="block" type="submit">
          <MdClose size={25} />
        </button>
      </div>

      <p className={`bg-yellow-100 px-3 py-5 ${roboto.className}`}>{task}</p>
    </form>
  );
}

export async function TaskWrapper() {
  const tasks = await fetchTasks();

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
