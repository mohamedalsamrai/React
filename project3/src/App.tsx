import { useState } from 'react';
import './App.css'

function App() {
  const [items, setItems] = useState<string[]>(["Item 1", "Item 2", "Item 3"]);
  const [inputValue, setInputValue] = useState<string>("");
 
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (inputValue.trim() !== "") {
          setItems([...items, inputValue]);
          setInputValue("");
        }
      }}>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item} <button onClick={() => setItems(items.filter((_, i) => i !== index))}>Remove</button> <button onClick={() => setItems(items.map((i, idx) => idx === index ? `${i} (edited)` : i))}>Edit</button>
            </li>
          ))}
        </ul>
        <label htmlFor="new-item">Add Item:</label>
        <input
          type="text"
          id="new-item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
    </>
  )
}

export default App
