import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import axios from "axios";
import swal from 'sweetalert';
import EditModal from "../../../components/baner/EditModal";
import { useState } from "react";

const AllProducts = () => {
    const axiosPublic = useAxiosPublic();
    const [currentProduct, setCurrentProduct] = useState({})
    // fetch all products in db 
    const { isPending, refetch, data: products = [] } = useQuery({
        queryKey: ['allProducts'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/products")
            return res.json()
        }
    })
    const { category, color, description, image, offer, price, title, totalAvailable, _id } = products;

    // delete an product 
    const handleDelete = (id) => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`http://localhost:5000/product/${id}`)
                        .then(data => {
                            refetch()
                            if (data?.deletedCount) {
                                swal("Your Product has been deleted!", {
                                    icon: "success",
                                })

                            }
                        });
                } else {
                    swal("Your Product is safe!");
                }
            });




    }

    if (isPending) {
        return <div className="mt-[60px] mx-auto w-[100px] ">
            <div className=" w-12 h-12 "><div className="grid grid-cols-2 h-full w-full overflow-hidden shadow-lg rounded-full animate-spin"><span className="h-6 w-6 rounded-tl-full bg-transparent"></span><span className="h-6 w-6 rounded-tr-full bg-sky-500"></span><span className="h-6 w-6 rounded-bl-full bg-sky-500"></span><span className="h-6 w-6 rounded-br-full"></span></div></div>
        </div>

    }

    return (
        <div>
           

            <div className="overflow-x-auto border w-full mx-auto bg-[#1313180D] rounded-xl border-black  ">
                <table className="min-w-full text-[16px] font-semibold ">
                    <thead className="dark:bg-gray-300 bg-slate-600 mt-10">
                        <tr className="text-left  leading-none dark:text-gray-600 text-white">
                            <th></th>
                            <th className="p-3">Product</th>
                            <th className="p-3">Title</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Collection</th>
                            <th className="p-3">Update Info</th>
                            <th className="p-3">Delete</th>

                        </tr>
                    </thead>
                    {
                        products?.map((product, i) => <tbody key={product?._id}>
                            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <th>{i + 1}</th>
                                <td className="p-3">
                                    <img className="size-[80px] bg-white object-cover rounded-lg hover:blur-[2px] duration-500" src={`${product?.image || "https://i.ibb.co/x6jR8ny/Link-prod16-png.png"}`} alt="User Image" />

                                </td>

                                <td className="p-3">
                                    <p>{product?.title} </p>

                                </td>

                                <td className="p-3">
                                    <span className="bg-[#d6ebfc] text-[#49b2ff] rounded-xl p-1 px-2">{product?.price} $</span>

                                </td>
                                <td className="p-3 ">
                                    <span className="bg-[#fbd6e3] text-[#eb3473] rounded-xl p-1 px-2" >{product?.totalAvailable} P</span>

                                </td>




                                <td onClick={()=> setCurrentProduct(product)} className="">
                                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn btn-sm ml-2 text-[#22c55e] bg-[#b5cfbe]"><FaEdit size={22} ></FaEdit> </button>
                                </td>
                                <td className="">
                                    <button onClick={() => handleDelete(product?._id)} className="btn btn-sm ml-2 text-white bg-[#076aa5]"><MdDeleteForever size={22} ></MdDeleteForever></button>
                                </td>

                            <EditModal product={currentProduct} refetch={refetch}></EditModal>
                            </tr>


                        </tbody>)
                    }

                </table>
            </div>
        </div>
    );
};

export default AllProducts;


