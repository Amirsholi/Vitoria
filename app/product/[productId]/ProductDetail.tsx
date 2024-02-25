"use client"

import Button from "@/app/components/products/Button";
import ProductImage from "@/app/components/products/ProductImage";
import SetQuantity from "@/app/components/products/SetQuantity";
import SetType from "@/app/components/products/SetType";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";


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
        console.log("increase")
        if(cartProduct.quantity === 10){
            return;
        }
        setCartProduct((prev) => {
            const newQuantity = prev.quantity + 1;
            return { ...prev, quantity: newQuantity };
          })
    }, [cartProduct])

    const handleQtyDecrease = useCallback(() => {
        console.log("decrease")

        if(cartProduct.quantity === 1){
            return; 
        }
        setCartProduct((prev) => {
            const newQuantity = prev.quantity - 1;
            return { ...prev, quantity: newQuantity };
          })
    }, [cartProduct])



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
                <div>
                    <span className="font-semibold">CATEGORY: </span>{product.category}
                </div>
                <div>
                    <span className="font-semibold">BRAND: </span>{product.brand}
                </div>
                <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
                    {product.inStock ? "In stock" : "Out Stock"}
                </div>
                <Horizontal/>
                <div><SetType CartProduct={cartProduct} images={product.images} handTypeSelect={handleColorSelected}/></div>
                <Horizontal/>
                <SetQuantity cartProduct={cartProduct} handleQtyIncrease={handleQtyIncrease} handleQtyDecrease={handleQtyDecrease}/>
                <Horizontal/>
                <div className="max-w-[300px]">
                <Button label="Add to Cart" onClick={() => {}}/>
                </div>
            </div>
        </div>
     );
}
 
export default ProductDetails;