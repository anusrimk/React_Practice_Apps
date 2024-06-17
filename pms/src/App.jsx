import { useEffect, useState } from 'react'
import Products from './pages/products/Products'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import CreateProduct from './pages/create-product/CreateProduct'
import NotFound from './pages/not-found/NotFound'
import './App.css'
import UpdateProducts from './pages/update-products/UpdateProducts'
import ViewProduct from './pages/view-product/ViewProduct'

function App() {
  //const [product, setProduct] = useState(0)

  return (
    <>
      {/* <CreateProduct/> */}
      {/* <Products/> */}
      <BrowserRouter>
        <Routes>
            <Route path='' element={<Products/>}/>
            <Route path= '/form' element={<CreateProduct/>}/>
            <Route path= '/products' element={<Products/>}/>
            <Route path= '/update/:id' element={<UpdateProducts/>}/>
            <Route path= '/view/:id' element={<ViewProduct/>}/>
            <Route path= '*' element={<NotFound/>}/>
        </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
