import Search from "@/app/ui/list/search";
import { TaskWrapper } from "@/app/ui/list/task";
import Header from "@/app/ui/header";
import SignOut from "@/app/ui/list/signoutButton";

export default function Page() {
  return (
    <main className="flex justify-center items-center flex-col p-10">
      <div className="lg:w-2/3">
        <div className="flex flex-col">
          <SignOut />
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
