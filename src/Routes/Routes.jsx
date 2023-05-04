import { Navigate, Routes, createBrowserRouter } from "react-router-dom";


import Main from "../Layout/Main/Main";
import LoginLayout from "../Layout/Main/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Recipes from "../Recipes/Recipes";
import Home from "../Home/Home";
import PrivateRoute from "./PrivateRoute";
import QuestionAndAnswer from "../QuestionAndAnswer/QuestionAndAnswer";
import ErrorPage from "../Error/ErrorPage";


const router = createBrowserRouter([
{
    path:"/",
    element:<LoginLayout></LoginLayout>,
    children:[
        {
            path:'/',
            element:<Navigate to="/home"></Navigate>
        },
        {
            path:'/login',
            element:<Login></Login>,
    
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

        

},

{
                path:'chef/:id',
                element:<PrivateRoute><Recipes></Recipes></PrivateRoute>,
                loader:({params})=>fetch(`https://assignment-10-server-delta-henna.vercel.app/chefs/${params.id}`)
                
},
{
    path:"/home",
    element:<Home></Home>
},
{
    path:"/blog",
    element:<QuestionAndAnswer></QuestionAndAnswer>
},

{
    path:'*',
    element:<ErrorPage></ErrorPage>
}

          
            
    
    ])
export default router;