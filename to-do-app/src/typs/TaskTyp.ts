export type Task = {
    title: string;
    date: string;
    id: string;
    isDone: boolean;
}
export type TaskContextType = {
    tasks: Task[];
    addTask: (task: Task) => void;
    updateTask: (id: string, updatedTask: Task) => void;
    deleteTask: (id: string) => void;
};