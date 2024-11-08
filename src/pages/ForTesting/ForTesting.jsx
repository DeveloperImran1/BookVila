




import  { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ForTesting = () => {

  const slides = [
     "Cítíte, že vaše značka potřebuje svěží vítr a oživení?", 
     "Pomůžeme vám s rebrandingem vaší značky", 
     "Vytvoříme pro vás jedinečnou identitu", 
     "Moderní design pro moderní značky", 
     "Profesionální přístup ke každému projektu", 
     "Inovativní řešení pro váš růst", 
     "Společně vytvoříme něco výjimečného", 
  ]
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full container mx-auto bg-black text-white min-h-[500px] flex flex-col items-center justify-center  relative">
      {/* Main content */}
      <div className="text-center  md:w-[450px]  mb-10 text-3xl px-2 font-light">
        {slides[currentSlide]}
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4">
        <button 
          onClick={prevSlide}
          className="p-2 text-white/70  hover:text-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={34} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white scale-100' 
                  : 'bg-white/40 scale-90 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="p-2  text-white/80  hover:text-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight  size={34} />
        </button>
      </div>

      {/* Bottom button */}
      {/* <button className="mt-12 border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
       
      </button> */}
  <button

  className="flex mt-12 justify-center gap-2 items-center mx-auto shadow-xl text-lg backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#277bb8] text-gray-100 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-800 relative z-10 px-4 py-2 overflow-hidden border-b-2 rounded-full group"
>
Potom jste tu správně
  <svg
    className="w-10 h-10  justify-end  group-hover:rotate-90 group-hover:bg-gray-50  ease-linear duration-500 
    
     group-hover:border-none group-hover:rounded-full px-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      className="fill-gray-50 group-hover:fill-gray-800"
    ></path>
  </svg>
</button>
    </div>
  );
};

export default ForTesting;