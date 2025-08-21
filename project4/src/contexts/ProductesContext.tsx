import { createContext, useContext, useState } from "react";

        export const ProductesContext = createContext<{
    products: { id: number, name: string, price: number }[]
    setProducts: (products: { id: number, name: string, price: number }[]) => void
}>({
    products: [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ],  
    setProducts: () => {}
    })

export const useProductesContext = () => {
    const context = useContext(ProductesContext)
    if (!context) {
        throw new Error('useProductesContext must be used within a ProductesProvider')
    }
    return context
}

export const ProductesProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<{ id: number, name: string, price: number }[]>([
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ]);
    const value = { products, setProducts };
    return (
        <ProductesContext.Provider value={value}>
            {children}
        </ProductesContext.Provider>
    )}