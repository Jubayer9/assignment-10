import { Navigate, createBrowserRouter } from "react-router-dom";

import Chef from "../Pages/Home/Chef/Chef";
import Main from "../Layout/Main/Main";
import LoginLayout from "../Layout/Main/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Recipes from "../Recipes/Recipes";
import Home from "../Home/Home";
import PrivateRoute from "./PrivateRoute";
import QuestionAndAnswer from "../QuestionAndAnswer/QuestionAndAnswer";


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
                loader:({params})=>fetch(`http://localhost:5000/chefs/${params.id}`)
                
},
{
    path:"/home",
    element:<Home></Home>
},
{
    path:"/blog",
    element:<QuestionAndAnswer></QuestionAndAnswer>
}

          
            
    
    ])
export default router;