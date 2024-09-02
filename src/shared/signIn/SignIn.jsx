import { useState } from "react";
import { BiShow, BiSolidHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import swal from 'sweetalert';
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
    const [show, setShow] = useState(false)

    const navigate = useNavigate();
    const { register, signInGoogle, loading, setLoading, handleUpdateProfile, login } = useAuth()

    const signInAlert = () => {
        swal("Wellcome", "You have successfully SignIn", "success");
        return navigate("/")
    }
    const signInErrorAlert = () => {
        swal("Error", "Something error", "error");
    }

  
   
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(res => {
                signInAlert()
            })
            .catch(err => {
                swal("Error", "Something google error", "error");
            })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
 

        console.log(email, password)

        // validation 
        if( !email || !password ){
            return swal("Error", "Please fillup all input field", "error");
        }

        if(password.length < 6){
            return swal("Error", "Password should be minimum 6 charecter", "error");
        }
   
        login(email, password)
        .then(res => {
            signInAlert()
        })
        .catch(err => {
            signInErrorAlert()
        })

    }

    return (
        <div className="flex flex-col md:flex-row justify-between items-center mt-[100px] ">
            <img src="https://i.ibb.co/vjXZQCx/login-svg.png" alt="login" className="max-w-[40%] mx-auto " />
         <div className="w-full md:w-[50%]  flex  flex-col items-center md:items-start justify-center md:justify-start">
         <div className="w-full  ">
                <h1 className="text-[26px] text-primary font-bold">Well Come Back</h1>
                <p className="text-gray-400 mt-3 mb-10">Sign In to Continue</p>

                <span onClick={handleGoogleSignIn} className="p-2 rounded-full border-2 flex items-center justify-center w-[40px] ml-[200px] cursor-pointer ">
                        <FaGoogle size={23}></FaGoogle>
                    </span>
                    <p className="text-[18px] font-bold mt-3 ml-[210px] my-10">Or</p>

                <form onSubmit={handleSubmit}>
              
                    <label className="form-control w-full mb-4">
                        <span className="text-[17px] ">Your Email</span>
                        <input name="email" type="email" placeholder="Your Email" className="mx-atuo w-full md:w-[80%] p-2 outline-none border-2 rounded-md" />
                    </label>

                    <label className="form-control w-full mb-4">
                        <span className="text-[17px] ">Your Password</span>
                        <div className="relative w-full md:w-[80%]">
                            <input name="password" type={show ? 'text' : 'password'} placeholder="Your Password" className="w-full  p-2 outline-none border-2 rounded-md" />

                            {
                                show ?  <BiShow onClick={()=> setShow(!show)} size={22} className="absolute right-2 cursor-pointer top-[30%] "></BiShow>  :  <BiSolidHide onClick={()=> setShow(!show)} size={22} className="absolute right-2 cursor-pointer top-[30%] "></BiSolidHide>    
                            }
                          
                       
                        </div>
                    </label>

                    <button className='font-semibold mt-[40px] text-[19px] px-4 py-2 rounded-md bg-primary text-white'>Sign In</button>
                    <p>You have no account? <Link to="/signUp" className="text-primary">Sign Up</Link></p>
                </form>
            </div>
         </div>
        </div>
    );
};

export default SignIn;