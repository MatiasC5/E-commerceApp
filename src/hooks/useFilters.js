import { useContext } from "react"
import { FiltersContext } from "../context/filters"

export const useFilters = () => {
    const { filters } = useContext(FiltersContext)

    const filterProducts = (products) => {
        return products.filter(product => {


            return (product.price >= filters.price) &&
                (filters.category === 'all' ||
                    filters.category === product.category) &&
                (product.title.toString().toLowerCase().includes(filters.title.toLowerCase()))
        }
        )
    }

    return {
        filterProducts
    }
}