import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Tables from "../Pages/Tables";
import Kanban from "../Pages/Kanban";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login/Login";



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
    {
        path: "/Login",
        element: <Login />,
    },
])
export default router