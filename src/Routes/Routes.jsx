import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Chef from "../Pages/Home/Chef/Chef";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/chef/:id',
                element:<Chef></Chef>,
                loader:({params})=>fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    }
])
export default router;