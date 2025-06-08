import { useState } from "react";

function Button({ label }: { label: string }) {
  const [counter, setCounter] = useState(0);

  return (
    <button
       className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 transition font-semibold text-lg"

      onClick={() => setCounter(counter + 1)}
    >
      {label}{counter}
    </button>
  );
}


export default Button;