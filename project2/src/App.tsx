import "./App.css";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";

function App() {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">Welcome to Project 2</h1>
        <Button label="Count " />

        <Input />
        <Form />
      </div>
    </>
  );
}

export default App;
