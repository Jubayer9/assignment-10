import { Navigate, createBrowserRouter } from "react-router-dom";

import Chef from "../Pages/Home/Chef/Chef";
import Main from "../Layout/Main/Main";
import LoginLayout from "../Layout/Main/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register/Register";


const router = createBrowserRouter([
{
    path:"/",
    element:<LoginLayout></LoginLayout>,
    children:[
        {
            path:'/',
            element:<Navigate to="chef"></Navigate>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
    ]
},


    {
        path:'chef',
        element:<Main></Main>,
        children:[
  

  {
                path:':id',
                element:<Chef></Chef>,
            
              
            }
            
        ]  }
    
    ])
export default router;