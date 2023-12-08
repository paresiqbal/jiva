// RDD
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Dashboard from "@/pages/Dashboard";
import Error from "@/pages/Error";

// layout
import MainLayout from "@/layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
