import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom'
import { ProductesProvider, useProductesContext } from './contexts/ProductesContext'

function App() {

  return (
    <ProductesProvider>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      </ProductesProvider>
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

function Products() {
  const { products, setProducts } = useProductesContext()
  
  const addProduct = () => {
    const newId = Math.max(...products.map(p => p.id)) + 1
    const newProduct = { 
      id: newId, 
      name: `Product ${newId}`, 
      price: newId * 100 
    }
    setProducts([...products, newProduct])
  }

  return (
    <div>
      <h1>Products</h1>
      <button className='bg-blue-500 text-white p-2 rounded-md m-2' onClick={addProduct}>
        Add Product
      </button>
      {products.map((product , index) => (
        <button className='bg-blue-500 text-white p-2 rounded-md m-2' key={index}>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </button>
      ))}
      <Outlet />
    </div>
  )
}

function Product() {
  const { id } = useParams()
  return (
    <div>
      <h1>Product {id}</h1>
      <button className='bg-blue-500 text-white p-2 rounded-md m-2'>
        <Link to="/products">Back to Products</Link>
      </button>
    </div>
  )
}


  export default App
