import { Route } from "react-router-dom"
import Products from "./pages/products"
import Welcome from "./pages/welcome"

export function App () {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  )
}
