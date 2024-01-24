import React from "react";
import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import RootLayout from "./pages/RootLayout";
import Index from "./pages/Index";
import ErrorPage from "./pages/ErrorPage";
import store from "./state";

const AddPost = lazy(() => import("./pages/AddPost"));
const EditPost = lazy(() => import("./pages/EditPost"));
const Details = lazy(() => import("./pages/Details"));

const paramsHandler = ({ params }) => {
  if (isNaN(params.id)) {
    throw new Response("Bad Request", {
      statusText: "please Insert correct ID",
      status: 400,
    });
  }
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "post",
        element: <Index />,
      },
      {
        path: "post/add",
        element: (
          <Suspense fallback="Loading please wait">
            <AddPost />
          </Suspense>
        ),
      },
      {
        path: "post/:id/edit",
        element: (
          <Suspense fallback="Loading please wait">
            <EditPost />
          </Suspense>
        ),
        loader: paramsHandler,
      },
      {
        path: "post/:id",
        element: (
          <Suspense fallback="Loading please wait">
            <Details />
          </Suspense>
        ),
        loader: paramsHandler,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
