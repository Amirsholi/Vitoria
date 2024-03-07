import Container from "@/app/components/container";
import ProductDetails from "./ProductDetail";
import ListRating from "./ListRating";
import { products } from "@/utils/products";

interface IParams {
    productId?: string
}

const Product = ({params} : {params: IParams}) => {

    const product = products.find((item) => item.id === params.productId)
    
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