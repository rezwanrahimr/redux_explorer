import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
  },
]);

export default router;
