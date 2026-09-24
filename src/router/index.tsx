import { createBrowserRouter } from "react-router-dom";
import BirthdayLayout from "../layouts/BirthdayLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BirthdayLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
