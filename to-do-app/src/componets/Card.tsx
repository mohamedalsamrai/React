import type { JSX } from "react";
import { useTaskContext } from "../contexts/TaskContext";
import { Link } from "react-router-dom";

export default function Card({
  title,
  dateDone,
  id,
  isDone,
}: {
  title: string;
  dateDone: string;
  id: string;
  isDone: boolean;
}): JSX.Element {
  const { updateTask, deleteTask } = useTaskContext();
  return (
    <>
      <div className="flex flex-row-reverse justify-between w-full bg-blue-900 p-4 rounded-lg items-center">
        <div className="flex flex-col text-white items-end">
          <h1 className="font-bold text-2xl">{title}</h1>
          <h3 className="text-gray-200">{dateDone}</h3>
          <p className="text-gray-400">{isDone ? "منجز" : "غير منجز"}</p>
        </div>
        <div className="flex flex-row-reverse gap-2.5 h-10">
          <button
            className="bg-green-500 text-white p-2 rounded"
            onClick={() =>
              updateTask(id, { id, title, date: dateDone, isDone: true })
            }
          >
            اكمال
          </button>
          <button className="bg-blue-500 text-white p-2 rounded">
            <Link to={`/edit/${id}`}>تعديل</Link>
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded"
            onClick={() => deleteTask(id)}
          >
            حذف
          </button>
        </div>
      </div>
    </>
  );
}
