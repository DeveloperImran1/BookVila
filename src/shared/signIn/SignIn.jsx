// import { useState } from "react";
// import { BiShow, BiSolidHide } from "react-icons/bi";
// import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import swal from 'sweetalert';
// import { FaGoogle } from "react-icons/fa";

// const SignIn = () => {
//     const [show, setShow] = useState(false)

//     const navigate = useNavigate();
//     const { register, signInGoogle, loading, setLoading, handleUpdateProfile, login } = useAuth()

//     const signInAlert = () => {
//         swal("Wellcome", "You have successfully SignIn", "success");
//         return navigate("/")
//     }
//     const signInErrorAlert = () => {
//         swal("Error", "Something error", "error");
//     }

  
   
//     const handleGoogleSignIn = () => {
//         signInGoogle()
//             .then(res => {
//                 signInAlert()
//             })
//             .catch(err => {
//                 swal("Error", "Something google error", "error");
//             })
//     }

//     const handleSubmit = async e => {
//         e.preventDefault();
//         const form = e.target;
//         const email = form.email.value;
//         const password = form.password.value;
 

//         console.log(email, password)

//         // validation 
//         if( !email || !password ){
//             return swal("Error", "Please fillup all input field", "error");
//         }

//         if(password.length < 6){
//             return swal("Error", "Password should be minimum 6 charecter", "error");
//         }
   
//         login(email, password)
//         .then(res => {
//             signInAlert()
//         })
//         .catch(err => {
//             signInErrorAlert()
//         })

//     }

//     return (
//         <div className="flex flex-col md:flex-row justify-between items-center mt-[100px] ">
//             <img src="https://i.ibb.co/vjXZQCx/login-svg.png" alt="login" className="max-w-[40%] mx-auto " />
//          <div className="w-full md:w-[50%]  flex  flex-col items-center md:items-start justify-center md:justify-start">
//          <div className="w-full  ">
//                 <h1 className="text-[26px] text-primary font-bold">Well Come Back</h1>
//                 <p className="text-gray-400 mt-3 mb-10">Sign In to Continue</p>

//                 <span onClick={handleGoogleSignIn} className="p-2 rounded-full border-2 flex items-center justify-center w-[40px] ml-[200px] cursor-pointer ">
//                         <FaGoogle size={23}></FaGoogle>
//                     </span>
//                     <p className="text-[18px] font-bold mt-3 ml-[210px] my-10">Or</p>

//                 <form onSubmit={handleSubmit}>
              
//                     <label className="form-control w-full mb-4">
//                         <span className="text-[17px] ">Your Email</span>
//                         <input name="email" type="email" placeholder="Your Email" className="mx-atuo w-full md:w-[80%] p-2 outline-none border-2 rounded-md" />
//                     </label>

//                     <label className="form-control w-full mb-4">
//                         <span className="text-[17px] ">Your Password</span>
//                         <div className="relative w-full md:w-[80%]">
//                             <input name="password" type={show ? 'text' : 'password'} placeholder="Your Password" className="w-full  p-2 outline-none border-2 rounded-md" />

//                             {
//                                 show ?  <BiShow onClick={()=> setShow(!show)} size={22} className="absolute right-2 cursor-pointer top-[30%] "></BiShow>  :  <BiSolidHide onClick={()=> setShow(!show)} size={22} className="absolute right-2 cursor-pointer top-[30%] "></BiSolidHide>    
//                             }
                          
                       
//                         </div>
//                     </label>

//                     <button className='font-semibold mt-[40px] text-[19px] px-4 py-2 rounded-md bg-primary text-white'>Sign In</button>
//                     <p>You have no account? <Link to="/signUp" className="text-primary">Sign Up</Link></p>
//                 </form>
//             </div>
//          </div>
//         </div>
//     );
// };


import  { useState } from 'react';
import { Box } from 'lucide-react';
import './LoginRegisterFrom.css'
const LoginRegisterForm = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <div className={`relative w-full max-w-[850px] h-[550px] md:h-[650px] bg-white border-2 border-black rounded-lg 
        shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden ${isActive ? 'active' : ''}`}>
        
        {/* Background Rotations */}
        <div className={`absolute top-[-4px] right-0 w-[850px] h-[800px] bg-black origin-bottom-right 
          transition-transform duration-[2s] ease-in-out delay-1000
          ${isActive ? 'rotate-0 skew-y-0 delay-1000' : 'rotate-[5deg] skew-y-[50deg]'}`}>
        </div>
        
        <div className={`absolute top-full left-[200px] w-[850px] h-[800px] bg-white origin-bottom-left 
          transition-transform duration-[3s] ease-in-out delay-1000
          ${isActive ? 'rotate-[-4deg] skew-y-[-50deg] delay-1000' : 'rotate-0 skew-y-0'}`}>
        </div>

        {/* Login Form */}
        <div className="form-box login absolute top-0 left-0 w-full md:w-1/2 h-full flex justify-center flex-col 
          px-4 md:px-[40px] lg:px-[60px]">
          <h2 className="animation mb-6 relative text-3xl text-black text-center 
            after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 
            after:w-10 after:h-1 after:bg-black" style={{ '--i': 0, '--j': 21 }}>
            Login
          </h2>
          <form className="space-y-6">
            <div className="input-box animation relative w-full h-[50px] my-6" style={{ '--i': 1, '--j': 22 }}>
              <input type="text" required
                className="w-full h-full bg-transparent text-black text-base font-medium border-none outline-none 
                border-b-2 border-black transition-colors duration-500 pr-6 
                focus:border-[#17a] peer" />
              <label className="absolute top-1/2 left-0 -translate-y-1/2 text-base text-black pointer-events-none 
                transition-all duration-500 peer-focus:top-[-5px] peer-focus:text-[#17a] 
                peer-valid:top-[-5px] peer-valid:text-[#17a]">
                Username
              </label>
              <Box className="absolute top-1/2 right-0 -translate-y-1/2 text-lg transition-colors duration-500 
                peer-focus:text-[#17a] peer-valid:text-[#17a]" size={18} />
            </div>

            <div className="input-box animation relative w-full h-[50px] my-6" style={{ '--i': 2, '--j': 23 }}>
              <input type="password" required
                className="w-full h-full bg-transparent text-black text-base font-medium border-none outline-none 
                border-b-2 border-black transition-colors duration-500 pr-6 
                focus:border-[#17a] peer" />
              <label className="absolute top-1/2 left-0 -translate-y-1/2 text-base text-black pointer-events-none 
                transition-all duration-500 peer-focus:top-[-5px] peer-focus:text-[#17a] 
                peer-valid:top-[-5px] peer-valid:text-[#17a]">
                Password
              </label>
              <Box className="absolute top-1/2 right-0 -translate-y-1/2 text-lg transition-colors duration-500 
                peer-focus:text-[#17a] peer-valid:text-[#17a]" size={18} />
            </div>

            <button type="submit" 
              className="animation w-full h-[45px] bg-black text-white border-none rounded-[40px] cursor-pointer 
              text-base font-semibold transition-shadow duration-300 hover:shadow-lg" 
              style={{ '--i': 3, '--j': 24 }}>
              Login
            </button>

            <div className="animation text-sm text-black text-center mt-5" style={{ '--i': 5, '--j': 25 }}>
              <p>Don`t have an account? 
                <button onClick={handleRegisterClick} 
                  className="text-blue-600 font-semibold ml-1 hover:underline">
                  Sign Up
                </button>
              </p>
            </div>
          </form>
        </div>

        {/* Login Info */}
        <div className="info-text login absolute top-0 right-0 w-1/2 h-full hidden md:flex flex-col justify-center 
           pr-4 pb-[60px] text-right">
          <h2 className="animation text-4xl text-white leading-tight uppercase" style={{ '--i': 0, '--j': 20 }}>
            Welcome Back!
          </h2>
          <p className="animation text-base text-white" style={{ '--i': 1, '--j': 21 }}>
            Deleniti, rem?
          </p>
        </div>

        {/* Register Form */}
        <div className="form-box register absolute top-0 right-0 w-full md:w-1/2 h-full flex justify-center flex-col 
          px-4 md:px-[40px] lg:px-[60px]">
          <h2 className="animation mb-10 relative text-3xl text-black text-center 
            after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 
            after:w-10 after:h-1 after:bg-black" style={{ '--i': 17, '--j': 0 }}>
            Sign Up
          </h2>
          <form className="space-y-6">
            <div className="input-box animation relative w-full h-[50px] my-6" style={{ '--i': 18, '--j': 1 }}>
              <input type="text" required
                className="w-full h-full bg-transparent text-black text-base font-medium border-none outline-none 
                border-b-2 border-black transition-colors duration-500 pr-6 
                focus:border-[#17a] peer" />
              <label className="absolute top-1/2 left-0 -translate-y-1/2 text-base text-black pointer-events-none 
                transition-all duration-500 peer-focus:top-[-5px] peer-focus:text-[#17a] 
                peer-valid:top-[-5px] peer-valid:text-[#17a]">
                Username
              </label>
              <Box className="absolute top-1/2 right-0 -translate-y-1/2 text-lg transition-colors duration-500 
                peer-focus:text-[#17a] peer-valid:text-[#17a]" size={18} />
            </div>

            <div className="input-box animation relative w-full h-[50px] my-6" style={{ '--i': 19, '--j': 2 }}>
              <input type="email" required
                className="w-full h-full bg-transparent text-black text-base font-medium border-none outline-none 
                border-b-2 border-black transition-colors duration-500 pr-6 
                focus:border-[#17a] peer" />
              <label className="absolute top-1/2 left-0 -translate-y-1/2 text-base text-black pointer-events-none 
                transition-all duration-500 peer-focus:top-[-5px] peer-focus:text-[#17a] 
                peer-valid:top-[-5px] peer-valid:text-[#17a]">
                Email
              </label>
              <Box className="absolute top-1/2 right-0 -translate-y-1/2 text-lg transition-colors duration-500 
                peer-focus:text-[#17a] peer-valid:text-[#17a]" size={18} />
            </div>

            <div className="input-box animation relative w-full h-[50px] my-6" style={{ '--i': 20, '--j': 3 }}>
              <input type="password" required
                className="w-full h-full bg-transparent text-black text-base font-medium border-none outline-none 
                border-b-2 border-black transition-colors duration-500 pr-6 
                focus:border-[#17a] peer" />
              <label className="absolute top-1/2 left-0 -translate-y-1/2 text-base text-black pointer-events-none 
                transition-all duration-500 peer-focus:top-[-5px] peer-focus:text-[#17a] 
                peer-valid:top-[-5px] peer-valid:text-[#17a]">
                Password
              </label>
              <Box className="absolute top-1/2 right-0 -translate-y-1/2 text-lg transition-colors duration-500 
                peer-focus:text-[#17a] peer-valid:text-[#17a]" size={18} />
            </div>

            <button type="submit" 
              className="animation w-full h-[45px] bg-black text-white border-none rounded-[40px] cursor-pointer 
              text-base font-semibold transition-shadow duration-300 hover:shadow-lg" 
              style={{ '--i': 21, '--j': 4 }}>
              Sign Up
            </button>

            <div className="animation text-sm text-black text-center mt-5" style={{ '--i': 22, '--j': 5 }}>
              <p>Already have an account? 
                <button onClick={handleLoginClick} 
                  className="text-blue-600 font-semibold ml-1 hover:underline">
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>

        {/* Register Info */}
        <div className="info-text register absolute top-0 left-0 w-1/2 h-full hidden md:flex flex-col justify-center 
          pl-5 pointer-events-none">
          <h2 className="animation text-4xl text-white leading-tight uppercase" style={{ '--i': 17, '--j': 0 }}>
            Welcome Back!
          </h2>
          <p className="animation text-base text-white" style={{ '--i': 18, '--j': 1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, rem?
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default LoginRegisterForm;