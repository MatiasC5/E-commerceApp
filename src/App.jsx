import { Cart } from "./components/Cart/Cart"
import { Filters } from "./components/Filters/Filters"
import { Products } from "./components/Products/Products"
import { CartProvider } from "./context/cart"

function App() {
  return (
    <main>
      <CartProvider>
        <Cart />
        <div>
          <Filters />
          <Products />
        </div>
      </CartProvider>
    </main>
  )
}

export default App
