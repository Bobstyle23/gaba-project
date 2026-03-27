import { createBrowserRouter } from "react-router-dom";
import { Layout, HomePage, ErrorPage, UserDetailPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "users/:id",
        element: <UserDetailPage />,
      },
    ],
  },
]);

export default router;
