"use client"
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/products/Heading";
import Button from "../components/products/Button";
import ItemContent from "./ItemContent";
import { formatPrice } from "@/utils/formatPrice";



const CartClient = () => {

    const { cartProducts, handleClearCart, cartTotalAmount } = useCart()

    if(!cartProducts || cartProducts.length === 0){
        return(
            <div className="flex flex-col items-center">
                <div className="text-2xl">No hay productos en el carrito</div>
                <div>
                    <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
                        <MdArrowBack/>
                        <span>Ir a la Tienda</span>
                    </Link>
                </div>
            </div>
        )
    }

    return ( 
        <div>
            <Heading title="Carrito" center/>
            <div className="mt-8 grid grid-cols-5 text-xs gap-4 pb-2 items-center">
                 <div className="col-span-2 justify-self-start">Producto</div>
                 <div className="justify-self-center">Precio</div>
                 <div className="justify-self-center">Cantidad</div>
                 <div className="justify-self-end">Total</div>
            </div>
            <div>
                {cartProducts && cartProducts.map((item) => {
                    return(
                        <ItemContent key={item.id} item={item}/>
                    )
                })}
            </div>
            <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
                <div className="w-[90px]">
                    <Button label="Vaciar Carrito" onClick={()=>{handleClearCart(   )}} small outline/>
                </div>
                <div className="text-sm flex flex-col gap-1 items-start">
                    <div className="flex justify-between w-full text-base font-semibold">
                        <span>Subtotal</span>
                        <span>{formatPrice(cartTotalAmount)}</span>
                    </div>
                    <p className="text-slate-500">Impuestos y envío calculados al finalizar la compra</p>
                    <Button label="Checkout" onClick={()=>{}}/>
                    <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
                        <MdArrowBack/>
                        <span>Volver a la Tienda</span>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default CartClient;