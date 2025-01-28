import Search from "@/app/ui/home/search";
import { TaskWrapper } from "@/app/ui/home/task";
import Header from "@/app/ui/home/header";

export default function Page() {
  return (
    <main className="flex justify-center items-center flex-col p-10">
      <div className="lg:w-2/3">
        <div className="flex flex-col">
          <Header title="To-do List"></Header>
          <Search placeholder="Task description"></Search>
          <div className="grid grid-rows-subgrid gap-4">
            <div className="row-start-2">
              <TaskWrapper />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
