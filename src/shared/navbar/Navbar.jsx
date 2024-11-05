import { useEffect, useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import swal from 'sweetalert';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaSearch } from "react-icons/fa";
import { Button, Drawer, DrawerAction, DrawerContent, Skeleton, SkeletonLine } from 'keep-react'
import { MdOutlineArrowForwardIos } from "react-icons/md";


const Navbar = () => {
    const [show, setShow] = useState(false)
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
        swal("Logout", "You have Login Out", "success");
        return navigate("/signIn")
    }







    return (
        <div className="">

            <div className="bg-[#ffffff]">
                <nav className="flex items-center justify-between container p-0 py-2 text-black font-bold ">
                    <div className="scale-100 cursor-pointer rounded-2xl   text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                        <Link to="/"> <img src="https://i.ibb.co.com/SfNwSrp/Whats-App-Image-2024-10-10-at-11-12-02-PM-removebg-preview-1.png" className="w-[60px] h-[60px] " alt="logo" /></Link>
                    </div>
                    <div className="flex items-center justify-between gap-16">
                        <ul className="hidden md:flex items-center justify-between gap-7">
                            <li className="group flex  cursor-pointer flex-col">
                                Home <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#00bffe] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="group flex  cursor-pointer flex-col">
                                Pages <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#00bffe] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="group flex  cursor-pointer flex-col">
                                Products <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#00bffe] transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="group flex  cursor-pointer flex-col">
                                Contact  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#00bffe] transition-all duration-300 group-hover:w-full"></span>
                            </li>


                            <li className="bg-bg-color rounded-full p-2 hover:scale-105">
                                <svg width="15.750000" height="13.552734" viewBox="0 0 15.75 13.5527" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <desc>
                                        Created with Pixso.
                                    </desc>
                                    <defs />
                                    <path id="Vector" d="M4.21 0C3.45 0 2.75 0.19 2.1 0.57C1.46 0.95 0.95 1.46 0.57 2.1C0.19 2.75 0 3.45 0 4.21C0 4.86 0.23 5.53 0.7 6.22C0.92 6.56 1.15 6.83 1.38 7.04L7.87 13.55L14.57 6.83C14.74 6.65 14.91 6.45 15.06 6.24C15.26 5.94 15.42 5.64 15.53 5.34C15.67 4.95 15.75 4.58 15.75 4.21C15.75 3.45 15.56 2.75 15.17 2.1C14.79 1.46 14.28 0.95 13.64 0.57C12.99 0.19 12.29 0 11.53 0C10.17 0 8.95 0.55 7.87 1.65C6.79 0.55 5.57 0 4.21 0ZM4.21 1.12C4.6 1.12 5 1.21 5.43 1.38C5.77 1.51 6.11 1.69 6.46 1.93C6.71 2.1 6.95 2.29 7.18 2.49L7.45 2.75L7.87 3.23L8.29 2.75L8.56 2.49C8.79 2.29 9.03 2.1 9.28 1.93C9.63 1.69 9.97 1.51 10.31 1.38C10.74 1.21 11.14 1.12 11.53 1.12C12.09 1.12 12.61 1.26 13.08 1.54C13.56 1.82 13.93 2.2 14.21 2.68C14.48 3.15 14.62 3.66 14.62 4.21C14.62 4.47 14.53 4.78 14.34 5.13C14.21 5.39 14.05 5.65 13.85 5.92L13.57 6.25L7.87 11.95L2.17 6.25L2 6.08C1.87 5.91 1.75 5.75 1.63 5.58C1.48 5.36 1.36 5.14 1.28 4.92C1.17 4.66 1.12 4.42 1.12 4.21C1.12 3.66 1.26 3.15 1.53 2.68C1.81 2.2 2.18 1.82 2.66 1.54C3.13 1.26 3.65 1.12 4.21 1.12Z" fill="#000000" fill-opacity="1.000000" fill-rule="nonzero" />
                                </svg>

                            </li>
                        </ul>
                        <div onClick={() => setShow(!show)} className="flex items-center border-2 rounded-[32px] relative cursor-pointer">
                            <button className="rounded-full  transition-all duration-300 hover:scale-90">
                                <img src={`${user?.photoURL || 'https://static.vecteezy.com/system/resources/previews/013/042/571/original/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg'}`} alt="user" className="h-[40px] w-[40px] rounded-full " />
                            </button>
                            <IoReorderThree size={28}></IoReorderThree>

                            <div className={`${show ? 'right-0 top-[40px] visible' : 'right-0 top-[90px]  invisible'}  absolute z-50  bg-bg-color rounded-2xl py-2 w-[150px] transition-all my-transition`}>
                                <ul>
                                    {
                                        user ? <>
                                            <NavLink to="/dashboard"><li className=" w-full p-1 pl-3 rounded-md hover:bg-[#00bffe] hover:text-white">Dashboard</li></NavLink>
                                            <NavLink onClick={handleLogOut}><li className="w-full p-1 pl-3 rounded-md hover:bg-[#00bffe] hover:text-white">Log Out</li></NavLink>
                                            <NavLink to="/"><li className="block md:hidden w-full p-1 pl-3 rounded-md hover:bg-[#00bffe] hover:text-white">Home</li></NavLink>
                                            <NavLink><li className="block md:hidden w-full p-1 pl-3 rounded-md hover:bg-[#00bffe] hover:text-white">Page</li></NavLink>
                                            <NavLink><li className="block md:hidden w-full p-1 pl-3 rounded-md hover:bg-[#00bffe] hover:text-white">Products</li></NavLink>
                                            <NavLink><li className="block md:hidden w-full p-1 pl-3 rounded-md hover:bg-[#00bffe] hover:text-white">Contuct</li></NavLink>

                                        </> : <>
                                            <NavLink to="/signIn"><li className="w-full p-1 pl-3 rounded-md hover:bg-[#00bffe] hover:text-white">Sign In</li></NavLink>
                                            <NavLink to="/signUp"><li className="w-full p-1 pl-3 rounded-md hover:bg-[#00bffe] hover:text-white">Sign Up</li></NavLink>
                                            <NavLink to="/"><li className="block md:hidden w-full p-1 pl-3 rounded-md hover:bg-[#00bffe] hover:text-white">Home</li></NavLink>
                                            <NavLink><li className="block md:hidden w-full p-1 pl-3 rounded-md hover:bg-[#00bffe] hover:text-white">Page</li></NavLink>
                                            <NavLink><li className="block md:hidden w-full p-1 pl-3 rounded-md hover:bg-[#00bffe] hover:text-white">Products</li></NavLink>
                                            <NavLink><li className="block md:hidden w-full p-1 pl-3 rounded-md hover:bg-[#00bffe] hover:text-white">Contuct</li></NavLink>

                                        </>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>

            {/* Banner section  */}

            <>
                <section className="hidden md:flex container mt-3 items-center justify-between bg-[#00bffe] p-2 rounded-md">
                    <span className="relative   ">
                        <input type="text" placeholder="Search Anything" className="  bg-white  md:w-[200px] lg:w-[300px]   px-2 border-none focus:outline-none focus:border-none bg-transparent rounded-full md:rounded-l-full " />
                        <FaSearch size={22} className='text-gray-500 absolute right-3 top-[20%]'></FaSearch>
                    </span>

                    <div className="hidden md:flex items-center  gap-2 bg-[#00bffe] ">
                        <svg width="13.750000" height="18.910156" viewBox="0 0 13.75 18.9102" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Symbol" d="M13.75 2.91L0 2.91L0 0L13.75 0L13.75 2.91ZM13.75 6.91L0 6.91L0 4L13.75 4L13.75 6.91ZM13.75 10.91L0 10.91L0 8L13.75 8L13.75 10.91ZM13.75 14.91L0 14.91L0 12L13.75 12L13.75 14.91ZM13.75 18.91L0 18.91L0 16L13.75 16L13.75 18.91Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>

                        <p className="font-semibold text-[18px] text-white">free shipping over $199</p>
                    </div>
                    <div className="hidden md:flex  items-center gap-2 bg-[#00bffe]">
                        <svg width="13.750000" height="18.910156" viewBox="0 0 13.75 18.9102" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Symbol" d="M13.75 2.91L0 2.91L0 0L13.75 0L13.75 2.91ZM13.75 6.91L0 6.91L0 4L13.75 4L13.75 6.91ZM13.75 10.91L0 10.91L0 8L13.75 8L13.75 10.91ZM13.75 14.91L0 14.91L0 12L13.75 12L13.75 14.91ZM13.75 18.91L0 18.91L0 16L13.75 16L13.75 18.91Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>

                        <p className="font-semibold text-[18px] text-white">30 days money back</p>
                    </div>
                    <div className="hidden md:flex  items-center gap-2 bg-[#00bffe]">
                        <svg width="13.750000" height="18.910156" viewBox="0 0 13.75 18.9102" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Symbol" d="M13.75 2.91L0 2.91L0 0L13.75 0L13.75 2.91ZM13.75 6.91L0 6.91L0 4L13.75 4L13.75 6.91ZM13.75 10.91L0 10.91L0 8L13.75 8L13.75 10.91ZM13.75 14.91L0 14.91L0 12L13.75 12L13.75 14.91ZM13.75 18.91L0 18.91L0 16L13.75 16L13.75 18.91Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>

                        <p className="font-semibold text-[18px] text-white">100% secure payment</p>
                    </div>
                </section>



                <div className='flex  gap-[10px] container p-0'>

                    <div className="md:w-[30%] lg:w-[20%] hidden md:flex  bg-white pt-[10px] pb-[50px] rounded-md  justify-between items-start  border-2">
                        <ul className="w-full">
                            <li className="py-3 px-3 font-semibold w-full hover:bg-[#00bffe] hover:text-white rounded-md flex justify-between items-center">
                                <Link>Book</Link>
                                <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>
                            </li>
                            <li><Link>Book</Link></li>
                            <li><Link>Book</Link></li>
                            <li><Link>Book</Link></li>
                            <li><Link>Book</Link></li>
                        </ul>
                    </div>

                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-full md:w-[70%] lg:w-[80%] ">
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
                </div>




                <Drawer className="text-black">
                    <DrawerAction asChild>
                        <Button className="text-black">Open Drawer</Button>
                    </DrawerAction>
                    <DrawerContent position="left">
                        <div className="mx-auto max-w-md space-y-3 px-6 py-8 lg:px-0">
                            {/* <Skeleton className="space-y-2.5">
                                <SkeletonLine className="h-[200px]" />
                                <SkeletonLine className="h-4" />
                                <SkeletonLine className="h-4" />
                                <SkeletonLine className="h-4" />
                                <SkeletonLine className="h-4" />
                                <SkeletonLine className="h-10 w-1/3" />
                            </Skeleton> */}

                            <ul>
                                <li>Imran navlink</li>
                                <li>Imran navlink</li>
                                <li>Imran navlink</li>
                                <li>Imran navlink</li>
                                <li>Imran navlink</li>
                                <li>Imran navlink</li>
                                <li>Imran navlink</li>
                            </ul>
                        </div>
                    </DrawerContent>
                </Drawer>


            </>

        </div>
    );
};

export default Navbar;