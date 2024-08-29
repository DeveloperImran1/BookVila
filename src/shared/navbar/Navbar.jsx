import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <div>

            <nav className="flex items-center justify-between bg-[#ffffff] py-4 text-black font-bold">
                <div className="scale-100 cursor-pointer rounded-2xl  text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                    <img src="https://i.ibb.co/hDVMs3d/logo-png.png" alt="logo" />
                </div>
                <div className="flex items-center justify-between gap-16">
                    <ul className="hidden md:flex items-center justify-between gap-7">
                        <li className="group flex  cursor-pointer flex-col">
                            Home <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="group flex  cursor-pointer flex-col">
                            Pages <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="group flex  cursor-pointer flex-col">
                            Products <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="group flex  cursor-pointer flex-col">
                            Contact  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-primary transition-all duration-300 group-hover:w-full"></span>
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
                            <img src="https://static.vecteezy.com/system/resources/previews/013/042/571/original/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg" alt="user" className="h-[40px] w-[40px] rounded-full " />
                        </button>
                        <IoReorderThree size={28}></IoReorderThree>

                        <div className={`${show ? 'right-0 top-[40px] visible' : 'right-0 top-[90px]  invisible'}  absolute  bg-bg-color rounded-2xl py-2 w-[150px] transition-all my-transition`}>
                            <ul>
                                <NavLink><li className="w-full p-1 pl-3 rounded-md hover:bg-primary hover:text-white">Sign In</li></NavLink>
                                <NavLink><li className="w-full p-1 pl-3 rounded-md hover:bg-primary hover:text-white">Sign Up</li></NavLink>
                                <NavLink><li className="w-full p-1 pl-3 rounded-md hover:bg-primary hover:text-white">Log Out</li></NavLink>
                                <NavLink><li className=" w-full p-1 pl-3 rounded-md hover:bg-primary hover:text-white">Dashboard</li></NavLink>
                                <NavLink><li className="block md:hidden w-full p-1 pl-3 rounded-md hover:bg-primary hover:text-white">Home</li></NavLink>
                                <NavLink><li className="block md:hidden w-full p-1 pl-3 rounded-md hover:bg-primary hover:text-white">Page</li></NavLink>
                                <NavLink><li className="block md:hidden w-full p-1 pl-3 rounded-md hover:bg-primary hover:text-white">Products</li></NavLink>
                                <NavLink><li className="block md:hidden w-full p-1 pl-3 rounded-md hover:bg-primary hover:text-white">Contuct</li></NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="flex items-center justify-between bg-primary p-2 rounded-md">
                <div className="flex items-center justify-between bg-white w-full md:w-[38%] rounded-l-full px-2">
                    <div className="flex items-center justify-center gap-2">
                        <p className="font-semibold text-[18px] ">All Category</p>
                        <svg width="10.507812" height="6.003052" viewBox="0 0 10.5078 6.00305" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Vector" d="M0.75 0.75L5.25 5.25L9.75 0.75" stroke="#343A40" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round" />
                        </svg>
                    </div>

                    <input type="text" placeholder="Search Anything" className=" py-2 outline-none " />
                </div>
                <div className="hidden md:flex items-center  gap-2 bg-primary ">
                    <svg width="13.750000" height="18.910156" viewBox="0 0 13.75 18.9102" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                            Created with Pixso.
                        </desc>
                        <defs />
                        <path id="Symbol" d="M13.75 2.91L0 2.91L0 0L13.75 0L13.75 2.91ZM13.75 6.91L0 6.91L0 4L13.75 4L13.75 6.91ZM13.75 10.91L0 10.91L0 8L13.75 8L13.75 10.91ZM13.75 14.91L0 14.91L0 12L13.75 12L13.75 14.91ZM13.75 18.91L0 18.91L0 16L13.75 16L13.75 18.91Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                    </svg>

                    <p className="font-semibold text-[18px] text-white">free shipping over $199</p>
                </div>
                <div className="hidden md:flex  items-center gap-2 bg-primary">
                    <svg width="13.750000" height="18.910156" viewBox="0 0 13.75 18.9102" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                            Created with Pixso.
                        </desc>
                        <defs />
                        <path id="Symbol" d="M13.75 2.91L0 2.91L0 0L13.75 0L13.75 2.91ZM13.75 6.91L0 6.91L0 4L13.75 4L13.75 6.91ZM13.75 10.91L0 10.91L0 8L13.75 8L13.75 10.91ZM13.75 14.91L0 14.91L0 12L13.75 12L13.75 14.91ZM13.75 18.91L0 18.91L0 16L13.75 16L13.75 18.91Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                    </svg>

                    <p className="font-semibold text-[18px] text-white">30 days money back</p>
                </div>
                <div className="hidden md:flex  items-center gap-2 bg-primary">
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

        </div>
    );
};

export default Navbar;