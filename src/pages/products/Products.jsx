import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import ProductCard from "./ProductCard";
import FeaturedBooks from "../../components/FeaturedBooks";
import RecentlyBooks from "../../components/RecentlyBooks";
import BudgetFriendlyBooks from "../../components/BudgetFriendlyBooks";

const Products = () => {

    const products = [
        {
            _id: "1",
            category: "Electronics",
            color: "Black",
            description: "High-quality wireless headphones with noise cancellation.",
            image: "https://www.shutterstock.com/image-vector/3d-wireless-headphones-mockup-set-260nw-2130630635.jpg",
            offer: 20,
            price: 79.99,
            title: "Wireless Headphones",
            totalAvailable: 30,
        },
        {
            _id: "2",
            category: "Home Appliances",
            color: "Silver",
            description: "Energy-efficient smart vacuum cleaner.",
            image: "https://img.drz.lazcdn.com/static/bd/p/70de89e7dfae0fdc030ed5c5006f93d2.jpg_720x720q80.jpg",
            offer: 15,
            price: 199.99,
            title: "Smart Vacuum Cleaner",
            totalAvailable: 15,
        },
        {
            _id: "3",
            category: "Fashion",
            color: "Blue",
            description: "Stylish denim jacket for all occasions.",
            image: "https://www.shutterstock.com/image-vector/3d-wireless-headphones-mockup-set-260nw-2130630635.jpg",
            offer: 10,
            price: 49.99,
            title: "Denim Jacket",
            totalAvailable: 25,
        },
        {
            _id: "4",
            category: "Fitness",
            color: "Green",
            description: "Durable yoga mat for all fitness levels.",
            image: "https://img.drz.lazcdn.com/static/bd/p/70de89e7dfae0fdc030ed5c5006f93d2.jpg_720x720q80.jpg",
            offer: 5,
            price: 29.99,
            title: "Yoga Mat",
            totalAvailable: 50,
        },
        {
            _id: "5",
            category: "Books",
            color: "Multi",
            description: "A motivational book for personal growth.",
            image: "https://img.drz.lazcdn.com/static/bd/p/70de89e7dfae0fdc030ed5c5006f93d2.jpg_720x720q80.jpg",
            offer: 25,
            price: 14.99,
            title: "Motivational Book",
            totalAvailable: 100,
        },
    ];
    
    // // fetch all products in db 
    // const { isPending, refetch, data: products = [] } = useQuery({
    //     queryKey: ['products'],
    //     queryFn: async () => {
    //         const res = await fetch("https://wom-job-task-server.vercel.app/products")
    //         return res.json()
    //     }
    // })
    // console.log(products)

    // if(isPending){
    //    return <div className="mt-[60px] mx-auto w-[100px] ">
    //     <div className=" w-12 h-12 "><div className="grid grid-cols-2 h-full w-full overflow-hidden shadow-lg rounded-full animate-spin"><span className="h-6 w-6 rounded-tl-full bg-transparent"></span><span className="h-6 w-6 rounded-tr-full bg-sky-500"></span><span className="h-6 w-6 rounded-bl-full bg-sky-500"></span><span className="h-6 w-6 rounded-br-full"></span></div></div>
    //    </div>

    // }

    return (
        <div className="mt-[100px] container mx-auto">
            <SectionTitle title={"Our Products"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deleniti perferendis dolor architecto error molestias inventore. Quae mollitia id libero!"></SectionTitle>
            <div className="grid sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {
                    products?.map((product, index) => { return <ProductCard key={index} product={product}></ProductCard> })
                }
            </div>
             {/* Pass products to FeaturedBooks */}
             <FeaturedBooks products={products} />
             {/* Pass products to RecentlyBooks */}
             <RecentlyBooks products={products} />
             {/* Pass products to BudgetFriendlyBooks */}
             <BudgetFriendlyBooks products={products} />
        </div>
    );
};

export default Products;