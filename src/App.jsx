// React hooks
import { useContext, useState } from "react";

// RRD hooks
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

// Conponents
import Loader from "./components/Loader";

// Layouts
import RootLayouts from "./layouts/RootLayouts";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const [loader, setLoader] = useState(false);
  const { user } = useContext(GlobalContext);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <RootLayouts />
        </ProtectedRoutes>
      ),
      children: [{ index: true, element: <Home /> }],
    },
    {
      path: "/login",
      element: user ? <Navigate to={"/"} /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to={"/"} /> : <Signup />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <>
      {loader && <Loader />}
      <RouterProvider router={routes} />
    </>
  );
}

// routes

export default App;
