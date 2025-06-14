import { useState } from "react";
function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    
  return (
    <form className="flex flex-col items-center">
        <p>Your Name {formData.name}</p>
      <label className="mb-2 text-lg font-semibold">Enter your name:</label>
      <input
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        type="text"
        className="border border-gray-300 p-2 rounded mb-4 w-64"
        placeholder="Your Name"
      />
      <p>Your Email {formData.email}</p>
        <label className="mb-2 text-lg font-semibold">Enter your email:</label>
        <input
        type="email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="border border-gray-300 p-2 rounded mb-4 w-64"
        placeholder="Your Email"
        />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
export default Form;