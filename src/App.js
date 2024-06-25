import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <RouterProvider router={appRouter} />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// root.render(<RouterProvider router={appRouter} />);
