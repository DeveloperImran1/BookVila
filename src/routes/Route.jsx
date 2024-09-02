import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import SignIn from "../shared/signIn/SignIn";
import SignUp from "../shared/signUp/SignUp";
import Home from "../pages/home/Home";
import DashboardHome from "../pages/dashboard/dashboardHome/DashboardHome";
import AddProducts from "../pages/dashboard/addProducts/AddProducts";
import AllProducts from "../pages/dashboard/allProducts/AllProducts";
import DashboardContainer from "../pages/dashboard/dashboardHome/DashboardContainer";
import DashboardCharts from "../pages/dashboard/dashboardHome/DashboardCharts";
import ProductDetails from "../pages/productDetails/ProductDetails";

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
        {
            path: "/product/:id",
            element: <ProductDetails></ProductDetails>
        },
      ]
    },
    {
      path: "/dashboard",
      element: <DashboardHome></DashboardHome>,
      children: [
        {
          path: "/dashboard",
          element: <DashboardCharts></DashboardCharts>
        },
        {
          path: "/dashboard/allProducts",
          element: <AllProducts></AllProducts>
        },
        {
          path: "/dashboard/addProducts",
          element: <AddProducts></AddProducts>
        },
      ]
    }
  ]);

  export default router;