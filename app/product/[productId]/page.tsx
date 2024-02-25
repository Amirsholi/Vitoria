import Container from "@/app/components/container";
import {product} from "@/utils/product"
import ProductDetails from "./ProductDetail";
import ListRating from "./ListRating";

interface IParams {
    productId?: string
}

const Product = ({params} : {params: IParams}) => {
    console.log("params", params);
    product
    return ( 
        <div className="p-6">
            <Container>
                <ProductDetails product = {product}/>
                <div>
                    <div className="flex flex-col mt-20 gap-4">Add Rating</div>
                    <ListRating product={product}/>
                </div>
            </Container>
        </div>
     );
}
 
export default Product;