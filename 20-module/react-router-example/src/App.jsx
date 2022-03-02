import { Route } from "react-router-dom"
import { MainHeader } from './layout/main-header'
import Products from "./pages/products"
import Welcome from "./pages/welcome"
import ProductDetail from "./pages/product-detail"

export function App () {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product-detail/:productId">
          <ProductDetail />
        </Route>
      </main>
    </div>
  )
}
