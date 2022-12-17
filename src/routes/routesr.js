import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";

const routers=createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
         {
               path: '/',
               element: <Home></Home>
         },
         {
            path: '/shows/:id',
            element:<Category></Category>,
            loader:({params})=>fetch (`https://api.tvmaze.com/shows/${params.id}`)
            },

        ]
    }
])
export default routers;