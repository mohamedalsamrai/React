import { useState } from "react";
function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        info: "",
        isStudent: false,
        course: "",
        contact: ""
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
      <p>Your Info {formData.info}</p>
      <label className="mb-2 text-lg font-semibold">Enter additional info:</label>
      <textarea
        onChange={(e) => setFormData({ ...formData, info: e.target.value })}
        className="border border-gray-300 p-2 rounded mb-4 w-64"
        placeholder="Your Info"
      />
      <label className="mb-2 text-lg font-semibold">Are you a student?</label>
      <input
        type="checkbox"
        checked={formData.isStudent}
        onChange={(e) => setFormData({ ...formData, isStudent: e.target.checked })}
      />
      <select name="course" id="course" onChange={(e) => setFormData({ ...formData, course: e.target.value })}>
        <option value="">Select a course</option>
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue">Vue</option>
      </select>
      <div>
       <input type="radio" id="yes" name="contact" value="yes" checked={formData.contact === "yes"} onChange={(e) => setFormData({ ...formData, contact: e.target.value })} />
       <label htmlFor="yes">Yes</label>
       <input type="radio" id="no" name="contact" value="no" checked={formData.contact === "no"} onChange={(e) => setFormData({ ...formData, contact: e.target.value })} />
       <label htmlFor="no">No</label>
      </div>
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