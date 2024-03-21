"use client"
import { formatPrice } from "@/utils/formatPrice";
import { CartProductType } from "../product/[productId]/ProductDetail";
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import SetQuantity from "../components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";
import { useCallback } from "react";
import toast from "react-hot-toast";


interface ItemContentProps{
    item: CartProductType
}

const ItemContent:React.FC<ItemContentProps> = ({item}) => {
   
    const {handleRemoveProductFromCart, handleCartQtyIncrease, handleCartQtyDecrease} = useCart()
    const DeleteFromCart = ()=>{
        handleRemoveProductFromCart(item)
        toast.success("Se Eliminó del Carrito")
    }

    return ( 
        <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-slate-200 py-4 items-center">
            <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
                <Link href={`/product/${item.id}`}>
                    <div className="relative w-[70px] aspect-square">
                        <Image src={item.selectedImg.image} alt={item.name} fill className="object-contain"/>
                    </div>
                </Link>
                <div className="flex flex-col justify-between">
                    <Link  href={`/product/${item.id}`}>
                        {truncateText(item.name)}
                    </Link>
                    <div>{item.selectedImg.color}</div>
                    <div className="w-[70px]">
                        <button className="text-red-400 underline" onClick={DeleteFromCart}>Eliminar</button>
                    </div>
                </div>
            </div>
            <div className="justify-self-center">{formatPrice(item.price)}</div>
            <div className="justify-self-center">
                <SetQuantity cartCounter={true} cartProduct={item} handleQtyDecrease={()=>{handleCartQtyDecrease(item)}} handleQtyIncrease={()=>{handleCartQtyIncrease(item)}}/>
            </div>
            <div className="justify-self-end font-semibold">
                {formatPrice(item.price * item.quantity)}
            </div>
        </div>
     );
}
 
export default ItemContent;