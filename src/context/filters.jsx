import { createContext } from "react";
import { useState } from "react";

export const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {

    const [filters, setFilters] = useState({
        price: 0,
        category: 'all',
        title: ''
    })

    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
            {children}
        </FiltersContext.Provider>
    )
}