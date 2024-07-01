import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./components/UserContext";
import { Provider } from "react-redux";
import store from "./components/store";
import Cart from "./components/Cart";

/*
 *Header
 * - Logo
 * - Nav items
 *Body
 * - Search
 * - Restaurant Card container
 * - Restaurant Card
 *   - Image
 *   - Restaurant Name, Star Rating, Cuisine, delivery time
 *Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const data = useContext(UserContext);
  const [userName, setUserName] = useState();

  useEffect(() => {
    setUserName("Akshay Gotmare");
  }, []);
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<RouterProvider router={appRouter} />);
