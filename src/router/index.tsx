import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";

const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const CommingSoonPage = lazy(() => import("../pages/CommingSoonPage"));
const GitPage = lazy(() => import("../pages/tools/GitPage"));
const DockerPage = lazy(() => import("../pages/tools/DockerPage"));
const ToolsPage = lazy(() => import("../pages/tools/ToolsPage"));
const BackendPage = lazy(() => import("../pages/backend/BackendPage"));
const FrontendHomePage = lazy(() => import("../pages/frontend/FrontendHomePage"));
const DeployPage = lazy(() => import("../pages/deploy/DeployPage"));
const IntroductionPage = lazy(() => import("../pages/IntroductionPage"));
const GithubPage = lazy(() => import("../pages/tools/GithubPage"));

const AxiosPage = lazy(() => import("../pages/frontend/RouterAxiosPage"));
const ReactCssPage = lazy(() => import("../pages/frontend/ReactCssPage"));
const RouterAxiosPage = lazy(() => import("../pages/frontend/RouterAxiosPage"));
const HooksStoragePage = lazy(() => import("../pages/frontend/HooksStoragePage"));
const TypescriptUxPage = lazy(() => import("../pages/frontend/TypescriptUxPage"));
const ComponentsPage = lazy(() => import("../pages/frontend/ComponentsPage"));

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
          path: "/frontend/axios",
          element: <AxiosPage />,
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
