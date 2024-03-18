import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
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
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import getCurrentUser from "./utils/getCurrentUser";

const queryClient = new QueryClient();

function App() {
  const user = getCurrentUser();
  const AuthLayout = () => {
    return (
      <div className="">
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </div>
    );
  };
  const MainLayout = () => {
    return (
      <div>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Sidebar />
          <Outlet />
        </QueryClientProvider>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="auth/login" />;
    }

    return children;
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

      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),

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
