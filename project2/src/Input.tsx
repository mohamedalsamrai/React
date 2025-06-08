import{ useState } from "react";
function Input() {
const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <h1>Input {inputValue}</h1>
      <input
        type="text"
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default Input;