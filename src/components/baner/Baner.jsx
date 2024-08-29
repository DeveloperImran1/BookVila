// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Baner = () => {
    return (
        <div className='flex  gap-[10px] '>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-[65%] ">
                <SwiperSlide className="bg-[url('https://i.ibb.co/GVN2nLN/slider3-png.png')] bg-center bg-cover pl-[80px] pt-[80px] pb-[80px] rounded-md  ">
                    <h1 className="text-white font-extrabold text-[34px] ">Noise Cancelling</h1>
                    <h1 className="text-white font-semibold text-[24px] ">Headphone</h1>

                    <div className='flex items-center gap-3 mt-[20px] '>
                        <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>
                            <p className='font-semibold text-[17px] text-white'>Boso Year Head Phone</p>
                    </div>
                    <div className='flex items-center gap-3 '>
                        <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>
                            <p className='font-semibold text-[17px] text-white'>Wifi, Voice Assistant,</p>
                    </div>
                    <div className='flex items-center gap-3 '>
                        <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>
                            <p className='font-semibold text-[17px] text-white'>Boso Year Head Phone</p>
                    </div>

                    <button className='font-semibold mt-[40px] text-[19px] px-4 py-2 rounded-md bg-white'>Buy Now</button>
                </SwiperSlide>
                <SwiperSlide className="bg-[url('https://i.ibb.co/GVN2nLN/slider3-png.png')] bg-cover bg-center pl-[80px] pt-[80px] pb-[80px] rounded-md ">
                    <h1 className="text-white font-extrabold text-[34px] ">Noise Cancelling</h1>
                    <h1 className="text-white font-semibold text-[24px] ">Headphone</h1>

                    <div className='flex items-center gap-3 mt-[20px] '>
                        <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>
                            <p className='font-semibold text-[17px] text-white'>Boso Year Head Phone</p>
                    </div>
                    <div className='flex items-center gap-3 '>
                        <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>
                            <p className='font-semibold text-[17px] text-white'>Wifi, Voice Assistant,</p>
                    </div>
                    <div className='flex items-center gap-3 '>
                        <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>
                            <p className='font-semibold text-[17px] text-white'>Boso Year Head Phone</p>
                    </div>

                    <button className='font-semibold mt-[40px] text-[19px] px-4 py-2 rounded-md bg-white'>Buy Now</button>
                </SwiperSlide>
                <SwiperSlide className="bg-[url('https://i.ibb.co/GVN2nLN/slider3-png.png')] bg-center bg-cover pl-[80px] pt-[80px] pb-[80px] rounded-md ">
                    <h1 className="text-white font-extrabold text-[34px] ">Noise Cancelling</h1>
                    <h1 className="text-white font-semibold text-[24px] ">Headphone</h1>

                    <div className='flex items-center gap-3 mt-[20px] '>
                        <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>
                            <p className='font-semibold text-[17px] text-white'>Boso Year Head Phone</p>
                    </div>
                    <div className='flex items-center gap-3 '>
                        <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>
                            <p className='font-semibold text-[17px] text-white'>Wifi, Voice Assistant,</p>
                    </div>
                    <div className='flex items-center gap-3 '>
                        <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>
                            <p className='font-semibold text-[17px] text-white'>Boso Year Head Phone</p>
                    </div>

                    <button className='font-semibold mt-[40px] text-[19px] px-4 py-2 rounded-md bg-white'>Buy Now</button>
                </SwiperSlide>
                <SwiperSlide className="bg-[url('https://i.ibb.co/GVN2nLN/slider3-png.png')] bg-cover bg-center pl-[80px] pt-[80px] pb-[80px] rounded-md ">
                    <h1 className="text-white font-extrabold text-[34px] ">Noise Cancelling</h1>
                    <h1 className="text-white font-semibold text-[24px] ">Headphone</h1>

                    <div className='flex items-center gap-3 mt-[20px] '>
                        <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>
                            <p className='font-semibold text-[17px] text-white'>Boso Year Head Phone</p>
                    </div>
                    <div className='flex items-center gap-3 '>
                        <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>
                            <p className='font-semibold text-[17px] text-white'>Wifi, Voice Assistant,</p>
                    </div>
                    <div className='flex items-center gap-3 '>
                        <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>
                            <p className='font-semibold text-[17px] text-white'>Boso Year Head Phone</p>
                    </div>

                    <button className='font-semibold mt-[40px] text-[19px] px-4 py-2 rounded-md bg-white'>Buy Now</button>
                </SwiperSlide>
               
            </Swiper>

        <div className="w-[35%] hidden md:flex bg-[url('https://i.ibb.co/JcgWmN3/banner1-png.png')] bg-cover  pl-[50px] pt-[50px] pb-[50px] rounded-md  justify-between items-start">
       <div>
       <h1 className="text-black font-bold text-[24px] w-[150px] ">redmi note 12
        Pro+ 5g</h1>
        <h1 className="text-[#7a7b7c] font-semibold  ">Rise to the challenge</h1>
        
       </div>
        <button className='font-semibold mt-[40px] text-[19px] px-4 py-2 rounded-md bg-black text-white mr-4 mb-4'>Buy Now</button>
        </div>
        </div>
    );
};

export default Baner;


