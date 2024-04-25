import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Test, Menu, Rank, Quest, Notification, Profile } from "pages/";

import { Header, Nav } from "components/";

const Courses = () => {
  return (
    <>
      <Header />
      <Menu />
    </>
  );
};

const Layout = () => {
  return (
    <>
      <Outlet />
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
        { path: "/course", element: <Courses /> },
        { path: "/profile", element: <Profile /> },
        { path: "/notification", element: <Notification /> },
        { path: "/test", element: <Test /> },
      ],
    }
  ]
);



export const Router = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default Router;
