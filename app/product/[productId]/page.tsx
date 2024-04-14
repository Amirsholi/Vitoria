import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";

import getProductById from "@/actions/getProductById";
import NullData from "@/app/components/NullData";
import AddRating from "./AddRating";
import getCurrentUser from "@/actions/getCurrentUser";

interface IPrams {
  productId?: string;
}

const Product = async({ params }: { params: IPrams }) => {

  const product = await getProductById(params)
  const user = await getCurrentUser()

  if(!product) return <NullData title="Oops! O produto não existe"/>

  return (
    <div className="p-8 mt-14">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col gap-4 mt-32">
          <AddRating product={product} user={user}/>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
