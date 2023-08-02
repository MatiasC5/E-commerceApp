import { useState } from "react"
import { useFilters } from "../../hooks/useFilters"
import { AddToCartIcon } from "../../../public/icons/Icons"
import './Products.css'
import { useCart } from "../../hooks/useCart"

export const Products = () => {
    const [products, setProducts] = useState([])
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => (
            setProducts(data)
        )
        )
    const { filterProducts } = useFilters()
    const filteredProducts = filterProducts(products)
    const { addToCart } = useCart()

    return (
        <ul>
            {
                filteredProducts.map(product => (
                    <div key={product.id} className="product">
                        <li >
                            <img src={product.image} alt={product.title} />
                            <strong className="product-title">{product.title}</strong>
                            ${product.price}
                            <button
                                onClick={() => addToCart(product)}
                            ><AddToCartIcon /></button>
                        </li>
                    </div>

                ))
            }
        </ul>

    )
}
