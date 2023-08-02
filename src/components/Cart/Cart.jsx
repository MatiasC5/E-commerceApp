import { useId } from 'react'
import { CartIcon } from '../../../public/icons/Icons'
import { useCart } from '../../hooks/useCart'
import './Cart.css'

export const Cart = () => {
    const cartLabelId = useId()
    const { cart } = useCart()

    return (
        <>
            <label htmlFor={cartLabelId} className='cart-icon'>
                <CartIcon />
            </label>
            <input type="checkbox" id={cartLabelId} hidden />

            <aside className='cart'>
                <ul>
                    {
                        cart.map(product => (
                            <li key={product.id}>
                                <img src={product.image} alt={product.title} />
                                <strong className="product-title">{product.title}</strong>
                                <div className='cart-price'>${product.price}</div>
                                <button>+</button>
                            </li>
                        ))
                    }
                </ul>
            </aside>
        </>
    )
}