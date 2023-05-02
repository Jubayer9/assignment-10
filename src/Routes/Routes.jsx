import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Chef from "../Pages/Home/Chef/Chef";
import Login from "../Pages/Login/Login";
import Header from "../Pages/Home/Header/Header";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Header></Header>
            },
            
    
            {
                path:'/login',
                element:<Login></Login>
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