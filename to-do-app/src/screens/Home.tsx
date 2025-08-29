import { useState } from "react";
import AddInput from "../componets/AddInput";
import Card from "../componets/Card";
import { useTaskContext } from "../contexts/TaskContext";

function Home() {
  const { tasks } = useTaskContext();
  const [todosType, setTodosType] = useState<
    "all" | "completed" | "incomplete"
  >("all");
  const filteredTasks =
    todosType === "completed"
      ? tasks.filter((task) => task.isDone)
      : todosType === "incomplete"
      ? tasks.filter((task) => !task.isDone)
      : tasks;
  return (
    <>
      <div className="">
        <nav className="font-bold text-5xl text-gray-800 flex flex-col items-center gap-6">
          <h1>مهامي</h1>
          <div className="flex flex-row-reverse text-sm">
            <button
              className="bg-red-50 rounded-sm p-2 text-red-900 border border-gray-300"
              onClick={() => {
                setTodosType("all");
              }}
            >
              الكل
            </button>
            <button
              className="rounded-sm p-2 text-gray-500 border border-gray-300"
              onClick={() => {
                setTodosType("completed");
              }}
            >
              منجز
            </button>
            <button
              className="rounded-sm p-2 text-gray-500 border border-gray-300"
              onClick={() => {
                setTodosType("incomplete");
              }}
            >
              غير منجز
            </button>
          </div>
        </nav>
      </div>
      <div className="h-10"></div>
      <AddInput />
      <div className="flex flex-col justify-center gap-4 w-[90%] m-auto sm:w-[70%] md:w-[60%]">
        {filteredTasks.map((task) => (
          <Card
            key={task.id}
            title={task.title}
            dateDone={task.date}
            id={task.id}
            isDone={task.isDone}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
