import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const productIndex = cart.findIndex(item => item.id === product.id)
        if (productIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productIndex].quantity += 1
            return setCart(newCart)
        }

        setCart((prevState) => {
            return [...prevState,
            {
                ...product,
                quantity: 1
            }
            ]
        })
    }

    return (
        <CartContext.Provider value={{ addToCart, cart }} >
            {children}
        </CartContext.Provider>
    )
}
