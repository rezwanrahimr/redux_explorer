import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/index";
import Dashboard from "../Pages/Dashboard";
import AddForm from "../Components/AddForm/AddForm";
import Home from "../Pages/Home";
import LoadDataOnDashboard from "../Components/LoadDataOnDashboard/LoadDataOnDashboard";
import EditForm from "../Components/EditForm/EditForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/addForm",
        element: <AddForm />,
      },
      {
        path: "/dashboard/allPost",
        element: <LoadDataOnDashboard />,
      },
      {
        path: "/dashboard/editPost/:id",
        element: <EditForm />,
      },
    ],
  },
]);

export default router;
