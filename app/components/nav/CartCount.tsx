"use client"
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";

const CartCount = () => {
    const { cartTotalQty } = useCart()
    const router = useRouter()

    return ( 
        <div className="relative cursor-pointer" onClick={() => router.push("/cart")}>
            <div className="text-3xl">
                <IoCartOutline />
            </div>
            {cartTotalQty > 0 ? <span className="absolute top-[-10px] 
            left-[17px] bg-slate-700 text-white 
            h-5 w-5 rounded-full flex items-center justify-center 
            text-sm">{cartTotalQty}</span> : <></> }
            
        </div>
     );
}
 
export default CartCount;