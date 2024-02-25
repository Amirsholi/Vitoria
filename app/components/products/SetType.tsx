"use client"

import { CartProductType, selectedImgType } from "@/app/product/[productId]/ProductDetail";

interface SetTypeProps{
    images: selectedImgType[],
    CartProduct: CartProductType,
    handTypeSelect:(value: selectedImgType) => void
}

const SetType: React.FC<SetTypeProps> = ({images, CartProduct,handTypeSelect}) => {
    return ( 
        <div>
            <div className="flex gap-4 items-center">
                <span className="font-semibold">SABOR:</span>
                <div className="flex gap-1">
                {images.map((image) => {
                    return (
                    <div key={image.color} onClick={() => handTypeSelect(image)} 
                    className={`h-7 w-7 rounded-full border-teal-300 flex items-center justify-center 
                    ${CartProduct.selectedImg.color === image.color ? "border-[1.5px]" : "border-none"}`}>
                        <div style={{background: image.color}} className="h-5 w-5 rounded-full border-[1.2px] border-slate-300"></div>
                    </div>
                    )
                })}
                </div>
            </div>
        </div>
     );
}
 
export default SetType;