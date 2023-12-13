import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Tables from "../Pages/Tables";
import Kanban from "../Pages/Kanban";
import Profile from "../Pages/Profile";



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
    {
        path: "/Kanban",
        element: <Kanban />,
    },
    {
        path: "/Profile",
        element: <Profile />,
    },
])
export default router