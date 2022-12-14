import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Contract from "../Contract/Contract";
import Homes from "../Home/Homes/Homes";
import Portfolio from "../Portfolio/Portfolio";

 export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Homes></Homes>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/portfolio',
                element:<Portfolio></Portfolio>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/contract',
                element:<Contract></Contract>
            },
        ]
    },
   
])