import React, { createContext, useContext } from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/about';


const router=createBrowserRouter([{
path:"/",
element:<App/>
},{
  path:"/about",element:<About/>
},
])
// @ts-ignore
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <React.StrictMode>
  
   <RouterProvider router={router}/>

  </React.StrictMode>
);


