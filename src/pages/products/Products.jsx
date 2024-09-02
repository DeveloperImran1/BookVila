import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import ProductCard from "./ProductCard";

const Products = () => {


    // fetch all products in db 
    const { isPending, refetch, data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/products")
            return res.json()
        }
    })
    console.log(products)

    if(isPending){
       return <div className="mt-[60px] mx-auto w-[100px] ">
        <div className=" w-12 h-12 "><div className="grid grid-cols-2 h-full w-full overflow-hidden shadow-lg rounded-full animate-spin"><span className="h-6 w-6 rounded-tl-full bg-transparent"></span><span className="h-6 w-6 rounded-tr-full bg-sky-500"></span><span className="h-6 w-6 rounded-bl-full bg-sky-500"></span><span className="h-6 w-6 rounded-br-full"></span></div></div>
       </div>

    }

    return (
        <div className="mt-[100px]">
            <SectionTitle title={"Our Products"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deleniti perferendis dolor architecto error molestias inventore. Quae mollitia id libero!"></SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {
                    products?.map((product, index) => { return <ProductCard key={index} product={product}></ProductCard> })
                }
            </div>
        </div>
    );
};

export default Products;