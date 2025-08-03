import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ShoppingCart from "../pages/ShoppingCart";
import CheckoutPage from "../pages/CheckoutPage";
import Products from "../pages/Products";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/cart',
                element: <ShoppingCart />
            },
            {
                path: '/checkout',
                element: <CheckoutPage />
            },
            {
                path: '/products',
                element: <Products />
            },
        ]
    },
]);


export default router