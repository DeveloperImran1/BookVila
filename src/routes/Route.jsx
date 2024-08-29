import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import SignIn from "../shared/signIn/SignIn";
import SignUp from "../shared/signUp/SignUp";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/signIn",
            element: <SignIn></SignIn>
        },
        {
            path: "/signUp",
            element: <SignUp></SignUp>
        },
      ]
    },
  ]);

  export default router;