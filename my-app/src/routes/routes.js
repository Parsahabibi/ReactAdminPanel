import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Market",
        element: <Shop />,
    },
])
export default router