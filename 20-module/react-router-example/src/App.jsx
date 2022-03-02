import { Route } from "react-router-dom"
import { MainHeader } from './layout/main-header'
import Products from "./pages/products"
import Welcome from "./pages/welcome"

export function App () {
  return (
    <div>
      <MainHeader />
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  )
}
