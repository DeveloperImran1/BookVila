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
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FiLogIn } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';

const Navbar = () => {
    const [show, setShow] = useState(false)
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    const [selectCategory, setSelectCategory] = useState(null)
    const [subject, setSubject] = useState(false)
    const [books, setBooks] = useState(false)
    const [bookWriters, setBookWriters] = useState(false)
    const [bookPublications, setBookPublications] = useState(false)

    const handleLogOut = () => {
        logOut()
        swal("Logout", "You have Login Out", "success");
        return navigate("/signIn")
    }


    const boiShomogro = [
        "মহাকালের কণ্ঠ",
        "গোয়েন্দা কাহিনী সমগ্র",
        "ভূতের গল্প",
        "নক্ষত্রের রাত",
        "জীবনের জলছবি",
        "বাংলা সাহিত্যের ইতিহাস",
        "ইতিহাসের অজানা অধ্যায়",
        "গণিতের আনন্দ",
        "পাখিদের নিয়ে গল্প",
        "ভূগোলের বিস্ময়",
        "শিশুতোষ গল্পসমগ্র",
        "রহস্যময় পৃথিবী",
        "প্রাণীর কাহিনী",
        "বিজ্ঞানের বিস্ময়",
        "বিশ্বের সেরা উপন্যাস",
        "রবীন্দ্রনাথের কবিতা",
        "প্রাচীন মিসরের ইতিহাস",
        "যুগান্তরের কবিতা",
        "অ্যালিস ইন ওয়ান্ডারল্যান্ড (বাংলা অনুবাদ)",
        "বাংলা প্রবাদ প্রবচন",
        "আধুনিক বাংলার কথা",
        "চর্যাপদ ও প্রাচীন সাহিত্য",
        "বাংলাদেশের মুক্তিযুদ্ধের গল্প",

    ];

    // বিষয়ের নামের অ্যারে
    const subjects = [
        "উপন্যাস",
        "কবিতা",
        "গল্প",
        "ইতিহাস",
        "বিজ্ঞান",
        "দর্শন",
        "ধর্ম",
        "জীবনী",
        "শিশুসাহিত্য",
        "কৃষি",
        "ভ্রমণকাহিনী",
        "রাজনীতি",
        "সমাজবিজ্ঞান",
        "প্রযুক্তি",
        "চিকিৎসাশাস্ত্র",
        "গণিত",
        "আইন",
        "সাহিত্য",
        "শিল্প ও সংস্কৃতি",
        "ভৌগোলিক গবেষণা"
    ];

    // লেখকের নামের অ্যারে
    const writers = [
        "হুমায়ুন আহমেদ",
        "জহির রায়হান",
        "রবীন্দ্রনাথ ঠাকুর",
        "কাজী নজরুল ইসলাম",
        "আবুল বাশার",
        "সৈয়দ মুজতবা আলী",
        "সুনীল গঙ্গোপাধ্যায়",
        "আবুল মনসুর আহমদ",
        "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
        "মুহম্মদ জাফর ইকবাল",
        "শীর্ষেন্দু মুখোপাধ্যায়",
        "আনিসুল হক",
        "আহমদ ছফা",
        "অনীশ দাস অপু",
        "বেগম রোকেয়া",
        "ফয়েজ আহমেদ",
        "মীর মশাররফ হোসেন",
        "তসলিমা নাসরিন",
        "জাকির তালুকদার",
        "প্রেমচাঁদ"
    ];

    // প্রকাশনীর নামের অ্যারে
    const publications = [
        "প্রথমা প্রকাশন",
        "অন্যপ্রকাশ",
        "আনন্দ পাবলিশার্স",
        "বাংলা একাডেমি",
        "বিদ্যাপ্রকাশ",
        "ইত্যাদি গ্রন্থ প্রকাশ",
        "কাকলী প্রকাশনী",
        "পাঠক সমাবেশ",
        "মাওলা ব্রাদার্স",
        "সাহিত্য প্রকাশ",
        "অনন্যা প্রকাশনী",
        "অন্তর্জলী প্রকাশন",
        "বঙ্গপ্রকাশ",
        "সৃজনশীল প্রকাশনী",
        "সম্প্রতি প্রকাশনী",
        "জ্ঞানভবন প্রকাশনী",
        "বিশ্বসাহিত্য কেন্দ্র",
        "শিখা প্রকাশনী",
        "বর্ণমালা প্রকাশনী",
        "সাহিত্য সংসদ"
    ];





    return (
        <div className="">


            <div className="bg-[#ffffff]">
                <nav className="flex items-center justify-between container p-0 py-2 text-black font-bold ">
                    <div className=" cursor-pointer rounded-2xl flex items-center text-xl font-semibold max-w-[50%]">

                        <Drawer className="text-black border-2">
                            <DrawerAction asChild>
                                <p className="bg-gray-300 p-1 rounded-md md:hidden">
                                    <IoReorderThree size={28} />
                                </p>
                            </DrawerAction>

                            <DrawerContent
                                position="left"
                                className="w-full max-w-[70%] md:max-w-full flex flex-col justify-between  h-[100vh] overflow-scroll"
                            >
                                <div className="flex flex-col bg-white pt-[10px] pb-[50px] rounded-md justify-between items-center">
                                    <Link to="/">
                                        <img
                                            src="https://i.ibb.co.com/SfNwSrp/Whats-App-Image-2024-10-10-at-11-12-02-PM-removebg-preview-1.png"
                                            className="w-[100px] h-[100px] scale-100 text-white transition-all duration-200 hover:scale-110"
                                            alt="logo"
                                        />
                                    </Link>
                                    <hr className="border-[1px] my-[18px] w-full" />
                                    {/* books list  */}
                                    <div className="w-full flex flex-col">
                                        {/* Main Subject Link */}
                                        <Link
                                            onClick={() => setBooks(!books)}
                                            className={`${books ? 'bg-[#00bffe] text-white' : ''
                                                } py-3 px-3 font-semibold w-full hover:bg-[#00bffe] hover:text-white rounded-md flex justify-between items-center`}
                                        >
                                            <p>Books</p>
                                            {books ? <IoIosArrowDown /> : <IoIosArrowUp />}
                                        </Link>

                                        <ul className={`${books ? 'flex ' : 'hidden'
                                            } py-2 flex-col ml-4 text-sm text-gray-700 dark:text-gray-200 h-[200px] overflow-auto `} aria-labelledby="multiLevelDropdownButton">

                                            {boiShomogro?.map((sub, index) => (
                                                <Link
                                                    key={index}
                                                    className="py-2 px-3 font-semibold w-[90%] hover:bg-[#00bffe] hover:text-white rounded-md flex justify-between items-center"
                                                >
                                                    <p>{sub}</p>
                                                </Link>
                                            ))}

                                        </ul>

                                    </div>

                                    {/* subject list  */}
                                    <div className="w-full flex flex-col">

                                        <Link
                                            onClick={() => setSubject(!subject)}
                                            className={`${subject ? 'bg-[#00bffe] text-white' : ''
                                                } py-3 px-3 font-semibold w-full hover:bg-[#00bffe] hover:text-white rounded-md flex justify-between items-center`}
                                        >
                                            <p>Subjects</p>
                                            {subject ? <IoIosArrowDown /> : <IoIosArrowUp />}
                                        </Link>

                                        <ul className={`${subject ? 'flex ' : 'hidden'
                                            } py-2 flex-col ml-4 text-sm text-gray-700 dark:text-gray-200 h-[200px] overflow-auto `} aria-labelledby="multiLevelDropdownButton">

                                            {subjects?.map((sub, index) => (
                                                <Link
                                                    key={index}
                                                    className="py-2 px-3 font-semibold w-[90%] hover:bg-[#00bffe] hover:text-white rounded-md flex justify-between items-center"
                                                >
                                                    <p>{sub}</p>
                                                </Link>
                                            ))}

                                        </ul>

                                    </div>

                                    {/* writer list  */}
                                    <div className="w-full flex flex-col">

                                        <Link
                                            onClick={() => setBookWriters(!bookWriters)}
                                            className={`${bookWriters ? 'bg-[#00bffe] text-white' : ''
                                                } py-3 px-3 font-semibold w-full hover:bg-[#00bffe] hover:text-white rounded-md flex justify-between items-center`}
                                        >
                                            <p>Writers</p>
                                            {bookWriters ? <IoIosArrowDown /> : <IoIosArrowUp />}
                                        </Link>

                                        <ul className={`${bookWriters ? 'flex ' : 'hidden'
                                            } py-2 flex-col ml-4 text-sm text-gray-700 dark:text-gray-200 h-[200px] overflow-auto `} aria-labelledby="multiLevelDropdownButton">

                                            {writers?.map((sub, index) => (
                                                <Link
                                                    key={index}
                                                    className="py-2 px-3 font-semibold w-[90%] hover:bg-[#00bffe] hover:text-white rounded-md flex justify-between items-center"
                                                >
                                                    <p>{sub}</p>
                                                </Link>
                                            ))}

                                        </ul>

                                    </div>

                                    {/* publication list */}
                                    <div className="w-full flex flex-col">
                                        {/* Main Subject Link */}
                                        <Link
                                            onClick={() => setBookPublications(!bookPublications)}
                                            className={`${bookPublications ? 'bg-[#00bffe] text-white' : ''
                                                } py-3 px-3 font-semibold w-full hover:bg-[#00bffe] hover:text-white rounded-md flex justify-between items-center`}
                                        >
                                            <p>Publications</p>
                                            {bookPublications ? <IoIosArrowDown /> : <IoIosArrowUp />}
                                        </Link>

                                        <ul className={`${bookPublications ? 'flex ' : 'hidden'
                                            } py-2 flex-col ml-4 text-sm text-gray-700 dark:text-gray-200 h-[200px] overflow-auto `} aria-labelledby="multiLevelDropdownButton">

                                            {publications?.map((sub, index) => (
                                                <Link
                                                    key={index}
                                                    className="py-2 px-3 font-semibold w-[90%] hover:bg-[#00bffe] hover:text-white rounded-md flex justify-between items-center"
                                                >
                                                    <p>{sub}</p>
                                                </Link>
                                            ))}

                                        </ul>

                                    </div>

                                </div>


                                {/* bottom section of sidebar */}
                                <div className="flex flex-col">
                                <hr className="border-[1px] my-[18px] w-full" />

                                    <Link className={` py-3 px-3 font-semibold w-full hover:bg-[#00bffe] hover:text-white rounded-md flex justify-between items-center`}
                                    >
                                        <p>Contact Us</p>
                                   <AiOutlinePhone></AiOutlinePhone>
                                    </Link>
                                    <Link className={` py-3 px-3 font-semibold w-full hover:bg-[#00bffe] hover:text-white rounded-md flex justify-between items-center`}
                                    >
                                        <p>Login</p>
                                   <FiLogIn></FiLogIn>
                                    </Link>
                                </div>
                            </DrawerContent>
                        </Drawer>


                        <Link to="/"> <img src="https://i.ibb.co.com/SfNwSrp/Whats-App-Image-2024-10-10-at-11-12-02-PM-removebg-preview-1.png" className="w-[60px] h-[60px] scale-100 text-white transition-all duration-200 hover:scale-110 " alt="logo" /></Link>
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
                                <img src={`${user?.photoURL || 'https://static.vecteezy.com/system/resources/previews/013/042/571/original/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg'}`} alt="user" className="h-[50px] w-[50px] rounded-full " />
                            </button>
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

            {/* <>
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



                <div className='flex relative gap-[10px] container p-0'>

                    <div className="md:w-[30%] lg:w-[20%] hidden md:flex  bg-white pt-[10px] pb-[50px] rounded-md  justify-between items-start  border-2">
                        <ul onMouseLeave={() => setSelectCategory(null)} className="w-full ">
                            <Link onMouseOver={() => setSelectCategory("books")} className="py-3 px-3 font-semibold w-full hover:bg-[#00bffe] hover:text-white rounded-md flex justify-between items-center">
                                <p>Books</p>
                                <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>
                            </Link>
                            <Link onMouseOver={() => setSelectCategory("subjects")} className="py-3 px-3 font-semibold w-full hover:bg-[#00bffe] hover:text-white rounded-md flex justify-between items-center">
                                <p>Subjects</p>
                                <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>
                            </Link>
                            <Link onMouseOver={() => setSelectCategory("writers")} className="py-3 px-3 font-semibold w-full hover:bg-[#00bffe] hover:text-white rounded-md flex justify-between items-center">
                                <p>Writer</p>
                                <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>
                            </Link>
                            <Link onMouseOver={() => setSelectCategory("publications")} className="py-3 px-3 font-semibold w-full hover:bg-[#00bffe] hover:text-white rounded-md flex justify-between items-center">
                                <p>Publications</p>
                                <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>
                            </Link>

                            {
                                selectCategory && <div className="bg-white absolute right-0 top-0 z-50 w-full md:w-[70%] lg:w-[80%]">
                                    <ul className="w-full px-6 py-4 flex flex-col flex-wrap h-[430px] ">
                                        {
                                            selectCategory === "books" ?
                                                boiShomogro?.map((book, index) => <Link key={index} className="py-3 px-3 font-normal w-[250px] hover:text-[#00bffe] hover:underline">
                                                    {book}
                                                </Link>) :
                                                selectCategory === "subjects" ? subjects?.map((book, index) => <Link key={index} className="py-3 px-3 font-normal w-[250px] hover:text-[#00bffe] hover:underline">
                                                    {book}
                                                </Link>) :
                                                    selectCategory === "writers" ? writers?.map((book, index) => <Link key={index} className="py-3 px-3 font-normal w-[250px] hover:text-[#00bffe] hover:underline">
                                                        {book}
                                                    </Link>) :
                                                        selectCategory === "publications" ? publications?.map((book, index) => <Link key={index} className="py-3 px-3 font-normal w-[250px] hover:text-[#00bffe] hover:underline">
                                                            {book}
                                                        </Link>) : ""
                                        }

                                    </ul>
                                </div>
                            }



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






            </> */}

        </div>
    );
};

export default Navbar;