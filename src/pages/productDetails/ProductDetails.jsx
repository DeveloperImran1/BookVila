import { useState, useEffect } from 'react';
import { MinusCircle, PlusCircle, Copy, Info } from 'react-feather';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Simulating data fetch from a database
import productData from './productData.json';





export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Simulating API call to fetch product data
    setProduct(productData);
  }, []);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="min-h-screen  container mx-auto bg-gray-50 p-4 md:p-6 lg:p-8">
      <card className=" p-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Product Image */}
          {/* offer will be share  */}
          <div 
            className="flex items-center justify-center bg-gray-100 p-6 overflow-hidden"
            data-aos="fade-right"
          >
            <img
              src={product.image}
              alt="Product"
              className="h-auto w-full max-w-xl rounded-2xl object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-4" data-aos="fade-left">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                by <span className="text-gray-900">{product.author}</span>
              </p>
              <p className="text-sm text-gray-600">
                বিষয়: <span className="text-gray-900">{product.subject}</span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-sm text-orange-600">
                {product.condition}
              </span>
              <Info className="h-4 w-4 text-gray-400 cursor-pointer transition-colors hover:text-gray-600" />
            </div>

            <div className="text-2xl font-bold">{product.price}৳</div>

            <div className="space-y-2">
              <div className="text-sm text-gray-600">Quantity:</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={decreaseQuantity}
                  className="h-8 w-8 p-0 bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
                >
                  <MinusCircle className="h-5 w-5 mx-auto" />
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="h-8 w-16 rounded border border-gray-200 text-center"
                />
                <button
                  onClick={increaseQuantity}
                  className="h-8 w-8 p-0 bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
                >
                  <PlusCircle className="h-5 w-5 mx-auto" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-green-600">
              <div className="h-2 w-2 rounded-full bg-green-600" />
              {product.stock} items in stock
            </div>

            <div 
              className="rounded bg-orange-50 p-2 text-sm text-orange-600"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              🎉 {product.discount.code}: {product.discount.description}
            </div>

            <p className="text-sm text-gray-500">
              {product.note}
            </p>

            <div className="flex gap-2">
              <button 
                className="  bg-orange-500 px-2 text-white hover:bg-orange-600 transition-colors"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                Add to Cart
              </button>
              <button 
                className="bg-gray-200 text-gray-600 hover:bg-gray-300 transition-transform hover:scale-105"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Variation Section */}
        <div 
          className="mt-6 border-t pt-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h2 className="text-lg font-semibold">Variation</h2>
          <p className="text-sm text-gray-500">No other condition available</p>
        </div>
      </card>
    </div>
  );
}

            