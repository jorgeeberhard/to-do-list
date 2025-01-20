import { tasksList } from "@/app/lib/definitions";

export function Task({ task }: { task: string }) {
  return (
    <div className="p-2">
      <input type="checkbox" className="mr-2" />
      <label>{task}</label>
    </div>
  );
}

export function TaskWrapper() {
  if (!tasksList) {
    console.log("Task List dont exist");
    return <p>No Tasks Avaliable</p>;
  }

  if (tasksList.length == 0) {
    console.log("Task List have no Length");
    return <p>No Tasks Avaliable</p>;
  }

  if (tasksList.length > 0) {
    return (
      <>
        {tasksList.map((task, id) => (
          <Task key={id} task={task} />
        ))}
      </>
    );
  }
}
