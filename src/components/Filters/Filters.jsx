import { useContext } from "react";
import { FiltersContext } from "../../context/filters";
import './Filters.css'

export const Filters = () => {
    const { filters, setFilters } = useContext(FiltersContext)


    const handleMinPrice = (e) => {
        setFilters({
            price: e.target.value,
            category: filters.category,
            title: filters.title,
        })
    }

    const handleCategory = (e) => {
        setFilters({
            price: filters.price,
            category: e.target.value,
            title: filters.title,
        })
    }

    const handleTitle = (e) => {
        setFilters({
            price: filters.price,
            category: filters.category,
            title: e.target.value,
        })
    }

    return (
        <section className="mb-5 justify-content-around">
            <div className="price-range">
                <input type="range" min='0' max='1000' value={filters.price} onChange={handleMinPrice} />
                <span>{filters.price}</span>
            </div>
            <div className="search">
                <input type="text" onChange={handleTitle} value={filters.title} placeholder="Search..." className="search-product" />
            </div>

            <select onChange={handleCategory} className="product-category">
                <option value="all">All</option>
                <option value="men's clothing">Men`s Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women`s Clothing</option>
            </select>
        </section>
    )
}