import "./App.css";
import ListItems from "./ListItems";

function App() {
  return (
    <>
    <div className="container mx-auto p-4 flex justify-center">
      <ListItems items={["Item 1", "Item 2", "Item 3"]} />
    </div>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">Welcome to Project 2</h1>
        <p className="mt-4 text-lg">This is a simple React application using Tailwind CSS.</p>
        <p className="mt-2 text-sm text-gray-500">Enjoy building your project!</p>
      </div>
    </>
  );
}

export default App;
