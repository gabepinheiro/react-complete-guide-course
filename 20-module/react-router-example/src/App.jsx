import { Route, Switch } from "react-router-dom"
import { MainHeader } from './layout/main-header'
import Products from "./pages/products"
import Welcome from "./pages/welcome"
import ProductDetail from "./pages/product-detail"

export function App () {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  )
}
