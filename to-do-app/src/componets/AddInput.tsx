import { useState } from "react";
import { useTaskContext } from "../contexts/TaskContext";
import { v4 as uuidv4 } from "uuid";

export default function AddInput() {
  const { addTask } = useTaskContext();
  const [title, setTitle] = useState("");

  return (
    <div className="flex flex-row-reverse  justify-center w-[90%] m-auto sm:w-[70%] md:w-[60%] mb-5 gap-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        dir="rtl"
        className="bg-gray-50 border border-gray-300 text-sm rounded-lg
              focus:border-gray-400 focus:outline-none
             w-full p-2.5"
        placeholder="اضف المهمة"
        required
      />
      <button
        onClick={() => {
          if (title.trim()) {
            addTask({
              title,
              date: new Date().toISOString().slice(0, 10),
              id: uuidv4(),
              isDone: false,
            });
            setTitle("");
          }
        }}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm  px-5 py-2.5 text-center"
      >
        اضافة
      </button>
    </div>
  );
}
