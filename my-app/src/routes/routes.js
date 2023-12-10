import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Tables from "../Pages/Tables";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Market",
        element: <Shop />,
    },
    {
        path: "/Tables",
        element: <Tables />,
    },
])
export default router