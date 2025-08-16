import {  useState } from 'react';
import './App.css'

function App() {
const [user,setUser]=useState({
  name: "",
  phone: "",
  age: 0,
  isEmployed: false,
  salary: 0

})

// Check if all required fields are filled
const isFormValid = user.name.trim() !== "" && 
                   user.phone.trim() !== "" && 
                   user.age > 0 && 
                   user.salary > 0;
 
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background)' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (isFormValid) {
            alert('Form submitted successfully!');
            setUser({
              name: "",
              phone: "",
              age: 0,
              isEmployed: false,
              salary: 0,
            });
          }
        }}

      >
        <div className="form-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            id="name"
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            placeholder="Phone"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            id="phone"
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            placeholder="Age"
            value={user.age}
            onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}
            id="age"
          />
          <label htmlFor="isEmployed" className="checkbox-label">
            <input
              type="checkbox"
              checked={user.isEmployed}
              onChange={(e) => setUser({ ...user, isEmployed: e.target.checked })}
              id="isEmployed"
            />
            Are you employed?
          </label>
          <label htmlFor="salary">Salary</label>
          <select
            name="salary"
            id="salary"
            value={user.salary}
            onChange={(e) => setUser({ ...user, salary: Number(e.target.value) })}
          >
            <option value="0">0</option>
            <option value="10000">10,000</option>
            <option value="20000">20,000</option>
            <option value="30000">30,000</option>
            <option value="40000">40,000</option>
            <option value="50000">50,000</option>
          </select>
        </div>
        <button type="submit" disabled={!isFormValid}>Submit</button>
      </form>
    </div>
  )
}

export default App
