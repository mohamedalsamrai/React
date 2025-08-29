import type { JSX } from "react";
import { useTaskContext } from "../contexts/TaskContext";
import type { Task } from "../typs/TaskTyp";
import { useParams, useNavigate } from "react-router-dom";

export default function EditTask(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask } = useTaskContext();
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-red-500"> Task not found</p>
      </div>
    );
  }

  const handleUpdate = (updatedTask: Partial<Task>) => {
    if (id) {
      updateTask(id, { ...task, ...updatedTask });
    }
  };

  const handleDone = () => {
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Task</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Title
        </label>
        <input
          type="text"
          value={task.title}
          onChange={(e) => handleUpdate({ title: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handleDone}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md transition"
        >
          Done
        </button>
      </div>
    </div>
  );
}
