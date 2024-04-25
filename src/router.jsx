import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Test, Menu, Rank, Quest, Notification, Profile } from "pages/";

import { Header, Nav } from "components/";
import { Courses, SwiperComponent } from "exp/";

const Layout = () => {
  return (
    <>
      <SwiperComponent />
      <Nav />
    </>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Courses /> },
        { path: "/quest", element: <Quest /> },
        { path: "/rank", element: <Rank /> },
        { path: "/profile", element: <Profile /> },
        { path: "/notification", element: <Notification /> },

      ],
    },
    { path: "/test", element: <Test /> },
    {
      path: "/profile/:id", element: <>
        <Profile />
        <Nav />
      </>
    },
  ]
);



export const Router = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default Router;
