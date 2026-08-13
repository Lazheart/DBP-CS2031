import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import CommingSoonPage from "../pages/CommingSoonPage";
import GitPage from "../pages/tools/GitPage";
import DockerPage from "../pages/tools/DockerPage";
{
  /* import PostmanPage from "../pages/tools/PostmanPage"; */
}
import ToolsPage from "../pages/tools/ToolsPage";
import BackendPage from "../pages/backend/BackendPage";
import FrontendHomePage from "../pages/frontend/FrontendHomePage";
import DeployPage from "../pages/deploy/DeployPage";
import IntroductionPage from "../pages/IntroductionPage";
import GithubPage from "../pages/tools/GithubPage";

import RootLayout from "../components/RootLayout";
import AxiosPage from "../pages/frontend/RouterAxiosPage";
import ReactCssPage from "../pages/frontend/ReactCssPage";
import RouterAxiosPage from "../pages/frontend/RouterAxiosPage";
import HooksStoragePage from "../pages/frontend/HooksStoragePage";
import TypescriptUxPage from "../pages/frontend/TypescriptUxPage";
import ComponentsPage from "../pages/frontend/ComponentsPage";

const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/DBP-CS2031/",
          element: <HomePage />,
        },
        {
          path: "/homepage",
          element: <HomePage />,
        },
        {
          path: "/introduction",
          element: <IntroductionPage />,
        },
        {
          path: "/tools",
          element: <ToolsPage />,
        },
        {
          path: "/tools/github",
          element: <GithubPage />,
        },
        {
          path: "/backend",
          element: <BackendPage />,
        },
        {
          path: "/frontend",
          element: <FrontendHomePage />,
        },
        {
          path: "/frontend/react-css",
          element: <ReactCssPage />,
        },
        {
          path: "/frontend/components",
          element: <ComponentsPage />,
        },
        {
          path: "/frontend/router-axios",
          element: <RouterAxiosPage />,
        },
        {
          path: "/frontend/hooks-storage",
          element: <HooksStoragePage />,
        },
        {
          path: "/frontend/TypeScript",
          element: <TypescriptUxPage />,
        },

        {
          path: "/deployment",
          element: <DeployPage />,
        },
        {
          path: "/deploy/",
          element: <DeployPage />,
        },
        {
          path: "/tools/git",
          element: <GitPage />,
        },
        {
          path: "/tools/docker",
          element: <DockerPage />,
        },
        {
          path: "/tools/postman/",
          element: <CommingSoonPage />,
        },
        {
          path: "/git",
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
          path: "/backend/*",
          element: <CommingSoonPage />,
        },
        {
          path: "/deployment/*",
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
    },
  ],
  {
    basename: "/DBP-CS2031",
  },
);

export default router;
