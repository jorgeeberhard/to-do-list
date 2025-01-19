import Search from "@/app/ui/search";
import { TaskWrapper } from "@/app/ui/task";

export default function Page() {
  return (
    <main className="col-start-2">
      <Search placeholder="Tarefa"></Search>
      <div className="grid grid-rows-subgrid gap-4">
        <div className="row-start-2">
          <TaskWrapper />
        </div>
      </div>
    </main>
  );
}
