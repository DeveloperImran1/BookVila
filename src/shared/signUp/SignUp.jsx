import { useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { imageUpload } from "../../api";
import useAuth from "../../hooks/useAuth";
import swal from 'sweetalert';
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {

    const [show, setShow] = useState(false);
    const axiosPublic = useAxiosPublic();
    const [photoURL, setPhotoURL] = useState("https://static.vecteezy.com/system/resources/previews/013/042/571/original/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg")
    const navigate = useNavigate();
    const { register, signInGoogle, loading, setLoading, handleUpdateProfile } = useAuth()

    const signUpAlert = () => {
        swal("Wellcome", "You have successfully Signup", "success");
        return navigate("/")
    }
    const signUpErrorAlert = () => {
        swal("Error", "Something error", "error");
    }

  
   
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(res => {
                signUpAlert()
            })
            .catch(err => {
                swal("Error", "Something google error", "error");
            })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photo = form.photo.files[0];

        console.log(name, email, password, confirmPassword, photo)

        // validation 
        if(!name || !email || !password || !confirmPassword || !photo){
            return swal("Error", "Please fillup all input field", "error");
        }

        if(password.length < 6){
            return swal("Error", "Password should be minimum 6 charecter", "error");
        }
    

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

   

        // email password signIn 
        register(email, password)
            .then(res => {
                handleUpdateProfile(name, photoURL)
                    .then(res => {
                        setLoading(false)
                        signUpAlert()
                    })
            })
            .catch(err => {
                setLoading(false)
                signUpErrorAlert()
            })



    }

    return (


        <div className="flex flex-col md:flex-row justify-between items-center mt-[100px] ">
            <img src="https://i.ibb.co/vjXZQCx/login-svg.png" alt="login" className="max-w-[40%] mx-auto " />
            <div className="w-full md:w-[50%]  flex  flex-col items-center md:items-start justify-center md:justify-start">
                <div className="w-full  ">
                    <h1 className="text-[26px] text-primary font-bold">Sign Up</h1>
                    <p className="text-gray-400 mt-3 mb-10">Join To Us</p>

                    <span onClick={handleGoogleSignIn} className="p-2 rounded-full border-2 flex items-center justify-center w-[40px] ml-[200px] cursor-pointer ">
                        <FaGoogle size={23}></FaGoogle>
                    </span>
                    <p className="text-[18px] font-bold mt-3 ml-[210px] my-10">Or</p>

                    <form onSubmit={handleSubmit}>

                        <label className="form-control w-full mb-4">
                            <span className="text-[17px] ">Your Name</span>
                            <input type="text" name="name" placeholder="Your Name" className="mx-atuo w-full md:w-[80%] p-2 outline-none border-2 rounded-md" />
                        </label>
                        <label className="form-control w-full mb-4">
                            <span className="text-[17px] ">Your Email</span>
                            <input type="email" name="email" placeholder="Your Email" className="mx-atuo w-full md:w-[80%] p-2 outline-none border-2 rounded-md" />
                        </label>

                        <label className="form-control w-full mb-4">
                            <span className="text-[17px] ">Upload Photo</span>
                            <input type="file" name="photo" placeholder="Upload Your Photo" className="mx-atuo w-full md:w-[80%] p-2 outline-none border-2 rounded-md" />
                        </label>

                        <label className="form-control w-full mb-4">
                            <span className="text-[17px] ">Your Password</span>
                            <div className="relative w-full md:w-[80%]">
                                <input name="password" type={show ? 'text' : 'password'} placeholder="Your Password" className="w-full  p-2 outline-none border-2 rounded-md" />

                                {
                                    show ? <BiShow onClick={() => setShow(!show)} size={22} className="absolute right-2 cursor-pointer top-[30%] "></BiShow> : <BiSolidHide onClick={() => setShow(!show)} size={22} className="absolute right-2 cursor-pointer top-[30%] "></BiSolidHide>
                                }


                            </div>
                        </label>
                        <label className="form-control w-full mb-4">
                            <span className="text-[17px] ">Your Confirm Password</span>
                            <div className="relative w-full md:w-[80%]">
                                <input name="confirmPassword" type={show ? 'text' : 'password'} placeholder="Your Confirm Password" className="w-full  p-2 outline-none border-2 rounded-md" />

                                {
                                    show ? <BiShow onClick={() => setShow(!show)} size={22} className="absolute right-2 cursor-pointer top-[30%] "></BiShow> : <BiSolidHide onClick={() => setShow(!show)} size={22} className="absolute right-2 cursor-pointer top-[30%] "></BiSolidHide>
                                }


                            </div>
                        </label>

                        <button className='font-semibold mt-[40px] text-[19px] px-4 py-2 rounded-md bg-primary text-white'>{loading ? "Loading" : "Sign Up"}</button>
                        <p>Already have an account? <Link to="/signIn" className="text-primary">Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;