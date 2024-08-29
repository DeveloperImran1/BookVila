import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import ProductCard from "./ProductCard";

const Products = () => {

    const allProducts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14]
    return (
        <div>
            <SectionTitle></SectionTitle>
   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
   {
        allProducts.slice(0, 11)?.map((product, index) => {return <ProductCard key={index}></ProductCard>})
      }
   </div>
        </div>
    );
};

export default Products;