import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewPost, { action as newPostAction } from "@/routes/NewPost.tsx";
import RootLayout from "@/routes/RootLayout.tsx";
import Posts, { loader as postsLoader } from "@/routes/Posts";
import "./index.css";
import ErrorElement from "@/components/ErrorElement/ErrorElement.tsx";
import PostDetail, { loader as postDetailLoader } from "@/routes/PostDetail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        errorElement: <ErrorElement />,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: newPostAction,
            errorElement: <ErrorElement />,
          },
          {
            path: ":id",
            element: <PostDetail />,
            loader: postDetailLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
