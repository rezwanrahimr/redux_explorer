import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/index";
import Dashboard from "../Pages/Dashboard";
import AddForm from "../Components/AddForm/AddForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
  },
  {
    path:"/dashboard",
    element:<Dashboard/>,
    children:[
      {
        path:"/dashboard/addForm",
        element:<AddForm/>
      }
    ]
  }
]);

export default router;
