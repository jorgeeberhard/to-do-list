"use client";

import { deleteTask } from "@/app/lib/actions";
import { MdClose } from "react-icons/md";
import { roboto } from "@/app/fonts";
import { useActionState, useState, useEffect } from "react";
import type { Session } from "next-auth";
import { TaskContents } from "@/app/lib/definitions";

export function Task({ task, id }: { task: string; id: string }) {
  const deleteTaskWithId = deleteTask.bind(null, id);
  const [data, deleteTaskAction] = useActionState(deleteTaskWithId, undefined);

  return (
    <form className="my-5 shadow-md" id={id} action={deleteTaskAction}>
      <div className="w-full p-2 bg-yellow-200">
        <button className="block" type="submit">
          <MdClose size={25} />
        </button>
      </div>
      <p className={`bg-yellow-100 px-3 py-5 ${roboto.className}`}>{task}</p>
      <p>{data ? data : ""}</p>
    </form>
  );
}

export function TaskWrapper({ session }: { session: Session }) {
  const [data, setData] = useState(Array<TaskContents>);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "/api/tasks?" +
        new URLSearchParams({
          userId: session.user?.id ? session.user?.id : "",
        })
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.tasks);
        setLoading(false);
      });
  }, [session]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No Tasks</p>;

  if (data.length > 0) {
    return (
      <>
        {data.map((task) => (
          <Task key={task.id} id={task.id} task={task.description} />
        ))}
      </>
    );
  }

  // if (session) return <p>{session.user?.id}</p>;

  // if ("isLoading") {
  //   return (
  //     <>
  //       <p>Loading...</p>
  //     </>
  //   );
  // }

  // if (!tasks) {
  //   console.log("Task List dont exist");
  //   return <p>No Tasks Avaliable</p>;
  // }

  // if (tasks.length == 0) {
  //   console.log("Task List have no Length");
  //   return <p>No Tasks Avaliable</p>;
  // }

  // if (tasks.length > 0) {
  //   return (
  //     <>
  //       {tasks.map((task) => (
  //         <Task key={task.id} id={task.id} task={task.description} />
  //       ))}
  //     </>
  //   );
  // }
}
