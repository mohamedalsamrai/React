import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> 
    </Routes>
  )
}



function Home() {
  return (
    <div>
      <nav className='flex justify-center'>
        <button className='bg-blue-500 text-white p-2 rounded-md m-2'>  
          <Link to="/">Home</Link>
        </button>
        <button className='bg-blue-500 text-white p-2 rounded-md m-2'>
          <Link to="/about">About</Link>
        </button>
        <button className='bg-blue-500 text-white p-2 rounded-md m-2'>
          <Link to="/contact">Contact</Link>  
        </button>
      </nav>
      <h1>Home</h1>
    </div>
  )
}

function About() {
  return <h1>About</h1>
}

function Contact() {
  return <h1>Contact</h1>
}

export default App
