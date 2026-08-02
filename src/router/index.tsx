import { createBrowserRouter } from "react-router-dom"
import NotFoundPage from "../pages/NotFoundPage"
import HomePage from "../pages/HomePage"
import CommingSoonPage from "../pages/CommingSoonPage"

const router = createBrowserRouter([
  // Mapeador de Rutas
   {
     path: "/",
     element: <HomePage />,
   },
    {
     path: "/homepage",
     element: <HomePage />,
   },
    {
     path: "/comming-soon",
     element: <CommingSoonPage />,
   },
   {
     path: "/not-found",
     element: <NotFoundPage />,
   },

  {
    path: "/DBP-CS2031",
    element: <HomePage />
  },

    {
    path: "/DBP-CS2031/404-not-found",
    element: <NotFoundPage />
  },

      {
    path: "/DBP-CS2031/comming-soon",
    element: <CommingSoonPage />
  },
      {
    path: "/DBP-CS2031/homepage",
    element: <HomePage />
  },

  {
    path: "/DBP-CS2031/homepage/",
    element: <HomePage />
  },

  {
    // Cualquier ruta no mapeada
    path: "*",
    element: <NotFoundPage />
  },

])

export default router
