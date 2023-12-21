// React hooks
import { useState } from "react";

// RRD hooks
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Conponents
import Loader from "./components/Loader";

// Layouts
import RootLayouts from "./layouts/RootLayouts";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [loader, setLoader] = useState(false);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayouts />,
      elements: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return (
    <>
      {loader && <Loader />}
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
