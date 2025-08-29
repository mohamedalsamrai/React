import { Route, Routes } from "react-router-dom";
import EditTask from "./screens/EditTask";
import { TaskProvider } from "./contexts/TaskContext";
import Home from "./screens/Home";

function App() {
  return (
    <>
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<EditTask />} />
        </Routes>
      </TaskProvider>
    </>
  );
}

export default App;
