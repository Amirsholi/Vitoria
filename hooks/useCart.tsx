import { CartProductType } from "@/app/product/[productId]/ProductDetail";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

type CartContextType = {
    cartTotalQty: number;
    cartProducts: CartProductType[] | null;
    cartTotalAmount: number;
    handleAddProductToCart: (product: CartProductType) => void
    handleRemoveProductFromCart: (product: CartProductType) => void
    handleCartQtyIncrease: (product: CartProductType) => void
    handleCartQtyDecrease: (product: CartProductType) => void
    handleClearCart: () => void
}


interface Props{
    [propName: string]: any;
}


export const CartContext = createContext<CartContextType | null>(null)



export const CartContextProvider = (props: Props) =>{

    const [cartTotalQty, setCartTotalQty] = useState(0)

    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null)

    const [cartTotalAmount, setCartTotalAmount] = useState(0)

    useEffect(()=>{
        const cartItems: any = localStorage.getItem("VitoriaCartItems")
        const cProducts: CartProductType[] | null = JSON.parse(cartItems)
        setCartProducts(cProducts)
    },[])


    useEffect(() => {
            const getTotals = () =>{
                if(cartProducts){
                    const {total, qty} = cartProducts?.reduce((acc, item) => {
                        const itemTotal = item.price * item.quantity
        
                        acc.total += itemTotal
                        acc.qty += item.quantity
                        return acc
                    },{
                        total:0,
                        qty:0
                    })
                    setCartTotalQty(qty)
                    setCartTotalAmount(total)
                }
            }
        
        getTotals()
    },[cartProducts])

    const handleAddProductToCart = useCallback((product: CartProductType)=>{

        setCartProducts((prev)=>{

           let updatedCart

           if(prev){
            updatedCart = [...prev, product]
           }else{
            updatedCart = [product]
           }

           localStorage.setItem("VitoriaCartItems", JSON.stringify(updatedCart))

           return updatedCart
        })
    },[])

    const handleRemoveProductFromCart = useCallback((product: CartProductType) => {

        if(cartProducts){
            setCartProducts(prevProducts => {
                if (!prevProducts) {
                    return prevProducts;
                }
                const filteredProducts = prevProducts.filter((item) => item.id !== product.id);
                localStorage.setItem("VitoriaCartItems", JSON.stringify(filteredProducts));
                return filteredProducts;
            })
        }
    },[cartProducts, setCartProducts])


    const handleCartQtyIncrease = useCallback((product: CartProductType) => {
        let updatedCart
        if(product.quantity === 5){
            toast.error("Oops!")
            return
        }
        if(cartProducts){
            updatedCart = [...cartProducts]
            const existingIndex = cartProducts.findIndex((item)=> item.id === product.id)
            if(existingIndex > -1){
                updatedCart[existingIndex].quantity = ++ updatedCart[existingIndex].quantity
            }
            setCartProducts(updatedCart)
            localStorage.setItem("VitoriaCartItems", JSON.stringify(updatedCart))
        }
    },[cartProducts])

    const handleCartQtyDecrease = useCallback((product: CartProductType) => {
        let updatedCart
        if(product.quantity === 1){
            toast.error("Oops!")
            return
        }
        if(cartProducts){
            updatedCart = [...cartProducts]
            const existingIndex = cartProducts.findIndex((item)=> item.id === product.id)
            if(existingIndex > -1){
                updatedCart[existingIndex].quantity = -- updatedCart[existingIndex].quantity
            }
            setCartProducts(updatedCart)
            localStorage.setItem("VitoriaCartItems", JSON.stringify(updatedCart))
        }
    },[cartProducts])

    const handleClearCart = useCallback(()=>{
        setCartProducts(null)
        setCartTotalQty(0)
        localStorage.setItem("VitoriaCartItems", JSON.stringify(null))

    },[cartProducts])

    const value ={
       cartTotalQty,
       cartProducts,
       cartTotalAmount,
       handleAddProductToCart,
       handleRemoveProductFromCart,
       handleCartQtyDecrease,
       handleCartQtyIncrease,
       handleClearCart
    }

    return <CartContext.Provider value={value} {...props}/>
}

export const useCart = () =>{
    const context = useContext(CartContext)
    if(context === null){
        throw new Error("useCart must be used eithin a CartContextProvider")
    }
    return context
}