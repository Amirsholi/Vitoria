"use client"

import Button from "@/app/components/products/Button";
import ProductImage from "@/app/components/products/ProductImage";
import SetQuantity from "@/app/components/products/SetQuantity";
import SetType from "@/app/components/products/SetType";
import { useCart } from "@/hooks/useCart";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdCheckCircle } from "react-icons/md";


export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    brand: string,
    selectedImg: selectedImgType,
    quantity: number,
    price: number
}

export type selectedImgType = {
    color: string,
    colorCode: string,
    image: string
}


interface ProductDetailsProps{
    product: any
}



const Horizontal = () =>{
    return(
        <hr className="w-[30%] my-2"/>
    )
}



const ProductDetails:React.FC<ProductDetailsProps> = ({product}) => {
    
    const router = useRouter()

    const [isProductInCart, setIsProductInCart] = useState(false)

    const {handleAddProductToCart, cartProducts} = useCart()

    const AddToCart = useCallback(() => {
        handleAddProductToCart(cartProduct)
        toast.success("Se agregó al Carrito")
    },[])

    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImg: {...product.images[0]},
        quantity: 1,
        price: product.price
    })

    const handleColorSelected = useCallback((value: selectedImgType) => {
        setCartProduct((prev) => {return {...prev, selectedImg: value}})
    },
    [cartProduct.selectedImg])
    

    const productRating = product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / product.reviews.length;


    const handleQtyIncrease = useCallback(() => {

        if(cartProduct.quantity === 10){
            return;
        }
        setCartProduct((prev) => {
            const newQuantity = prev.quantity + 1;
            return { ...prev, quantity: newQuantity };
          })
    }, [cartProduct])

    const handleQtyDecrease = useCallback(() => {

        if(cartProduct.quantity === 1){
            return; 
        }
        setCartProduct((prev) => {
            const newQuantity = prev.quantity - 1;
            return { ...prev, quantity: newQuantity };
          })
    }, [cartProduct])

    useEffect(()=>{

        setIsProductInCart(false)
        if(cartProducts){
            const existingIndex = cartProducts.findIndex((item)=> item.id === product.id)
            if(existingIndex > -1){
                setIsProductInCart(true)
            }
        }

    },[cartProducts])


    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductImage cartProduct={cartProduct} product={product} handleColorSelect={handleColorSelected}/>
            <div className="flex flex-col gap-1 text-slate-500 text-sm">
                <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
                <div className="flex items-center gap-2">
                    <Rating value={productRating} readOnly/>
                    <div>{product.reviews.length} reviews</div>
                </div>
                <Horizontal/>
                <div className="text-justify">
                    {product.description}
                </div>
                <Horizontal/>
                <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
                    {product.inStock ? "En Stock" : "Sin Stock"}
                </div>
                <div className="flex gap-2">
                    <div>
                        <span className="font-semibold">Producto: </span>{product.category}
                    </div>
                    <div>
                        <span className="font-semibold">Brand: </span>{product.brand}
                    </div>
                </div>
                <Horizontal/>
                {isProductInCart ? (
                <>
                <p className="mb-2 text-slate-500 flex items-center gap-1">
                    <MdCheckCircle size={20} className="text-teal-400"/>
                    <span>De agregó Carrito</span>
                </p>
                <div>
                    <Button label="Carrito" outline onClick={()=>{router.push("/cart")}}/>
                </div>
                </>
                ) : (
                <>
                <SetType CartProduct={cartProduct} images={product.images} handTypeSelect={handleColorSelected}/>
                <Horizontal/>
                <SetQuantity cartProduct={cartProduct} handleQtyIncrease={handleQtyIncrease} handleQtyDecrease={handleQtyDecrease}/>
                <Horizontal/>
                <div className="max-w-[300px]">
                <Button label="Add to Cart" onClick={AddToCart}/>
                </div>
                </>
                )}
            </div>
        </div>
     );
}
 
export default ProductDetails;