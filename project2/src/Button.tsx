import { useState } from "react";

function Button({ label }: { label: string }) {
  const [counter, setCounter] = useState(0);

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer font-bold"
      onClick={() => setCounter(counter + 1)}
    >
      {label}{counter}
    </button>
  );
}

export default Button;