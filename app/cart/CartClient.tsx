"use client"
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/products/Heading";



const CartClient = () => {

    const { cartProducts } = useCart()

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
                        <div key={item.id}>{item.name}</div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default CartClient;