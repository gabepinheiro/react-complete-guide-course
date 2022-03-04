import { Navigate, Routes, Route } from "react-router-dom"
import { MainHeader } from './layout/main-header'
import Products from "./pages/products"
import Welcome from "./pages/welcome"
import ProductDetail from "./pages/product-detail"

export function App () {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' element={<Navigate replace to='/welcome' />} />
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path="new-user" element={<p>Welcome, new user!</p>} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  )
}
