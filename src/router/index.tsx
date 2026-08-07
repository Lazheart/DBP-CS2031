import { createBrowserRouter } from "react-router-dom"
import NotFoundPage from "../pages/NotFoundPage"
import HomePage from "../pages/HomePage"
import CommingSoonPage from "../pages/CommingSoonPage"
import GitPage from "../pages/GitPage"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/homepage",
      element: <HomePage />,
    },
    {
      path: "/tools/git",
      element: <GitPage />,
    },
    {
      path: "/tools/git/",
      element: <GitPage />,
    },
    {
      path: "/comming-soon",
      element: <CommingSoonPage />,
    },
    {
      path: "/frontend/*",
      element: <CommingSoonPage />,
    },
    {
      path: "/not-found",
      element: <NotFoundPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ],
  {
    basename: "/DBP-CS2031",
  }
)

export default router
