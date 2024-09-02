import swal from 'sweetalert';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { imageUpload } from '../../api';

const EditModal = ({ product, refetch}) => {

    const { title, price, totalAvailable, description, category: currentCategory, color: currentColor, photoURL: photoUrl, offer: currentOffer, _id } = product;
    console.log(_id)

    const axiosPublic = useAxiosPublic();

    const [photoURL, setPhotoURL] = useState(photoUrl)
    const { register, signInGoogle, loading, setLoading, handleUpdateProfile } = useAuth()




    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const title = e.target.title.value;
        const price = e.target.price.value;
        const totalAvailable = e.target.total.value;
        const offer = e.target.offer.value || currentOffer;
        const description = e.target.description.value;
        const category = currentCategory;
        const color = currentColor;

        const photo = form.photo.files[0];


        console.log(title, price, totalAvailable, description, category, color, photo, offer)
        // validation 
        // if (!title || !price || !totalAvailable || !description || !category || !color || !offer) {
        //     return swal("Error", "Please fillup all input field", "error");
        // }



        try {
            setLoading(true)
            const data = await imageUpload(photo)
            setPhotoURL(data)
            setLoading(false)
        }
        catch (err) {
            console.log(err)
            setLoading(false)
        }

        const productData = { title, price, totalAvailable, description, category, color, photoURL, offer }
        axiosPublic.patch(`/product/${_id}`, productData)
            .then(data => {
                console.log(data)
                refetch()
                swal("Success", "You have successfully Updated a Product", "success")
             

            })


    }

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal h-[700px]">
                <div className="modal-box h-[700px]">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handleSubmit} className="flex  flex-col p-4 space-y-6   border-2 border-[#5A5A5D] rounded-[16px] ">

                        <p className="text-[24px] font-semibold  text-center mt-5 ">Add Your Products Info</p>



                        <div className="flex justify-center ">
                            <label className="flex h-full  items-end gap-4 bg-primary px-6 py-[9px] text-white active:ring-4 active:ring-cyan-200  w-[300px]   rounded-tr-lg rounded-bl-lg hover:rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 p-2 focus:dark:ring-primary dark:bg-gray-100" htmlFor="file">
                                <svg width={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Complete"><g id="upload"><g><path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><g><polyline data-name="Right" fill="none" id="Right-2" points="7.9 6.7 12 2.7 16.1 6.7" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline><line fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="16.3" y2="4.8"></line></g></g></g></g></g>
                                </svg>
                                <p className="text-lg font-medium">Upload Photo</p>
                            </label>
                            <input className="hidden" id="file" name='photo' type="file" />
                        </div>


                        <label className="">
                            <span className="mb-1">Product Title</span>
                            <input defaultValue={title} type="text" name="title" placeholder="Product Title" className=" w-full   rounded-tr-lg rounded-bl-lg hover:rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 border-[#5A5A5D] p-2 focus:dark:ring-primary dark:bg-gray-100 " />
                        </label>



                        <div className="flex flex-col md:flex-row justify-between items-center" >


                            <label className="w-full px-6 lg:px-0 lg:w-[45%]">
                                <span className="mb-1">Price</span>
                                <input defaultValue={price} type="text" placeholder="Price" name="price" className=" w-full   rounded-tr-lg rounded-bl-lg hover:rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 border-[#5A5A5D] p-2 focus:dark:ring-primary dark:bg-gray-100 " />
                            </label>
                            <label className="w-full px-6 lg:px-0 lg:w-[45%]" >
                                <span className="mb-1">Total</span>
                                <input defaultValue={totalAvailable} type="text" name="total" placeholder="Total Available" className=" w-full   rounded-tr-lg rounded-bl-lg hover:rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 border-[#5A5A5D] p-2 focus:dark:ring-primary dark:bg-gray-100 " />
                            </label>


                        </div>

                        <div className="flex flex-col md:flex-row  justify-between items-center" >


                            <label className="w-full px-6 lg:px-0 lg:w-[45%]" >
                                <span className="mb-1">Product Type</span>
                                <select name="productType" className="  w-full   rounded-tr-lg rounded-bl-lg hover:rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 border-[#5A5A5D] p-2 focus:dark:ring-primary dark:bg-gray-100 ">
                                    <option disabled selected>Pick a Product Type</option>
                                    <option>Electronics</option>
                                    <option>Luxury</option>
                                    <option>Medicene</option>
                                </select>
                            </label>
                            <label className="w-full px-6 lg:px-0 lg:w-[45%]" >
                                <span className="mb-1">Product Color</span>
                                <select name="color" className="  w-full   rounded-tr-lg rounded-bl-lg hover:rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 border-[#5A5A5D] p-2 focus:dark:ring-primary dark:bg-gray-100 ">
                                    <option disabled selected>Pick a color</option>
                                    <option>Red</option>
                                    <option>Blue</option>
                                    <option>Green</option>
                                </select>
                            </label>

                        </div>



                        <div className="flex flex-col md:flex-row  justify-between" >
                            <label className="w-full px-6 lg:px-0 lg:w-[45%]" >
                                <span className="mb-1">Offer</span>
                                <input defaultValue="10" type="text" name="offer" placeholder="Offer of percentage" className=" w-full   rounded-tr-lg rounded-bl-lg hover:rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 border-[#5A5A5D] p-2 focus:dark:ring-primary dark:bg-gray-100 " />
                            </label>
                            <label className="w-full px-6 lg:px-0 lg:w-[45%]" >
                                <span className="mb-1">Weight</span>
                                <input defaultValue="2 Kg" type="text" name="weight" placeholder="Product Weight" className=" w-full   rounded-tr-lg rounded-bl-lg hover:rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 border-[#5A5A5D] p-2 focus:dark:ring-primary dark:bg-gray-100 " />
                            </label>
                        </div>



                        <label className="">
                            <span className="mb-1">Description</span>
                            <textarea defaultValue={description} type="text" name="description" placeholder="Product Description" className=" w-full  h-[90px] rounded-tr-lg rounded-bl-lg hover:rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 border-[#5A5A5D] p-2 focus:dark:ring-primary dark:bg-gray-100 " />
                        </label>


                        <button method="dialog" type="submit" className="rounded-lg  border-2 border-primary px-8 py-3 text-xl text-primary duration-200 hover:bg-primary hover:text-white">Update Product</button>

                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default EditModal;