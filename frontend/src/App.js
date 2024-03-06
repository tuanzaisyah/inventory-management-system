import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductInformation from "./pages/ProductInformation";
import Suppliers from "./pages/Suppliers";
import SupplierInformation from "./pages/SupplierInformation";
import Profile from "./pages/Profile";

function App() {
  const AuthLayout = () => {
    return (
      <div className="">
        <Outlet />
      </div>
    );
  };
  const MainLayout = () => {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "auth",
      element: <AuthLayout />,
      children: [
        {
          path: "sign-up",
          element: <SignUp />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },

        {
          path: "inventory",
          element: <Products />,
        },
        {
          path: "inventory/:id",
          element: <ProductInformation />,
        },
        {
          path: "supplier",
          element: <Suppliers />,
        },
        {
          path: "supplier/:id",
          element: <SupplierInformation />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
