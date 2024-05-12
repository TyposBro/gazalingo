import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Test, Menu, Rank, Quest, Notification, Profile } from "pages/";

import { Header } from "components/";

const coursesRouter = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Header />
            <Menu />
          </>
        ),
      },
      { path: "/test", element: <Test /> },
    ],
  },
]);

const profileRouter = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Rank />,
      },
      {
        path: "/:id",
        element: <Profile />,
      },
    ],
  },
]);

export const CoursesRouter = () => {
  return <RouterProvider router={coursesRouter} />;
};

export const ProfileRouter = () => {
  return <RouterProvider router={profileRouter} />;
};
