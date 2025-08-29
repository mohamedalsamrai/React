/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import type { TaskContextType } from "../typs/TaskTyp";
import type { Task } from "../typs/TaskTyp";

const TaskContext = createContext<TaskContextType | undefined>(undefined);
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const raw = localStorage.getItem("tasks");
      return raw ? (JSON.parse(raw) as Task[]) : [];
    } catch {
      return [];
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const updateTask = (id: string, updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? updatedTask : task))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const taskType = { tasks, addTask, updateTask, deleteTask };
  return (
    <TaskContext.Provider value={taskType}>{children}</TaskContext.Provider>
  );
};
